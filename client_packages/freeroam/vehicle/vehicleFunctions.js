exports = {

    toggleElectricalTruck(player, newValue) {
        /* Функция: включение аварийки */
        if (!player.vehicle) return -1;
        if (player.vehicle.electricalTruck === newValue) return -1;

        if (player.vehicle.electricalTruck) {
            player.vehicle.setIndicatorLights(1, false);
            player.vehicle.setIndicatorLights(0, false);
            player.vehicle.electricalTruck = false;

        } else {
            player.vehicle.setIndicatorLights(1, true);
            player.vehicle.setIndicatorLights(0, true);
            player.vehicle.electricalTruck = true;
        }
        return player.vehicle.electricalTruck;
    },

    toggleLightsInCar(player, newValue) {
        /* Функция: включение света в салоне */
        if (!player.vehicle) return -1;
        if (player.vehicle.lightsInCar === newValue) return -1;

        player.vehicle.setInteriorlight(newValue);
        player.vehicle.setInteriorlight(newValue);
        player.vehicle.lightsInCar = newValue;

        return newValue;
    },

    toggleHood(player, newValue) {
        /* Функция: открытие капота */
        if (!player.vehicle) return -1;
        if (player.vehicle.hood === newValue) return -1;

        if (player.vehicle.hood){
            player.vehicle.hood = false;
            player.vehicle.setDoorShut(4, true);
        } else {
            player.vehicle.hood = true;
            player.vehicle.setDoorOpen(4, false, true);
        }

        return player.vehicle.hood;
    },

    toggleTrunk(player, newValue) {
        /* Функция: открытие багажника */
        if (!player.vehicle) return -1;
        if (player.vehicle.trunk === newValue) return -1;

        if (player.vehicle.trunk){
            player.vehicle.trunk = false;
            player.vehicle.setDoorShut(5, true);
        } else {
            player.vehicle.trunk = true;
            player.vehicle.setDoorOpen(5, false, true);
        }

        return player.vehicle.trunk;
    },

    setSpeedLimit(player, limit) {
        /* Функция: установка ограничения скорости */
        if (!player.vehicle) return -1;
        player.vehicle.setMaxSpeed(limit / 3.6);
        return limit;
    }

};
