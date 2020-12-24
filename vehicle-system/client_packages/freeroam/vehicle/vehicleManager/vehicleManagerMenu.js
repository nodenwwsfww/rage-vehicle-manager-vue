const vehicleFunctions = require('freeroam/vehicle/vehicleFunctions');

class vehicleManager {

    constructor() {
        this.status = false;
        this.audioStreamBrowser = null;

        this.modalData = [];
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

        let {
            audio,
            electricalTruck,
            lightsInCar,
            hood,
            trunk,
            speedLimitStatus,
            speedLimit
        } = vehicle;

        this.modalData = [{
            id: 1,
            htmlID: 'audio',
            name: 'АУДИО',
            status: Boolean(audio),
            vehicleKey: 'audio'
        },
        {
            id: 2,
            htmlID: 'electrical-truck',
            name: 'АВАРИЙКА',
            status: Boolean(electricalTruck),
            vehicleKey: 'electricalTruck'
        },
        {
            id: 3,
            htmlID: 'lights',
            name: 'СВЕТ В САЛОНЕ',
            status: Boolean(lightsInCar),
            vehicleKey: 'lightsInCar'
        },
        {
            id: 4,
            htmlID: 'hood',
            name: 'КАПОТ',
            status: Boolean(hood),
            vehicleKey: 'hood'
        },
        {
            id: 5,
            htmlID: 'trunk',
            name: 'БАГАЖНИК',
            status: Boolean(trunk),
            vehicleKey: 'trunk'
        },
        {
            id: 6,
            htmlID: 'speed-limit-control',
            name: 'ЛИМИТ КОНТРОЛЬ',
            status: Boolean(speedLimitStatus),
            value: Number(speedLimit),
            vehicleKey: 'speedLimit'
        },
        ];

        return this.modalData;
    }

    CEFChangesHandler(data) {
        // Двухсторонняя проверка, если изменений нет относительно тех данных которые были в последний раз, то игнорим, иначе выполняем действия с машиной согласно изменениям.

        if (!data) return;

        const changesData = data.filter((f, idx) => f.status !== this.modalData[idx].status); // Изменения

        if (changesData.length) {
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
                    this.setSpeedLimit(f.status, f.value);
                    break;
                }
            });


        }
    }

    setActiveStatus(status) {

        this.status = status;

        if (status) {
            const data = this.getDataForModal();
            vueCommit('setActiveModal', 'vehicle-manager');
            vueCommit('setActiveModalData', data);
            mp.events.call('prepareForBrowser', 'chat');
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
                this.toggleMenu();
            }
        });

    }

    unBindLaunchKey() {
        mp.keys.unbind(this.launchKey, true);
    }

    // Manager Functions

    /* createAudioLinkInput() {

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
    } */

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

    toggleHood(newValue) {
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
