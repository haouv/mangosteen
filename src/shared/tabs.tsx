import { defineComponent, PropType } from "vue";
import s from './tabs.module.scss';

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String as PropType<string>,
      required: false,
    },
    onUpdateSelected: {
      type: Function as PropType<(selected: string) => void>,
      required: false,
    }
  },
  setup: (props, context) => {
    const tabs = context.slots.default?.();
    if (!tabs) return () => null;
    console.log(tabs, props.selected);
    return () => <div class={s.tabs}>
      <ol class={s.tabs_nav}>
        {tabs.map(item =>
          <li class={item.props?.name == props.selected ? s.selected : ""}
            onClick={() => props.onUpdateSelected?.(item.props?.name)}>
            {item.props?.name}
          </li>)}
      </ol>
      <div>
        {tabs.find(tab => tab.props?.name === props.selected)}
      </div>
    </div>
  }
})

export const Tab = defineComponent({
  props: {
    name: {
      type: String as PropType<string>
    }
  },
  setup: (props, context) => {
    return () => (
      <div>{context.slots.default?.()}</div>
    )
  }
})