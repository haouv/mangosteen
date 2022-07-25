import { defineComponent, ref } from "vue";
import { Button } from "../shared/button";
import { Center } from "../shared/center";
import { FloatButton } from "../shared/float-button";
import { Icon } from "../shared/icon";
import { NavBar } from "../shared/navbar";
import { Overlay } from "../shared/overlay";
import s from "./startpage.module.scss";

export const StartPage = defineComponent({
  setup: () => {
    let overlayVisibleRef = ref<boolean>(false);
    const onNavClick = () => {
      console.log("click");
      overlayVisibleRef.value = !overlayVisibleRef.value;
    };
    const onMaskClick = () => {
      overlayVisibleRef.value = false;
    }
    return () => (
      <div class={s.startpage}>
        <NavBar>
          {{
            default: () => "山竹记账",
            icon: () => <Icon name="nav" onClick={onNavClick} />,
          }}
        </NavBar>
        <Center class={s.center}>
          <Icon name="pig" class={s.pig} />
        </Center>
        <div class={s.button_wrapper}>
          <Button
            class={s.button}
            onClick={() => {
              console.log("开始记账clicked");
            }}
          >
            开始记账
          </Button>
        </div>
        <div class={s.float_button_wrapper}>
          <FloatButton
            iconName="plus"
            onClick={() => {
              console.log("floatbutton clicked");
            }}
          >
            <Icon name="plus" />
          </FloatButton>
        </div>
        {overlayVisibleRef.value && <Overlay onClose={onMaskClick}/>}
      </div>
    );
  },
});
