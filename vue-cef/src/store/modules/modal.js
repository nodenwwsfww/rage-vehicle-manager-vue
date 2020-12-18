export default {
  namespaced: true,
  actions: {},

  state: {
    activeModal: null,
    activeModalData: null
  },

  getters: {

    getActiveModal(state) { 
      return state.activeModal
    },

    getActiveModalData(state) {
      return  state.activeModalData
     },
  },

  mutations: {
    setModalActive(state, data) {
      state.activeModalData = data;
    },
    setModalData(state, data) {
      state.activeModalData = JSON.parse(data);
    },
    disableModals(state) {
      state.modalData = null;
      state.activeModal = null;
      // mp.trigger("disableModals");
    }
  },
}