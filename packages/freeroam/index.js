
function playerEnterVehicle(player, vehicle) {
    const playerName = player.name;
    const vehicleID = vehicle.id;

    mp.players.broadcast(`${playerName} got into the car with ID: ${vehicleID}`);
    player.call('playerEnteredVehicle');
}

mp.events.add('playerEnterVehicle', playerEnterVehicle);

// Init events.
require('./events.js');
// Init commands.
require('./commands.js');

// Sync Indicators
require('./indicators');
