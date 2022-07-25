import { defineComponent, ref } from "vue";
import { MainLayout } from "../../layouts/main-layout";
import { Icon } from "../../shared/icon";
import { Tabs, Tab } from "../../shared/tabs";
import s from './item-create.module.scss';

export const ItemCreate = defineComponent({
  setup: (props, context) => {
    const selectTab = ref<string>("支出");
    const onSelectedTab = (tabName: string) => {
      console.log(tabName);
      selectTab.value = tabName;
    }
    return () => (<div class={s.item_create}>
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <Icon name="back" />,
          default: () => <Tabs selected={selectTab.value} onUpdateSelected={onSelectedTab}>
            <Tab name="支出"></Tab>
            <Tab name="收入"></Tab>
          </Tabs>
        }}
      </MainLayout>
    </div>)
  }
})