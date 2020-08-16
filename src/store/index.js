import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cvTemplate: {
      fullName: "",
      jobTitle: "",
      websitesSocialLinks: [
        {
          label: "",
          link: ""
        }
      ]
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
