import { defineComponent, PropType } from "vue";
import s from "./button.module.scss";

interface Props {
  onClick?: (e: MouseEvent) => void;
}

export const Button = defineComponent({
  props: {
    type: {
      type: String as PropType<'submit' | 'normal'>
    }
  },
  setup: (props, context) => {
    return () => (
      <button class={s.button}>
        {context.slots.default?.()}
      </button>
    )
  }
})
