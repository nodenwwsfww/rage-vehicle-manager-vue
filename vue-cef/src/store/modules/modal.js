export default {
  actions: {},
  state: {
    activeModal: 'vehicle-manager',
    activeModalData: [
      {id: 1, htmlID: "audio", name: "АУДИО", status: false},
      {id: 2, htmlID: "electrical-truck", name: "АВАРИЙКА", status: false},
      {id: 3, htmlID: "lights", name: "СВЕТ В САЛОНЕ", status: false},
      {id: 4, htmlID: "hood", name: "КАПОТ", status: false},
      {id: 5, htmlID: "trunk", name: "БАГАЖНИК", status: false},
      {id: 6, htmlID: "speed-limit-control", name: "ЛИМИТ КОНТРОЛЬ", status: false},
    ]
  },

  getters: {

    getActiveModal(state) { 
      return state.activeModal
    },

    getActiveModalData(state) {
      return state.activeModalData
     },
  },

  mutations: {
    setActiveModal(state, data) {
      state.activeModalData = data;
    },
    setActiveModalData(state, data) {
      state.activeModalData = JSON.parse(data);
    },
    disableModals(state) {
      state.modalData = null;
      state.activeModal = null;
      // mp.trigger("disableModals");
    }
  },
}