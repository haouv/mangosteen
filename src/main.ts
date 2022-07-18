import { createApp } from "vue";
import { App } from "./App";
import { router } from "./config/routes";

createApp(App).use(router).mount("#app");
