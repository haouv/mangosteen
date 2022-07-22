import { defineComponent } from "vue";
import s from './float-button.module.scss';

interface Props {
  onClick: (e: MouseEvent) => void
}

export const FloatButton = defineComponent<Props>({
  setup: (props, context) => {
    return () => (
      <button class={s.floatButton}>
        {context.slots.default?.()}
      </button>
    );
  }
})