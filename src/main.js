/* Vue */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* Vuetify */
import vuetify from "./plugins/vuetify";
// Vue
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	vuetify,
	render: (h) => h(App)
}).$mount("#app");
