import { defineComponent } from "vue";
import s from './welcome.module.scss';
import { RouterLink } from "vue-router";
import chart from "../../assets/icons/chart.svg";

export const Third = ({
  setup() {
    return () => (
        <div class={s.card}>
          <img src={chart} alt="" />
          <h2>数据可视化<br/>收支一目了然</h2>
        </div>
    );
  }
})
