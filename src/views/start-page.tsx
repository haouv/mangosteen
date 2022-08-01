import { defineComponent, ref } from "vue";
import { RouterLink } from "vue-router";
import { MainLayout } from "../layouts/main-layout";
import { Button } from "../shared/button";
import { Center } from "../shared/center";
import { FloatButton } from "../shared/float-button";
import { Icon } from "../shared/icon";
import { NavBar } from "../shared/navbar";
import { Overlay, OverlayIcon } from "../shared/overlay";
import s from "./start-page.module.scss";

export const StartPage = defineComponent({
  setup: () => {
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              <Center class={s.center}>
                <Icon name="pig" class={s.pig} />
              </Center>
              <div class={s.button_wrapper}>
                <RouterLink to="/items/create">
                  <Button class={s.button}>开始记账</Button>
                </RouterLink>
              </div>
              <div class={s.float_button_wrapper}>
                <RouterLink to="/items/create">
                  <FloatButton iconName="plus" />
                </RouterLink>
              </div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
