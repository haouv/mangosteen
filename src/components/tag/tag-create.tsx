import { defineComponent } from "vue";
import { MainLayout } from "../../layouts/main-layout";
import { Button } from "../../shared/button";
import { EmojiSelect } from "../../shared/emoji-select";
import { Icon } from "../../shared/icon";
import s from './tag-create.module.scss';

export const TagCreate = defineComponent({
  setup: () => {
    const onFormSubmit = (e: Event) => {
      e.preventDefault();
    }
    return () => (
      <MainLayout>
        {{
          title: () => "新建标签",
          icon: () => <Icon name="back" onClick={() => { }} />,
          default: () => (
            <form onSubmit={onFormSubmit} class={s.form}>
              <div class={s.formRow}>
                <label class={s.form_label}>
                  <span class={s.form_item_name}>标签名</span>
                  <div class={s.form_item_value}>
                    <input type="text" name="name" class={[s.form_item, s.input, s.error]} />
                  </div>
                </label>
                <div class={s.form_item_error_hint}>
                  <span>标签名太长</span>
                </div>
              </div>
              <div class={s.formRow}>
                <label class={s.formLabel}>
                  <span class={s.form_item_name}>符号</span>
                  <div class={s.form_item_value}>
                    <EmojiSelect></EmojiSelect>
                  </div>
                </label>
                <div class={s.form_item_error_hint}>
                  <span>必填</span>
                </div>
              </div>
              <p class={s.tips}>记账时长按标签，即可进行编辑</p>
              <div class={s.formRow}>
                <div class={s.form_item_value}>
                  <Button type="submit">确定</Button>
                </div>
              </div>
            </form>
          )
        }}
      </MainLayout>
    )
  }
})