global.hud = mp.browsers.new('package://freeroam/browsers/hud/index.html'); // Modal data
global.vueCommit = (browser, method, value) => browser.execute(`appData.commit('${method}', ${value})`);

mp.events.add('prepareForBrowser', visible => {
    if (visible == 'chat') {
        vueCommit(hud, 'setHudStatus', 1);
    } else if (visible == 'nothing') {
        vueCommit(hud, 'setHudStatus', 0);
        mp.game.ui.displayRadar(false);
        mp.game.ui.displayHud(false);
    }
    mp.gui.cursor.show(true, true);
});

mp.events.add('comeBackFromBrowser', () => {
    vueCommit(hud, 'setHudStatus', 2);
    vueCommit(hud, 'setModalActive', null);

    mp.game.ui.displayRadar(true);
    mp.game.ui.displayHud(true);
    mp.gui.cursor.show(false, false);
});

// Modal API (Hud)

mp.events.add('toggleModal', (toggleModalName, partsToHide, data) => {
    vueCommit(hud, 'setModalData', data || null);
    vueCommit(hud, 'setModalActive', toggleModalName);
    mp.events.call('prepareForBrowser', partsToHide);
});

mp.events.add('disableModals', () => mp.events.call('comeBackFromBrowser'));
