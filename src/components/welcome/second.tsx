import { defineComponent } from "vue";
import s from './welcome.module.scss';
import { RouterLink } from "vue-router";
import clock from "../../assets/icons/clock.svg";

export const Second = ({
  setup() {
    return () => (
      <div class={s.card}>
        <img src={clock} alt="" />
        <h2>每日提醒<br/>不会遗漏每一笔账单</h2>
      </div>
    );
  }
})
