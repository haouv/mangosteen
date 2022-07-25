import { defineComponent, PropType } from "vue";
import s from './icon.module.scss';

export type IconName = 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig' | 'plus' | 'nav' | 'chart2' | 'export' | 'export' | 'notify' | 'catalog';

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      require: true
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon} onClick={props.onClick}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    );
  }
});