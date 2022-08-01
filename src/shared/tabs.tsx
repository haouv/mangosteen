import { defineComponent, PropType } from "vue";
import s from './tabs.module.scss';

export const Tabs = defineComponent({
  props: {
    classPrefix: {
      type: String,
      require: false
    },
    selected: {
      type: String as PropType<string>,
      required: false,
    },
    // onUpdateSelected: {
    //   type: Function as PropType<(selected: string) => void>,
    //   required: false,
    // }
  },
  setup: (props, context) => {
    const tabs = context.slots.default?.();
    if (!tabs) return () => null;
    return () => <div class={[s.tabs, props.classPrefix + '_tabs']}>
      <ol class={[s.tabs_nav, props.classPrefix + '_tabs_nav']}>
        {tabs.map(item =>
          <li class={item.props?.name == props.selected ? [s.selected, props.classPrefix + '_selected'] : ""}
            onClick={() => context.emit('update:selected', item.props?.name)}>
            {item.props?.name}
          </li>)}
      </ol>
      <div style={{width: '100%'}}>
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