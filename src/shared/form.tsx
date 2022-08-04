import { DatetimePicker, Popup } from "vant";
import { defineComponent, PropType, computed, ref } from "vue";
import { Button } from "./button";
import { EmojiSelect } from "./emoji-select";
import s from "./form.module.scss";
import { Time } from "./time";

export const Form = defineComponent({
  props: {
    onSubmit: {
      type: Function as PropType<(e: Event) => void>,
    },
  },
  setup: (props, context) => {
    return () => (
      <form class={s.form} onSubmit={props.onSubmit}>
        {context.slots.default?.()}
      </form>
    );
  },
});

export const FormItem = defineComponent({
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [String, Number],
    },
    type: {
      type: String as PropType<
        "text" | "emojiSelect" | "date" | "validationCode"
      >,
    },
    error: {
      type: String,
    },
    placeholder: String,
    onClick: {
      type: Function as PropType<() => void>,
    },
    countFrom: {
      type: Number,
      default: 60
    }
  },
  setup: (props, context) => {
    const refDateVisible = ref(false);

    const timerCounts = ref<number>(props.countFrom);
    const timer = ref<number>();
    const isCount = computed(() => !!timer.value);
    const startCount = () => {
      timer.value = setInterval(() => {
        if (timerCounts.value > 1) {
          timerCounts.value -= 1;
        } else {
          clearInterval(timer.value);
          timer.value = undefined;
          timerCounts.value = props.countFrom;
        }
      }, 1000);
    };
    const onValidationCodeClick = () => {
      props.onClick?.();
    };
    context.expose({ startCount });

    const content = computed(() => {
      switch (props.type) {
        case "text":
          return (
            <input
              value={props.modelValue}
              onInput={(e: any) =>
                context.emit("update:modelValue", e.target.value)
              }
              class={[s.formItem, s.input]}
            />
          );
        case "emojiSelect":
          return (
            <EmojiSelect
              modelValue={props.modelValue?.toString()}
              onUpdateModelValue={(value) =>
                context.emit("update:modelValue", value)
              }
              class={[s.formItem, s.emojiList, s.error]}
            />
          );
        case "validationCode":
          return (
            <>
              <input
                class={[s.formItem, s.input, s.validationCodeInput]}
                placeholder={props.placeholder}
              />
              <Button 
                disabled={isCount.value}
                onClick={onValidationCodeClick}
                class={[s.formItem, s.button, s.validationCodeButton]}
              >
                {isCount.value
                  ? timerCounts.value + "秒后重新发送"
                  : "发送验证码"}
              </Button>
            </>
          );
        case "date":
          return (
            <>
              <input
                readonly={true}
                value={props.modelValue}
                onClick={() => {
                  refDateVisible.value = true;
                }}
                class={[s.formItem, s.input]}
              />
              <Popup position="bottom" v-model:show={refDateVisible.value}>
                <DatetimePicker
                  value={props.modelValue}
                  type="date"
                  title="选择年月日"
                  onConfirm={(date: Date) => {
                    context.emit("update:modelValue", new Time(date).format());
                    refDateVisible.value = false;
                  }}
                  onCancel={() => (refDateVisible.value = false)}
                />
              </Popup>
            </>
          );
        case undefined:
          return context.slots.default?.();
      }
    });
    return () => (
      <div class={s.formRow}>
        <label class={s.formLabel}>
          {props.label && <span class={s.formItem_name}>{props.label}</span>}
          <div class={s.formItem_value}>{content.value}</div>
          <div class={s.formItem_errorHint}>
            {props.error ? <span>{props.error}</span> : <span>　</span>}
          </div>
        </label>
      </div>
    );
  },
});
