import { defineComponent, ref } from "vue";
import { Icon } from "../../shared/icon";
import s from "./input-pad.module.scss";

export const InputPad = defineComponent({
  setup: (props, context) => {
    const refAmount = ref<string>("");
    const appendText = (n: string | number) => { refAmount.value += n; }
    const buttons = [
      { text: '1', onClick: () => { appendText(1) } },
      { text: '2', onClick: () => { appendText(2) } },
      { text: '3', onClick: () => { appendText(3) } },
      { text: '4', onClick: () => { appendText(4) } },
      { text: '5', onClick: () => { appendText(5) } },
      { text: '6', onClick: () => { appendText(6) } },
      { text: '7', onClick: () => { appendText(7) } },
      { text: '8', onClick: () => { appendText(8) } },
      { text: '9', onClick: () => { appendText(9) } },
      { text: '.', onClick: () => { appendText('.') } },
      { text: '0', onClick: () => { appendText(0) } },
      { text: '清空', onClick: () => { refAmount.value = '0' } },
      { text: '提交', onClick: () => { } },
    ]
    return () => <>
      <div class={s.dateAndAmount}>
        <span class={s.date}>
          <Icon name="date" class={s.icon}></Icon>
          <span>2020-01-01</span>
        </span>
        <span class={s.amount}>123456789</span>
      </div>
      <div class={s.buttons}>
        {buttons.map(button => <button onClick={button.onClick}><div>{button.text}</div></button>)}
      </div>
    </>
  }
})