import { defineComponent, PropType } from "vue";
import s from './icon.module.scss';

export type IconName = 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig' | 'plus' | 'nav' ;

export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<IconName>,
      require: true
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    );
  }
});