import { defineComponent } from "vue";
import { Button } from "../shared/button";
import { Center } from "../shared/center";
import { FloatButton } from "../shared/float-button";
import { Icon } from "../shared/icon";
import s from "./startpage.module.scss";

export const StartPage = defineComponent({
  setup: () => {
    return () => (
      <div class={s.startpage}>
        <nav>menu</nav>
        <Center class={s.center}>
          <Icon name="pig" class={s.pig}/>
        </Center>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={() => { console.log("开始记账clicked") }}>开始记账</Button>
        </div>
        <div class={s.float_button_wrapper}>
          <FloatButton iconName="plus" onClick={() => { console.log("floatbutton clicked") }}>
            <Icon name="plus" />
          </FloatButton>
        </div>
      </div>
    );
  },
});
