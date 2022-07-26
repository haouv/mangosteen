import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layouts/main-layout";
import { Icon } from "../../shared/icon";
import { Tabs, Tab } from "../../shared/tabs";
import { InputPad } from "./input-pad";
import s from './item-create.module.scss';

export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const selectTab = ref<string>("支出");
    const onSelectedTab = (tabName: string) => {
      selectTab.value = tabName;
    }
    return () => (<div class={s.item_create}>
      <MainLayout>
        {{
          title: () => "记一笔",
          icon: () => <Icon name="back" />,
          default: () => <>
            <Tabs selected={selectTab.value} onUpdateSelected={onSelectedTab}>
              <Tab name="支出">支出内容</Tab>
              <Tab name="收入">收入内容</Tab>
            </Tabs>
            <div class={s.input_pad_wrapper}>
              <InputPad />
            </div>
          </>
        }}
      </MainLayout>
    </div>)
  }
})