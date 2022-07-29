import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./item-page.module.scss";

export const ItemPage = defineComponent({
  setup: () => {
    return () => (
      <RouterView></RouterView>
    )
  }
})