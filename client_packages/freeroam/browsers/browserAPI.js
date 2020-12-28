global.cefDomain = 'http://192.168.1.6:8080/';
// eslint-disable-next-line no-undef
global.hud = mp.browsers.new(cefDomain + 'hud'); // Modal data

global.vueCommit = function (methodName, data) {

    if (typeof data === 'string' || typeof data === 'number') hud.execute(`appData.commit('${methodName}', '${data}');`);
    else if (data === 'undefined') hud.execute(`appData.commit('${methodName}');`);
    else hud.execute(`appData.commit('${methodName}', '${JSON.stringify(data)}');`);
};

mp.events.add('prepareForBrowser', visible => {
    if (visible == 'chat') {
        vueCommit('setHudStatus', 1);
    } else if (visible == 'nothing') {
        vueCommit('setHudStatus', 0);
        mp.game.ui.displayRadar(false);
        mp.game.ui.displayHud(false);
    }
    mp.gui.cursor.show(true, true);
});

mp.events.add('comeBackFromBrowser', () => {
    vueCommit('setHudStatus', 2);
    vueCommit('setActiveModal', null);
    vueCommit('setActiveModalData', null);

    mp.game.ui.displayRadar(true);
    mp.game.ui.displayHud(true);
    mp.gui.cursor.show(false, false);
});

// Modal API (Hud)
mp.events.add('disableModals', () => mp.events.call('comeBackFromBrowser'));
