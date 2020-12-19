const vehicleFunctions = require('freeroam/vehicle/vehicleFunctions');

class vehicleManager {

    constructor() {
        this.status = false;
        this.audioStreamBrowser = null;

        this.modalData = [
            {id: 1, htmlID: 'audio', name: 'АУДИО', status: false, vehicleKey: 'audio'},
            {id: 2, htmlID: 'electrical-truck', name: 'АВАРИЙКА', status: false, vehicleKey: 'electricalTruck'},
            {id: 3, htmlID: 'lights', name: 'СВЕТ В САЛОНЕ', status: false, vehicleKey: 'lightsInCar'},
            {id: 4, htmlID: 'hood', name: 'КАПОТ', status: false, vehicleKey: 'hood'},
            {id: 5, htmlID: 'trunk', name: 'БАГАЖНИК', status: false, vehicleKey: 'trunk'},
            {id: 6, htmlID: 'speed-limit-control', name: 'ЛИМИТ КОНТРОЛЬ', status: false, vehicleKey: 'speedLimit'},
        ];

        // Config
        this.launchKey = 0x4B;
        this.bindLaunchKey();
        this.events();
    }


    destroy() {
        this.unBindLaunchKey();
        mp.events.call('comeBackFromBrowser');
    }

    getDataForModal() {
        const vehicle = player.vehicle;
        if (!vehicle) return;

        const {audio, electricalTruck, lightsInCar, hood, trunk, speedLimit} = vehicle;

        return this.modalData = [
            {id: 1, htmlID: 'audio', name: 'АУДИО', status: audio, vehicleKey: 'audio'},
            {id: 2, htmlID: 'electrical-truck', name: 'АВАРИЙКА', status: electricalTruck, vehicleKey: 'electricalTruck'},
            {id: 3, htmlID: 'lights', name: 'СВЕТ В САЛОНЕ', status: lightsInCar, vehicleKey: 'lightsInCar'},
            {id: 4, htmlID: 'hood', name: 'КАПОТ', status: hood, vehicleKey: 'hood'},
            {id: 5, htmlID: 'trunk', name: 'БАГАЖНИК', status: trunk, vehicleKey: 'trunk'},
            {id: 6, htmlID: 'speed-limit-control', name: 'ЛИМИТ КОНТРОЛЬ', status: speedLimit, vehicleKey: 'speedLimit'},
        ];
    }

    CEFChangesHandler(data) {
        // Двухсторонняя проверка, если изменений нет относительно тех данных которые были в последний раз, то игнорим, иначе выполняем действия с машиной согласно изменениям.
        const changesData = this.data.filter((f, idx) => f.status !== this.modalData[idx]); // Изменения

        if (changesData.length) {
            this.modalData = [...data];

            changesData.forEach(f => {
                switch (f.vehicleKey) {
                case 'audio':
                    break;

                case 'electricalTruck':
                    this.toggleElectricalTruck(f.status);
                    break;

                case 'lightsInCar':
                    this.toggleLightsInCar(f.status);
                    break;

                case 'hood':
                    this.toggleHood(f.status);
                    break;

                case 'trunk':
                    this.toggleTrunk(f.status);
                    break;

                case 'speedLimit':
                    this.setSpeedLimit(f.status);
                    break;
                }
            });


        }
    }

    setActiveStatus(status) {

        this.status = status;

        if (status) {
            mp.events.call('toggleModal', 'vehicle-manager', 'chat', this.getDataForModal());
        } else {
            mp.events.call('comeBackFromBrowser');
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
        mp.keys.bind(this.launchKey, false, () => {
            if (player.vehicle) {
                this.showMenu();
            }
        });

    }

    unBindLaunchKey() {
        mp.keys.unbind(this.launchKey, true);
    }

    // Manager Functions

    createAudioLinkInput() {

        mp.events.call('comeBackFromBrowser');

        // hud = mp.browsers.new('package://freeroam/browsers/hud/vehicle/vehicleManagerMenu/vehicleManagerAudio.html');

        mp.events.add('browserDomReady', browser => {
            if (browser === hud) {
                mp.gui.cursor.show(true, true);
            }
        });

    }

    audioLinkInputHandler(audioLink) {
        this.audioLink = audioLink;
        mp.gui.cursor.show(false, false);
        this.setActiveStatus(false);

        mp.gui.chat.push(`Stream: ${audioLink}`);
        this.startAudioStreamInBrowser();

    }


    startAudioStreamInBrowser() {
        player.vehicle.audio = true;

        this.audioStreamBrowser = mp.browsers.new('package://freeroam/browsers/hud/vehicle/vehicleManagerMenu/audioMusic.html');


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
        mp.events.add('vehicleManager_CEFChangesHandler', data => this.CEFChangesHandler(JSON.parse(data)));

        // mp.events.add('vehicleManager_createAudioLinkInput', () => this.createAudioLinkInput());
        // mp.events.add('vehicleManager_audioLinkInputHandler', audioLink => this.audioLinkInputHandler(audioLink));
        // mp.events.add('vehicleManager_startAudioStreamInBrowser', () => this.startAudioStreamInBrowser());
        // mp.events.add('vehicleManager_stopAudioStreamInBrowser', () => this.stopAudioStreamInBrowser());

    }
}

exports = vehicleManager;
