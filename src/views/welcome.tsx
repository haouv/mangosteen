import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import MangoLogo from "../assets/icons/mangosteen.svg";
import s from "./welcome.module.scss";

export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => <div class={s.wrapper}>
      <header>
        <img src={MangoLogo} alt="" />
        <h1>山竹记账</h1>
      </header>
      <main class={s.main}>
        <RouterView />
      </main>
    </div>
  }
});
