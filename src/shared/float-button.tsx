import { defineComponent, PropType } from "vue";
import s from './float-button.module.scss';
import { Icon, IconName } from "./icon";

export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String as PropType<IconName>,
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    }
  },
  setup: (props, context) => {
    return () => (
      <button class={s.floatButton} onClick={props.onClick}>
        <Icon name={props.iconName} class={s.icon}/>
      </button>
    );
  }
})