import { defineComponent } from "vue";
import { Button } from "../shared/button";
import s from "./startpage.module.scss";

export const StartPage = defineComponent({
  setup: () => {
    return () => (
      <div class={s.startpage}>
        <div class={s.button_wrapper}>
          <Button class={s.button}>开始记账</Button>
        </div>
      </div>
    )
  },
});
