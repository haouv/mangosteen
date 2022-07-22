import { defineComponent } from "vue";
import { Button } from "../shared/button";
import { FloatButton } from "../shared/float-button";
import s from "./startpage.module.scss";

export const StartPage = defineComponent({
  setup: () => {
    return () => (
      <div class={s.startpage}>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={() => { console.log("开始记账clicked") }}>开始记账</Button>
        </div>
        <div class={s.float_button_wrapper}>
          <FloatButton class={s.float_button} onClick={() => { console.log("floatbutton clicked") }}>
            <svg width="24px" height="24px">
              <use xlinkHref="#plus"></use>
            </svg>
          </FloatButton>
        </div>
      </div>
    );
  },
});
