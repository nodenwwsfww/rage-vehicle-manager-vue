/* eslint-disable no-undef */
<template>
    <div v-if="activeModal === 'vehicle-manager'">
        <section class="main">
            <h1 class="header">
                Транспорт
            </h1>

            <div>

            
                <div class="vehicle-manager-text">
                    <p style="color: #5e93c0;" class="set-audio">Нажмите ENTER чтобы применить 6/6
                    </p>
                </div>
                <input type="hidden" v-on:keydown.enter="confirmChanges"/>
                <div class="vehicle-manager-functions">
                    <VehicleFunctions 
                    v-bind:vehicleFunctionsData="modalData"
                    v-bind:focusFunctionId="focusFunctionId"
                    />
                </div>
            </div>
            <p id="vehicle-manager-close" v-on:click="closeModal">
                ЗАКРЫТЬ
            </p>


        </section>
    </div>

</template>

<script>
    import VehicleFunctions from '@/components/Vehicle/VehicleFunctions'
    export default {
        components: {
            VehicleFunctions
        },

        created() {
            document.addEventListener('keydown', ({key}) => this.keyHandler(key));
        },

        computed: {

            activeModal() {
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
                sourceModalData: [
                    ...this.$store.getters.getActiveModalData
                ]
            }
        },
        methods: {
            closeModal() {
                this.$store.commit('disableModals');
            },

            keyHandler(key) {
                switch(key) {
                    case 'Enter' : { // Enter
                        this.confirmChanges();
                        break;
                    }

                    case 'ArrowLeft':
                    case 'ArrowRight': { // Arrows <- and ->
                        if (this.focusFunctionId) this.changeTurnStatus();
                        break;
                    }

                   case 'ArrowDown': {
                        if (!this.focusFunctionId) return this.focusFunctionId = 1;
                        if (this.focusFunctionId < this.modalData.length) this.changeFocusFunctionId(this.focusFunctionId + 1);
                        break;
                    }

                    case 'ArrowUp': {
                        if (this.focusFunctionId > 0) this.changeFocusFunctionId(this.focusFunctionId - 1);
                        break;
                    }
                }
            },

            changeTurnStatus() {

                const data = [...this.modalData];

                const idx = data.findIndex(f => f.id === this.focusFunctionId);
                const focusFunctionData = {...data[idx]};

                if (!focusFunctionData) return;

                focusFunctionData.status = !focusFunctionData.status;

                data[idx] = focusFunctionData;

                this.$store.commit('setActiveModalData', JSON.stringify(data));
            },

            changeFocusFunctionId(newValue) {
                this.focusFunctionId = newValue;
            },

            confirmChanges() {
                if (this.checkForAChanges) { // Если есть изменения, то мы выполняем отправку данных, иначе ничего
                    this.focusFunctionId = 0;
                    mp.trigger('vehicleManager_CEFChangesHandler', JSON.stringify(this.modalData));
                    this.closeModal();
                    alert('Изменения отправлены!')
                }
            }
        }
    }
</script>


<style scoped>
    @font-face {
        font-family: Hacked-KerX;
        src: url('~@/assets/fonts/Hacked_KerX.ttf');
        font-weight: 100;
    }
    .main {
        background-color: #21272E;
        width: 390px;
        height: 300px;
        border-radius: 10px;
        margin-left: auto;
        margin-right: auto
    }

    ::v-deep body {
        margin: 0;
        padding: 0;
        font-family: Hacked-KerX;
        text-transform: uppercase;
        font-size: 21px;
    }

    .text {
        text-align: center;
    }

    #youtube-audio {
        margin-top: 5px;
    }

    .header {
        color: white;
        text-align: center;
        font-size: 48px;
        font-family: Hacked-Kerx;
        line-height: 70px;
    }

    ::v-deep .vehicle-manager-text {
        margin-top: auto;
        margin-left: 20px;
        font-family: Hacked-Kerx;
        font-size: 16px;
    }

    #vehicle-manager-close {
        color: #21272E;
        background-color: #fff;
        padding-left: 20px;
        font-family: Hacked-Kerx;
    }

    .header {
        color: white;
        text-align: center;
        font-size: 48px;
        font-family: Hacked-Kerx;
        line-height: 70px;
    }
</style>