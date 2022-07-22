import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
// import pig from "../../assets/icons/pig.svg";
import s from "./welcome.module.scss";

export const First = defineComponent({
  setup() {
    return () => (
      <div class={s.card}>
        {/* <img src={pig} alt="" /> */}
        <svg>
          <use xlinkHref="#pig" />
        </svg>
        <h2>
          会挣钱
          <br />
          还要省钱
        </h2>
      </div>
    );
  },
});
