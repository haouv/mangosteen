
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import {Foo} from '../views/Foo';
import {First} from '../components/welcome/first';
import {Second} from '../components/welcome/second';
import {Third} from '../components/welcome/third';
import {Forth} from '../components/welcome/forth';
import {Bar} from '../views/Bar';
import { Welcome } from '../views/welcome';

export const routes: RouteRecordRaw[] = [
  {path: '/', component: Welcome, children: [
    {path: '1', component: First},
    {path: '2', component: Second},
    {path: '3', component: Third},
    {path: '4', component: Forth},
  ]},
  {path: '/about', component: Bar}
]

export const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})