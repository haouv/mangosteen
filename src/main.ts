import { routes } from "./config/routes";
import { createApp } from "vue";
import { App } from "./App";
import { createRouter } from "vue-router";
import { createWebHashHistory } from "vue-router";
import '@svgstore';

export const history = createWebHashHistory();

const router = createRouter({ history, routes });

const app = createApp(App);
app.use(router);
app.mount("#app");
