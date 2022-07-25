import { defineComponent, PropType } from "vue";
import { Icon } from "./icon";
import { RouterLink } from 'vue-router';
import s from "./overlay.module.scss";

export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<(e: MouseEvent) => void>,
    },
  },
  setup: (props, context) => {
    const onClose = () => {
      console.log("onClose");
      props.onClose?.();
    };
    return () => (
      <>
        <div class={s.mask} onClick={onClose}></div>
        <div class={s.overlay}>
          <section class={s.currentUser}>
            <h2>Wuhao</h2>
            <p>点击这里注销</p>
          </section>
          <nav>
            <ul class={s.action_list}>
              <li>
                <RouterLink to="statistics" class={s.action}>
                  <Icon name="chart2" class={s.icon} />
                  <span>统计图表</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="statistics" class={s.action}>
                  <Icon name="export" class={s.icon} />
                  <span>导出数据</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="statistics" class={s.action}>
                  <Icon name="catalog" class={s.icon} />
                  <span>自定义分类</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="statistics" class={s.action}>
                  <Icon name="notify" class={s.icon} />
                  <span>记账提醒</span>
                </RouterLink>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  },
});
