<template>
    <div class="root">
        <VehicleAudio v-if="activeModal === 'vehicle-manager-audio' && modalData" class="popup-overlay" />

        <VehicleSelectMenu v-if="activeModal === 'vehicle-manager' && modalData" class="popup-overlay" />
    </div>
</template>

<script>
    import VehicleSelectMenu from '@/components/Modals/Vehicle/VehicleManagerMenu/VehicleSelectMenu';
    import VehicleAudio from '@/components/Modals/Vehicle/VehicleManagerMenu/VehicleAudio';

    export default {
        components: {
            VehicleAudio,
            VehicleSelectMenu,
        },

        mounted() {
            let data = [{
                    id: 1,
                    htmlID: 'audio',
                    name: 'АУДИО',
                    status: '',
                    vehicleKey: 'audio'
                },
                {
                    id: 2,
                    htmlID: 'electrical-truck',
                    name: 'АВАРИЙКА',
                    status: Boolean(false),
                    vehicleKey: 'electricalTruck'
                },
                {
                    id: 3,
                    htmlID: 'lights',
                    name: 'СВЕТ В САЛОНЕ',
                    status: Boolean(false),
                    vehicleKey: 'lightsInCar'
                },
                {
                    id: 4,
                    htmlID: 'hood',
                    name: 'КАПОТ',
                    status: false,
                    vehicleKey: 'hood'
                },
                {
                    id: 5,
                    htmlID: 'trunk',
                    name: 'БАГАЖНИК',
                    status: false,
                    vehicleKey: 'trunk'
                },
                {
                    id: 6,
                    htmlID: 'speed-limit-control',
                    name: 'ЛИМИТ КОНТРОЛЬ',
                    status: 30,
                    value: false,
                    vehicleKey: 'speedLimit'
                },
            ];
            this.$store.commit('setActiveModalData', JSON.stringify(data))
            this.$store.commit('setActiveModal', 'vehicle-manager');
        },

        computed: {

            activeModal() {
                return this.$store.getters.getActiveModal;
            },

            modalData() {
                return this.$store.getters.getActiveModalData;
            },


        },
    }
</script>