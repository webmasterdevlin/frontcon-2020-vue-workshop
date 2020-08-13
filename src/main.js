import { createApp } from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./router";

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");

/* Vue.js version 2

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

*/
