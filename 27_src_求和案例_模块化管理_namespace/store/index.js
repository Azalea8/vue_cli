import Vue from "vue";
import Vuex from "vuex";
import countOptions from "@/store/countOptions";
import personOptions from "@/store/personOptions";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions,
    }
})