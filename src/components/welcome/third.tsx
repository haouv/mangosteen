import { defineComponent } from "vue";
import s from "./welcome.module.scss";
import { RouterLink } from "vue-router";

export const Third = {
  setup() {
    return () => (
      <div class={s.card}>
        <svg>
          <use xlinkHref="#chart" />
        </svg>
        <h2>
          数据可视化
          <br />
          收支一目了然
        </h2>
      </div>
    );
  },
};
