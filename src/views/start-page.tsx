import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/main-layout";
import { Button } from "../shared/button";
import { Center } from "../shared/center";
import { FloatButton } from "../shared/float-button";
import { Icon } from "../shared/icon";
import { NavBar } from "../shared/navbar";
import { Overlay } from "../shared/overlay";
import s from "./start-page.module.scss";

export const StartPage = defineComponent({
  setup: () => {
    let overlayVisibleRef = ref<boolean>(false);
    const onNavClick = () => {
      overlayVisibleRef.value = !overlayVisibleRef.value;
    };
    const onMaskClick = () => {
      overlayVisibleRef.value = false;
    }
    return () => (
      <div class={s.startpage}>
        <MainLayout>
          {{
            title: () => "山竹记账",
            icon: () => <Icon name="nav" onClick={onNavClick} />,
            default: () => <>
              <Center class={s.center}>
                <Icon name="pig" class={s.pig} />
              </Center>
              <div class={s.button_wrapper}>
                <RouterLink to="/items/create"><Button class={s.button}>开始记账</Button></RouterLink>
              </div>
              <div class={s.float_button_wrapper}>
                <RouterLink to="/items/create"><FloatButton iconName="plus" /></RouterLink>
              </div>
              {overlayVisibleRef.value && <Overlay onClose={onMaskClick} />}
            </>
          }}
        </MainLayout>

      </div>
    );
  },
});
