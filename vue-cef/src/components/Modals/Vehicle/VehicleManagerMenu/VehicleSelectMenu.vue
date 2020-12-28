<template>
    <div class="popup">
        <h1 class="header">
            Транспорт
        </h1>

        <div>

            <div class="vehicle-manager-text">
                <p style="color: #5e93c0;">Нажмите ENTER чтобы применить
                </p>
            </div>
            <div class="vehicle-manager-functions">
                <VehicleFunctions v-bind:vehicleFunctionsData="modalData" v-bind:focusFunctionId="focusFunctionId" />
            </div>
        </div>
        <p id="vehicle-manager-close" v-on:click="closeModal">
            ЗАКРЫТЬ
        </p>
    </div>


</template>

<script>
    import VehicleFunctions from '@/components/Modals/Vehicle/VehicleFunctions';

    export default {
        components: {
            VehicleFunctions,
        },

        created() {
            document.addEventListener('keydown', ({
                key
            }) => this.keyHandler(key));
        },


        computed: {

            activeModal() {
                // eslint-disable-next-line no-undef
                return this.$store.getters.getActiveModal;
            },

            modalData() {
                return this.$store.getters.getActiveModalData;
            },

            checkForAChanges() {
                // Проверяет, есть ли изменения относительно тех данных, которые давались сервером изначально, тоесть чтобы не было пустых запросов на сервер (запросов без изменений)
                return this.sourceModalData.some((f, i) => this.modalData[i].status !== f.status);
            },


        },

        data() {
            return {
                focusFunctionId: 0, // Текущий id функции, которую выбрал игрок (стрелками)
                sourceModalData: [],
                getSourceDataStatus: false,
            }
        },

        methods: {
            closeModal() {
                this.$store.commit('disableModals');
            },

            keyHandler(key) {
                switch (key) {
                    case 'Enter': { // Enter
                        this.confirmChanges();
                        break;
                    }

                    case 'ArrowLeft':
                    case 'ArrowRight': { // Arrows <- and ->
                        if (this.focusFunctionId) {
                            if (this.focusFunctionId === 1) this.audioLinkSwitchHandler();
                            else this.changeTurnStatus();
                        }
                        break;
                    }

                    case 'ArrowDown': {
                        if (!this.focusFunctionId) return this.focusFunctionId = 1;
                        if (this.focusFunctionId < this.modalData.length) this.changeFocusFunctionId(this
                            .focusFunctionId + 1);
                        break;
                    }

                    case 'ArrowUp': {
                        if (this.focusFunctionId > 0) this.changeFocusFunctionId(this.focusFunctionId - 1);
                        break;
                    }
                }
            },

            audioLinkSwitchHandler() {
                const {audioStreamStatus=status} = this.modalData.filter(f => f.id === this.focusFunctionId);

                if (audioStreamStatus) {
                    this.stopAudioStream();
                } else {
                    this.showAudioLinkInputMenu();
                }
            },

            showAudioLinkInputMenu() {
                this.$store.commit('setActiveModal', this.activeModal + '-audio');
                this.$store.commit('setActiveModalData', JSON.stringify({action: 'input', data: this.modalData}));
            },


            stopAudioStream() {
                this.$store.commit('setActiveModal', this.activeModal + '-audio');
                this.$store.commit('setActiveModalData', JSON.stringify({action: 'stop', data: this.modalData}));
            },

            initChangesHandlerIfItNot() {
                if (!this.getSourceDataStatus) {
                    this.sourceModalData = [...this.$store.getters.getActiveModalData];
                    this.getSourceDataStatus = true;
                }
            },

            changeTurnStatus() {
                this.initChangesHandlerIfItNot();

                const data = [...this.modalData];

                const idx = data.findIndex(f => f.id === this.focusFunctionId);
                const focusFunctionData = {
                    ...data[idx]
                };

                if (!focusFunctionData) return;

                focusFunctionData.status = !focusFunctionData.status;

                data[idx] = focusFunctionData;

                this.$store.commit('setActiveModalData', JSON.stringify(data));
            },

            changeFocusFunctionId(newValue) {
                this.focusFunctionId = newValue;
            },

            confirmChanges() {
                this.initChangesHandlerIfItNot();

                if (this.checkForAChanges) { // Если есть изменения, то мы выполняем отправку данных, иначе ничего

                    const serverData = [...this.modalData];

                    mp.trigger('vehicleManager_CEFChangesHandler', JSON.stringify(serverData));

                    this.getSourceDataStatus = false;
                    this.focusFunctionId = 0;
                    this.closeModal();
                }
            }
        }
    }
</script>


<style scoped>
    @font-face {
        font-family: Roboto;
        src: url('~@/assets/fonts/Roboto-Regular.ttf');
        font-weight: 100;
    }

    .popup-overlay {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }


    .popup {
        display: inline-block;
        top: 50%;
        width: 450px;
        height: 370px;
        vertical-align: middle;
        border-radius: 10px;
        background-color: #21272E;
    }

    body {
        font-family: Roboto;
        text-transform: uppercase;
        font-size: 24px;
    }

    .header {
        color: white;
        text-align: center;
        font-family: Roboto;
        font-size: 48px;
        line-height: 70px;
    }

    ::v-deep .vehicle-manager-text {
        margin-top: auto;
        margin-left: 20px;
        font-family: Roboto;
        font-size: 18px;
    }

    #vehicle-manager-close {
        color: #21272E;
        background-color: #fff;
        padding-left: 20px;
        position: static;
        margin-top: 31px;
        font-family: Roboto;
    }

    .header {
        color: white;
        text-align: center;
        font-size: 48px;
        font-family: Roboto;
        line-height: 70px;
    }
</style>