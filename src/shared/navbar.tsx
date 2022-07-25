import { defineComponent, ref } from "vue";
import s from './navbar.module.scss';

export const NavBar = defineComponent({
  setup: (props, context) => {
    const {slots} = context;
    return () => (
      <div class={s.navbar}>
        <span class={s.icon_wrapper}>
          {slots.icon?.()}
        </span>
        <span class={s.title_wrapper}>
          {slots.default?.()}
        </span>
      </div>
    )
  }
})