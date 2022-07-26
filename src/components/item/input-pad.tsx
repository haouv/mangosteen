import { defineComponent, ref } from "vue";
import { Icon } from "../../shared/icon";
import { Popup, DatetimePicker } from 'vant';
import { time } from "../../shared/time";
import s from "./input-pad.module.scss";
import 'vant/es/datetime-picker/style';
import 'vant/es/popover/style';

export const InputPad = defineComponent({

  setup: (props, context) => {
    const now = new Date();
    const refAmount = ref<string>("");
    const refDatePickerVisible = ref<boolean>(false);
    const refDate = ref<Date>(now);
    const showDatePicker = () => {
      refDatePickerVisible.value = !refDatePickerVisible.value
    }
    const appendText = (n: string | number) => { 
      if (refAmount.value == '0') {
        refAmount.value = String(n);
        return;
      }
      const pattern = /^([1-9]\d{0,9}|0)(\.\d{1,2})?$/;
      const pattern2 = /^([1-9]\d{0,9}|0)(\.)?$/;
      const amount = refAmount.value + n; 
      console.log(refAmount.value, n, amount);
      if (pattern.test(amount) || pattern2.test(amount)) {
        refAmount.value = amount;
      }
    }
    const onDatetimeConfirm = (value: Date) => {
      refDate.value = value
      refDatePickerVisible.value = false;
    }

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
          <span>
            <span onClick={showDatePicker}>{time(refDate.value).format()}</span>
            <Popup v-model:show={refDatePickerVisible.value} position='bottom' >
              <DatetimePicker v-model={refDate.value} type="date" title="选择年月日"
                onConfirm={onDatetimeConfirm} 
                onCancel={() => { refDatePickerVisible.value = false }} />
            </Popup>
          </span>
        </span>
        <span class={s.amount}>{refAmount.value}</span>
      </div>
      <div class={s.buttons}>
        {buttons.map(button => <button onClick={button.onClick}><div>{button.text}</div></button>)}
      </div>
    </>
  }
})