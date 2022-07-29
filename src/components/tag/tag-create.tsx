import { defineComponent } from "vue";
import { MainLayout } from "../../layouts/main-layout";
import { Button } from "../../shared/button";
import { EmojiSelect } from "../../shared/emoji-select";
import { Icon } from "../../shared/icon";
import s from './tag-create.module.scss';
import { TagForm } from "./tag-form";

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
            
            <TagForm />
          )
        }}
      </MainLayout>
    )
  }
})