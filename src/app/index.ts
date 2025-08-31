import { createApp } from "vue";
import "../style.css";
import App from "./App.vue";
import { router } from "./providers/router";
import { pinia } from "./providers/store";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
