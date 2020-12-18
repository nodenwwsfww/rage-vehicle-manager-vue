global.player = mp.players.local;
global.vueCommit = function(browser, method, value) {
    browser.execute(`appData.commit('${method}', ${value})`);
}

require('freeroam/index.js');
