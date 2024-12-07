import "vue-toastification/dist/index.css";
import "./assets/main.css";

import { createApp } from "vue";
import Toast, { POSITION } from "vue-toastification";

import App from "./App.vue";

const app = createApp(App);

app.use(Toast, {
    position: POSITION.BOTTOM_LEFT,
    timeout: 1500,
});

app.mount("#app");
