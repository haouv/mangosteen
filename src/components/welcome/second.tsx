import s from "./welcome.module.scss";

export const Second = {
  setup() {
    return () => (
      <div class={s.card}>
        <svg>
          <use xlinkHref="#clock" />
        </svg>
        <h2>
          每日提醒
          <br />
          不会遗漏每一笔账单
        </h2>
      </div>
    );
  },
};
