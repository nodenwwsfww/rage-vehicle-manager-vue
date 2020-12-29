export default {
  actions: {},
  state: {
    activeModal: null,
    activeModalData: null,

    audioStreamData: null,

    hudStatus: 2,
    error: null,
  },
  getters: {


    getErrorData(state) {
      return state.error;
    },

    getAudioStreamData(state) {
      return state.audioStreamData;
    },

    getActiveModal(state) { 
      return state.activeModal;
    },

    getActiveModalData(state) {
      return state.activeModalData;
     },
  },

  mutations: {

    setError(state, text) {
      state.error = {
        text
      };
    },

    setAudioStreamData(state, data) {
      state.audioStreamData = JSON.parse(data);
    },

    setHudStatus(state, level) {
      state.hudStatus = level;
    },

    setActiveModal(state, data) {
      state.activeModal = data;
    },

    setActiveModalData(state, data) {
      state.activeModalData = JSON.parse(data);
    },

    disableModals(state) {
      state.activeModal = null;
      state.activeModalData = null;
      mp.trigger("disableModals");
    }
  },
}