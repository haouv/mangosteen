import { defineComponent } from "vue";
import { MainLayout } from "../../layouts/main-layout";
import { Button } from "../../shared/button";
import { EmojiSelect } from "../../shared/emoji-select";
import { Icon } from "../../shared/icon";
import s from './tag-create.module.scss';
import { TagForm } from "./tag-form";

export const TagEdit = defineComponent({
  setup: () => {
    const onFormSubmit = (e: Event) => {
      e.preventDefault();
    }
    return () => (
      <MainLayout>
        {{
          title: () => "编辑标签",
          icon: () => <Icon name="back" onClick={() => { }} />,
          default: () => <>
            <TagForm />
            <div class={s.actions}>
              <Button class={s.remove_tags} level="danger">删除标签</Button>
              <Button class={s.remove_tags_and_items} level="danger">删除标签和记账</Button>
            </div>
            </>
        }}
      </MainLayout>
    )
  }
})