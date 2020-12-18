/* eslint-disable no-undef */
<template>
    <div v-if="activeModal === 'vehicle-manager'">
        <section class="main">
            <h1 class="header">
                Транспорт
            </h1>

            <div class="vehicle-manager-text">
                <p style="color: #5e93c0;" class="set-audio">Нажмите ENTER чтобы применить 6/6</p>
            </div>
            <div class="vehicle-manager-functions">
                <VehicleFunctions v-bind:vehicleFunctionsData="modalData"/>
            </div>
            <p id="vehicle-manager-close">
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

        computed: {

            activeModal() {
                return this.$store.getters.getActiveModal;
            },

            modalData() {
                return this.$store.getters.getActiveModalData;
            },


        },
        methods: {
            disableModals: function () {
                // eslint-disable-next-line no-undef
                appData.commit("others/disableModals");
            },
            keyHandler({
                keyCode
            }) {
                switch (keyCode) { // arrows
                    case 0x0D: { // Enter
                        this.confirmChanges();
                        break;
                    }

                    // Arrows
                    case 0x5B: { // < key left
                        break;
                    }

                    case 0x5C: { // < key right
                        break;
                    }

                    case 0x28: { // key down
                        break;
                    }

                    case 0x27: { // < key up
                        break;
                    }
                }
            }
        },
        confirmChanges() {
            // mp.trigger('VehicleManager_changesHandler', this.modalData);
            alert('Вы подтвердили изменения')
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

    ::v-deep .turn-status {
        position: relative;
        float: right;
        margin-right: 20px;
    }

    ::v-deep .function {
        color: white;
        font-family: Hacked-Kerx;
        line-height: 10px;
        margin-left: 20px;
    }
</style>