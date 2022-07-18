
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import {Foo} from '../views/Foo';
import {Bar} from '../views/Bar';

export const routes: RouteRecordRaw[] = [
  {path: '/', component: Foo},
  {path: '/about', component: Bar}
]

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})