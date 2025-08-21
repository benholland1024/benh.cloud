import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      display_tooltip: false,
      tooltip_message: "Hey :)",
      portfolio_items: []
    }
  },
  mutations: {
    show_tooltip (state, message) {
      state.display_tooltip = true;
      state.tooltip_message = message;
    },
    hide_tooltip (state) {
      state.display_tooltip = false;
      state.tooltip_message = "";
    }
  },
  modules: {
    
  },
})