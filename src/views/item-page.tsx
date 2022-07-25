import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./item-page.module.scss";

export const ItemPage = defineComponent({
  setup: () => {
    return () => (
      <div class={s.item_page}>
        <RouterView></RouterView>
      </div>
    )
  }
})