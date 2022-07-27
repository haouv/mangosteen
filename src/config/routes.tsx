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
import { StartPage } from "../views/start-page";
import { ItemPage } from "../views/item-page";
import { ItemList } from "../components/item/item-list";
import { ItemCreate } from "../components/item/item-create";
import { TagPage } from "../views/TagPage";
import { TagCreate } from "../components/tag/tag-create";
import { TagEdit } from "../components/tag/tag-edit";

export const routes: RouteRecordRaw[] = [
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "", redirect: "/welcome/1" },
      { path: "1", name:"welcome1", components: { main: First, footer: FirstActions } },
      { path: "2", name:"welcome2", components: { main: Second, footer: SecondActions  } },
      { path: "3", name:"welcome3", components: { main: Third, footer: ThirdActions} },
      { path: "4", name:"welcome4", components: { main: Forth, footer: ForthActions } },
    ],
  },
  { path: "/", redirect: "/welcome" },
  { path: "/start", component: StartPage },
  { path: '/items', component: ItemPage, children: [
    {path: '', component: ItemList},
    {path: 'create', component: ItemCreate},
    {path: 'list', component: ItemList},
  ]},
  { path: "/tags", component: TagPage, children: [
    { path: 'create', component: TagCreate },
    { path: 'create', component: TagEdit },
  ] },
];
