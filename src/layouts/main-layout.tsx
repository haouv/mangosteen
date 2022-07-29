import { defineComponent } from "vue";
import { NavBar } from "../shared/navbar";
import s from "./main-layout.module.scss";

export const MainLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <NavBar class={s.navbar}>
          {{
            default: () => context.slots.title?.(),
            icon: () => context.slots.icon?.(),
          }}
        </NavBar>
        {context.slots.default?.()}
      </div>
    )
  }
})