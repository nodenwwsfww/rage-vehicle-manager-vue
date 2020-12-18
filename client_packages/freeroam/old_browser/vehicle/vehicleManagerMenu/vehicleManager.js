// Accept Handler
$('vehicle-manager-text').keydown(e => {
    if (e.key === 'Enter' || e.keyCode === 0x0D) {
        
    }
});

// 

$('#electrical-truck').click(function() {
    mp.trigger('vehicleManager_turnElectricalTruck');
});


$('#lights').click(function() {
    mp.trigger('vehicleManager_turnLights');
});

$('hood').click(function() {
    mp.trigger('vehicleManager_openHood');
});

$('trunk').click(function() {
    mp.trigger('vehicleManager_openTrunk');
});

$('set-audio').keydown(function(e) {
    if (e.key === 'Enter' || e.keyCode === 0x0D) {
        mp.trigger('vehicleManager_setAudio');
    }
});

$('speed-limit-control').click(function() {
    mp.trigger('vehicleManager_setSpeedLimitControl');
});
