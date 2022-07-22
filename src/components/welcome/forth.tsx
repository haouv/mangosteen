import { defineComponent } from "vue";
import s from './welcome.module.scss';
import { RouterLink } from "vue-router";

export const Forth = ({
  setup() {
    return () => (
      <div class={s.card}>
        <svg>
          <use xlinkHref="#cloud" />
        </svg>
        <h2>云备份<br/>再也不怕数据丢失</h2>
      </div>
    );
  }
})
