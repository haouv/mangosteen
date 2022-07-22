import { defineComponent, ref, Transition, VNode, watchEffect } from "vue";
import { RouteLocationNormalizedLoaded, RouterView, useRoute, useRouter } from "vue-router";
import MangoLogo from "../assets/icons/mangosteen.svg";
import { useSwipe } from "../hooks/useSwipe";
import { throttle } from "../shared/throttle";
import s from "./welcome.module.scss";
const pushMap: Record<string, string> = {
  welcome1: "/welcome/2",
  welcome2: "/welcome/3",
  welcome3: "/welcome/4",
  welcome4: "/welcome/1",
};
export const Welcome = defineComponent({
  setup: (props, context) => {
    const main = ref<HTMLElement>();
    const { direction, swiping } = useSwipe(main);
    const route = useRoute();
    const router = useRouter();

    const push = throttle(() => {
      const name = (route.name || "welcome1").toString();
      router.push(pushMap[name]);
      console.log('下一页')
    }, 500);
    watchEffect(() => {
      if (swiping.value && direction.value === "left") {
        push();
      }
    });
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={MangoLogo} alt="" />
          <h1>山竹记账</h1>
        </header>
        <main class={s.main} ref={main}>
          <RouterView name="main">
            {({ Component, route }: { Component: VNode; route: RouteLocationNormalizedLoaded }) => (
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
  },
});
