import { RouterLink } from 'vue-router';
import s from './welcome.module.scss';

export const SecondActions = () => {
  return (
    <div class={s.actions}>
      <RouterLink to="/welcome/3" class={s.fake}>
        占用
      </RouterLink>
      <RouterLink to="/welcome/3">下一页</RouterLink>
      <RouterLink to="/start">跳过</RouterLink>
    </div>
  );
}

SecondActions.displayName = 'SecondActions';