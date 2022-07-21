import { defineComponent, Transition, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import MangoLogo from "../assets/icons/mangosteen.svg";
import s from "./welcome.module.scss";

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={MangoLogo} alt="" />
          <h1>山竹记账</h1>
        </header>
        <main class={s.main}>
          <RouterView name="main">
            {({ Component, route}: { Component: VNode; route: RouteLocationNormalizedLoaded }) => (
              <Transition
                enterFromClass={s.slide_fade_enter_from}
                enterActiveClass={s.slide_fade_enter_active}
                leaveToClass={s.slide_fade_leave_to}
                leaveActiveClass={s.slide_fade_leave_active}
              >
                {Component}
              </Transition>
            )}
          </RouterView>
        </main>
        <footer class={s.actions}>
          <RouterView name="footer"></RouterView>
        </footer>
      </div>
    );
  }
});
