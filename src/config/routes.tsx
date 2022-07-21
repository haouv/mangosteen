import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { First } from "../components/welcome/first";
import { Second } from "../components/welcome/second";
import { Third } from "../components/welcome/third";
import { Forth } from "../components/welcome/forth";
import { Welcome } from "../views/welcome";
import { FirstActions } from "../components/welcome/first-actions";
import { SecondActions } from "../components/welcome/second-actions";
import { ThirdActions } from "../components/welcome/third-actions";
import { ForthActions } from "../components/welcome/forth-actions";

export const routes: RouteRecordRaw[] = [
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      { path: "1", components: { main: First, footer: FirstActions } },
      { path: "2", components: { main: Second, footer: SecondActions  } },
      { path: "3", components: { main: Third, footer: ThirdActions} },
      { path: "4", components: { main: Forth, footer: ForthActions } },
    ],
  },
  { path: "/", redirect: "/welcome" },
];

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});
