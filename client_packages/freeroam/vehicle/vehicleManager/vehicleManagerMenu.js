const vehicleFunctions = require('freeroam/vehicle/vehicleFunctions');

class vehicleManager {

    constructor(mainBrowser) {
        this.mainBrowser = mainBrowser;
        this.status = false;

        this.audioLinkInputBrowser = null;
        this.audioStreamBrowser = null;


        // Config
        this.key = 0x4B;
        this.bindLaunchKey();
        this.events();
    }


    destroy() {
        this.unBindLaunchKey();
        vueCommit(this.mainBrowser, 'setModalActive', null);
        vueCommit(this.mainBrowser, 'setModalActive', null);
        this.mainBrowser = null;
    }

    getDataForModal() {
        const vehicle = player.vehicle;
        if (!vehicle) return;
        
        return [
            {id: 1, htmlID: 'audio', name: 'АУДИО', status: false},
            {id: 2, htmlID: 'electrical-truck', name: 'АВАРИЙКА', status: false},
            {id: 3, htmlID: 'lights', name: 'СВЕТ В САЛОНЕ', status: false},
            {id: 4, htmlID: 'hood', name: 'КАПОТ', status: false},
            {id: 5, htmlID: 'trunk', name: 'БАГАЖНИК', status: false},
            {id: 6, htmlID: 'speed-limit-control', name: 'ЛИМИТ КОНТРОЛЬ', status: false},
        ];
    }

    setActiveStatus(status) {

        this.status = status;

        mp.gui.chat.show(!this.status);
        mp.gui.chat.activate(!this.status);

        if (status) {
            vueCommit(this.mainBrowser, 'setModalActive', 'vehicle-manager');
            vueCommit(this.mainBrowser, 'setModalActiveData', this.getDataForModal());
        } else {
            vueCommit(this.mainBrowser, 'setModalActive', null);
            vueCommit(this.mainBrowser, 'setModalActive', null);
        }

    }

    showMenu() {
        this.setActiveStatus(true);
    }

    hideMenu() {
        this.setActiveStatus(false);
    }

    toggleMenu() {
        // Show or Hide
        this.setActiveStatus(!this.status);
    }

    bindLaunchKey() {
        mp.keys.bind(this.key, false, () => {
            if (player.vehicle) {
                this.toggleMenu();
            }
        });

    }

    unBindLaunchKey() {
        mp.keys.unbind(this.key, true);
    }

    // Manager Functions

    createAudioLinkInput() {

        this.setActiveStatus(false);
        mp.gui.chat.show(false);
        mp.gui.chat.activate(false);

        this.audioLinkInputBrowser = mp.browsers.new('package://freeroam/browser/vehicle/vehicleManagerMenu/vehicleManagerAudio.html');

        mp.events.add('browserDomReady', browser => {
            if (browser === this.audioLinkInputBrowser) {
                mp.gui.cursor.show(true, true);
            }
        });

    }

    audioLinkInputHandler(audioLink) {
        this.audioLinkInputBrowser.destroy();
        this.audioLink = audioLink;
        mp.gui.cursor.show(false, false);
        this.setActiveStatus(false);

        mp.gui.chat.push(`Stream: ${audioLink}`);
        this.startAudioStreamInBrowser();

    }


    startAudioStreamInBrowser() {
        player.vehicle.audio = true;

        this.audioStreamBrowser = mp.browsers.new('package://freeroam/browser/vehicle/vehicleManagerMenu/audioMusic.html');

        mp.events.add('browserDomReady', browser => {
            if (browser === this.audioStreamBrowser) {
                this.audioStreamBrowser.execute(`
                    let audio = new Audio(${this.audioLink});
                    audio.play();
                `);
            }
        });
    }

    stopAudioStreamInBrowser() {
        player.vehicle.audio = false;
        if (this.audioStreamBrowser) this.audioStreamBrowser.destroy();
    }

    toggleElectricalTruck(newValue) {
        const changeStatus = vehicleFunctions.toggleElectricalTruck(player, newValue);
        if (changeStatus !== -1) {
            let messagePiece = changeStatus ? 'включили' : 'выключили';
            mp.game.graphics.notify(`Вы ${messagePiece} аварийку`);
        }

    }

    toggleLightsInCar(newValue) {
        const changeStatus = vehicleFunctions.toggleLightsInCar(player, newValue);
        if (changeStatus !== -1) {
            let messagePiece = changeStatus ? 'включили' : 'выключили';
            mp.game.graphics.notify(`Вы ${messagePiece} свет в салоне`);
        }
    }

    toggleHood (newValue) {
        const changeStatus = vehicleFunctions.toggleHood(player, newValue);
        if (changeStatus !== -1) {
            let messagePiece = changeStatus ? 'открыли' : 'закрыли';
            mp.game.graphics.notify(`Вы ${messagePiece} капот`);
        }
    }

    toggleTrunk(newValue) {
        const changeStatus = vehicleFunctions.toggleTrunk(player, newValue);
        if (changeStatus !== -1) {
            let messagePiece = changeStatus ? 'открыли' : 'закрыли';
            mp.game.graphics.notify(`Вы ${messagePiece} багажник`);
        }
    }

    setSpeedLimit(limit) {
        const newLimit = vehicleFunctions.setSpeedLimit(player, limit);
        if (newLimit !== -1) {
            mp.game.graphics.notify(`~b~${newLimit} km/h`);
        }
    }


    events() {
        mp.events.add('showVehicleManagerMenu', this.showMenu);
        mp.events.add('hideVehicleManagerMenu', this.hideMenu);

        // CEF events
        mp.events.add('vehicleManager_createAudioLinkInput', () => this.createAudioLinkInput());
        mp.events.add('vehicleManager_audioLinkInputHandler', audioLink => this.audioLinkInputHandler(audioLink));
        mp.events.add('vehicleManager_startAudioStreamInBrowser', () => this.startAudioStreamInBrowser());
        mp.events.add('vehicleManager_stopAudioStreamInBrowser', () => this.stopAudioStreamInBrowser());

        mp.events.add('vehicleManager_toggleElectricalTruck', this.toggleElectricalTruck);
        mp.events.add('vehicleManager_toggleLights', this.toggleLightsInCar);
        mp.events.add('vehicleManager_toggleHood', this.toggleHood);
        mp.events.add('vehicleManager_togglenTrunk', this.toggleTrunk);
        mp.events.add('vehicleManager_setSpeedLimitControl', this.setSpeedLimit);
    }
}

exports = vehicleManager;
