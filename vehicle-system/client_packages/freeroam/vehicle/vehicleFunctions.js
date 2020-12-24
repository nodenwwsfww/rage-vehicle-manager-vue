const blockedClasses = [13, 14, 15, 16, 21]; // https://wiki.rage.mp/index.php?title=Vehicle_Classes

exports = {

    toggleLeftIndicator(vehicle) {
        if (!vehicle) return;
        if (vehicle && vehicle.getPedInSeat(-1) == mp.players.local.handle && blockedClasses.indexOf(vehicle.getClass()) == -1) mp.events.callRemote('toggleIndicator', 1);
    },

    toggleRightIndicator(vehicle) {
        if (!vehicle) return;
        if (vehicle && vehicle.getPedInSeat(-1) == mp.players.local.handle && blockedClasses.indexOf(vehicle.getClass()) == -1) mp.events.callRemote('toggleIndicator', 0);
    },

    toggleElectricalTruck({vehicle}, newValue) {


        /* Функция: включение аварийки */
        if (!vehicle) return -1;
        if (vehicle.electricalTruck === newValue) return -1;

        if (vehicle && vehicle.getPedInSeat(-1) == mp.players.local.handle && blockedClasses.indexOf(vehicle.getClass()) == -1) mp.events.callRemote('toggleIndicator', 2);

        if (vehicle.electricalTruck) {
            vehicle.electricalTruck = false;

        } else {
            vehicle.electricalTruck = true;
        }
        return vehicle.electricalTruck;
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

        player.vehicle.speedLimitStatus = true;
        player.vehicle.speedLimit = limit / 3.6;
        player.vehicle.setMaxSpeed(player.vehicle.speedLimit);
        return limit;
    }

};
