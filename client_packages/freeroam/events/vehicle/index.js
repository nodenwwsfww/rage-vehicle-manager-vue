// Vehicle Manager
const VehicleManager = require('freeroam/vehicle/vehicleManager/vehicleManagerMenu');
let vehicleManager = null;


mp.events.add('playerEnteredVehicle', () => {
    if (!vehicleManager) {
        vehicleManager = new VehicleManager();
    }

});

mp.events.add('playerExitVehicle', () => {
    if (vehicleManager) {
        vehicleManager.destroy();
        vehicleManager = null;
    }

});


// Indicators
const {toggleLeftIndicator, toggleRightIndicator} = require('freeroam/vehicle/vehicleFunctions');

// Numpad 4 - Toggle left indicator
mp.keys.bind(0x64, false, toggleLeftIndicator);

// Numpad 6 - Toggle right indicator
mp.keys.bind(0x66, false, toggleRightIndicator);

mp.events.add('entityStreamIn', (entity) => {
    if (entity.type === 'vehicle') {
        if (entity.hasVariable('IndicatorRight')) entity.setIndicatorLights(0, entity.getVariable('IndicatorRight'));
        if (entity.hasVariable('IndicatorLeft')) entity.setIndicatorLights(1, entity.getVariable('IndicatorLeft'));

        if (entity.hasVariable('bothIndicators')) {
            entity.setIndicatorLights(0, entity.getVariable('IndicatorRight'));
            entity.setIndicatorLights(1, entity.getVariable('IndicatorLeft'));
        }
    }
});

mp.events.addDataHandler('IndicatorRight', (entity, value) => {
    if (entity.type === 'vehicle') entity.setIndicatorLights(0, (value == null) ? false : value);
});

mp.events.addDataHandler('IndicatorLeft', (entity, value) => {
    if (entity.type === 'vehicle') entity.setIndicatorLights(1, (value == null) ? false : value);
});

mp.events.addDataHandler('bothIndicators', (entity, value) => {
    if (entity.type === 'vehicle') {
        entity.setIndicatorLights(0, (value == null) ? false : value);
        entity.setIndicatorLights(1, (value == null) ? false : value);
    }
});

