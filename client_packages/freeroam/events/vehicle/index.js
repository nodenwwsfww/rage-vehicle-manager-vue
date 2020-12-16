// Vehicle Manager
const VehicleManager = require('freeroam/vehicle/vehicleManager/vehicleManagerMenu');
const createVehicleManagerUI = require('freeroam/vehicle/vehicleManager/vehicleManagerUI');

let vehicleManager = null;


mp.events.add('playerEnteredVehicle', () => {
    if (!vehicleManager) {
        vehicleManager = new VehicleManager(createVehicleManagerUI(player.vehicle));
    }

});

mp.events.add('playerExitVehicle', () => {
    if (vehicleManager) {
        vehicleManager.destroy();
        vehicleManager = null;
    }

});
