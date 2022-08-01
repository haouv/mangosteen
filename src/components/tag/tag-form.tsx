import { defineComponent, reactive } from "vue";
import { Button } from "../../shared/button";
import { Form, FormItem } from "../../shared/form";
import { Rules, validate } from "../../shared/validate";
import s from "./tag-create.module.scss";

export const TagForm = defineComponent({
  setup: () => {
    const formData = reactive({
      name: "",
      sign: "",
    });
    const errors = reactive<{ [k: string]: string[] }>({});
    const rules: Rules<typeof formData> = [
      { key: "name", type: "required", message: "必填" },
      {
        key: "name",
        type: "pattern",
        regex: /^.{1,4}$/,
        message: "只能填 1 到 4 个字符",
      },
      { key: "sign", type: "required", message: "必填" },
    ];
    const onFormSubmit = (e: Event) => {
      e.preventDefault();
      Object.assign(errors, { name: undefined, sign: undefined });
      Object.assign(errors, validate(formData, rules));
      console.log(errors.value);
    };

    return () => (
      <Form onSubmit={onFormSubmit}>
        <FormItem
          label="标签名"
          type="text"
          error={errors["name"]?.join(",")}
          v-model={formData.name}
        ></FormItem>
        <FormItem
          label="符号"
          type="emojiSelect"
          error={errors["sign"]?.join(",")}
          v-model={formData.sign}
        ></FormItem>
        <FormItem>
          <p class={s.tips}>记账时长按标签，即可进行编辑</p>
        </FormItem>
        <FormItem>
          <Button class={s.button}>确定</Button>
        </FormItem>
      </Form>
    );
  },
});
