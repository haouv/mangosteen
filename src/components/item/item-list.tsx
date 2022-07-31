import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/main-layout";
import { Icon } from "../../shared/icon";
import { Tab, Tabs } from "../../shared/tabs";
import s from "./item-list.module.scss";

export const ItemList = defineComponent({
  setup: () => {
    const selectTabRef = ref(0);
    const selectTab = ref<string>("本月");

    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <Icon name="nav" onClick={() => {}}/>,
          default: () => (
            <Tabs class={s.tabs} v-model:selected={selectTab.value}>
              <Tab name="本月" class={s.tab}>list1</Tab>
              <Tab name="上月" class={s.tab}>list2</Tab>
              <Tab name="今年" class={s.tab}>list3</Tab>
              <Tab name="自定义时间" class={s.tab}>list4</Tab>
            </Tabs>
          )
        }}
      </MainLayout>
    )
  }
})