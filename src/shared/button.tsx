import { defineComponent, PropType } from "vue";
import s from "./button.module.scss";

interface Props {
  onClick?: (e: MouseEvent) => void;
}

export const Button = defineComponent({
  props: {
    type: {
      type: String as PropType<"submit" | "reset" | "button">,
      default: "button",
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
    level: {
      type: String as PropType<"important" | "normal" | "danger">,
      default: "important",
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup: (props, context) => {
    return () => (
      <button
        class={[s.button, s[props.level], s[props.disabled ? "disabled" : ""]]}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {context.slots.default?.()}
      </button>
    );
  },
});
