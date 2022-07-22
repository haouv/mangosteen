import { defineComponent } from "vue";
import s from './float-button.module.scss';

export const FloatButton = defineComponent({
  setup: (props, context) => {
    return () => (
      <button class={s.floatButton}>
        <i class="fas fa-plus"></i>
      </button>
    );
  }
})