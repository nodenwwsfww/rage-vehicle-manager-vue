/* eslint-disable no-console */
const NativeUI = require('nativeui');
const Menu = NativeUI.Menu;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;

exports = function(vehicle) {

    if (!vehicle) return;

    let audio = ['ВЫКЛ'];
    let electricalTruck = ['ВЫКЛ'];
    let lightsInCar = ['ВЫКЛ'];
    let hood = ['ЗАКРЫТ'];
    let trunk = ['ЗАКРЫТ'];

    if (vehicle.hood) hood.unshift('ОТКРЫТ');
    else hood.push('ОТКРЫТ');

    if (vehicle.trunk) trunk.unshift('ОТКРЫТ');
    else trunk.push('ОТКРЫТ');

    if (vehicle.lightsInCar) lightsInCar.unshift('ВКЛ');
    else lightsInCar.push('ВКЛ');

    if (vehicle.electricalTruck) electricalTruck.unshift('ВКЛ');
    else electricalTruck.push('ВКЛ');

    if (vehicle.audio) audio.unshift('ВКЛ');
    else audio.push('ВКЛ');

    const ui = new Menu('Транспорт', 'Управление транспортом', new Point(50, 50));

    ui.AddItem(new UIMenuListItem(
        'Аудио',
        'Вы можете включить аудио с Youtube, указав ссылку на видео.',
        new ItemsCollection(audio)
    ));

    ui.AddItem(new UIMenuListItem(
        'Аварийка',
        'Возможность включения аварийки в случае ДТП.',
        new ItemsCollection(electricalTruck)
    ));

    ui.AddItem(new UIMenuListItem(
        'Свет в салоне',
        'Включение/выключение света в салоне автомобиля.',
        new ItemsCollection(lightsInCar)
    ));

    ui.AddItem(new UIMenuListItem(
        'Капот',
        'Открытие/закрытие капота автомобиля.',
        new ItemsCollection(hood)
    ));

    ui.AddItem(new UIMenuListItem(
        'Багажник',
        'Открытие/закрытие багажника автомобиля.',
        new ItemsCollection(trunk)
    ));

    ui.AddItem(new UIMenuSliderItem(
        'Лимит контроль',
        ['30', '60', '90', '120', '150', '180', '210', '240', '270', '300'],
        5,
        'Установить органичение скорости на автомобиль (km/h)',
        true
    ));

    ui.ItemSelect.on(item => {
        if (item instanceof UIMenuListItem) {
            const newValue = (item.SelectedItem.DisplayText === 'ВКЛ' || item.SelectedItem.DisplayText === 'ОТКРЫТ') ? true : false;

            mp.gui.chat.push(`${item.SelectedItem.DisplayText}, ${item.SelectedItem.Data}, ${item.Text}, ${newValue}`);

            if (item.Text === 'Аудио') {
                if (newValue) mp.events.call('vehicleManager_createAudioLinkInput');
                else mp.events.call('vehicleManager_stopAudioStreamInBrowser');
            } else if (item.Text === 'Аварийка') mp.events.call('vehicleManager_toggleElectricalTruck', newValue);
            else if (item.Text === 'Свет в салоне') mp.events.call('vehicleManager_toggleLights', newValue);
            else if (item.Text === 'Капот') mp.events.call('vehicleManager_toggleHood', newValue);
            else if (item.Text === 'Багажник') mp.events.call('vehicleManager_togglenTrunk', newValue);

        } else if (item instanceof UIMenuSliderItem) {
            mp.gui.chat.push(`${item.Text}, ${item.Index}, ${item.IndexToItem(item.Index)}`);
        } else {
            console.log(item.Text);
        }
    });

    return ui;
};


// ui.SliderChange.on((item, index, value) => {
// 	console.log(item.Text, index, value);
// });



// $("#electrical-truck").click(function() {
//     mp.trigger('vehicleManager_turnElectricalTruck');
// });


// $("#lights").click(function() {
//     mp.trigger('vehicleManager_turnLights');
// });

// $("hood").click(function() {
//     mp.trigger('vehicleManager_openHood');
// });

// $("trunk").click(function() {
//     mp.trigger('vehicleManager_openTrunk');
// });

// $("set-audio").keydown(function(event) {
//     if (e.key === "Enter" || e.keyCode === 0x0D) {
//         mp.trigger('vehicleManager_setAudio');
//     }
// });

// $("speed-limit-control").click(function() {
//     mp.trigger('vehicleManager_setSpeedLimitControl');

// });
