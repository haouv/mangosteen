import { defineComponent } from "vue";
import s from './welcome.module.scss';
import { RouterLink } from "vue-router";
import cloud from "../../assets/icons/cloud.svg";

export const Forth = ({
  setup() {
    return () => (
      <div class={s.card}>
        <img src={cloud} alt="" />
        <h2>云备份<br/>再也不怕数据丢失</h2>
      </div>
    );
  }
})
