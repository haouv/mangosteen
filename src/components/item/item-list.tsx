import { defineComponent, PropType, reactive, ref } from "vue";
import { MainLayout } from "../../layouts/main-layout";
import { Icon } from "../../shared/icon";
import { Tab, Tabs } from "../../shared/tabs";
import { Time } from "../../shared/time";
import s from "./item-list.module.scss";
import { ItemSummary } from "./item-summary";

export const ItemList = defineComponent({
  setup: () => {
    const selectTab = ref<string>("本月");
    const time = new Time();
    const customTime = reactive({
      startDate: new Time().format(),
      endDate: new Time().format(),
    })
    const timeList = [
      { start: time.firstDayOfMonth(), end: time.lastDayOfMonth() },
      { start: time.add(-1, "month").firstDayOfMonth(), end: time.add(-1, "month").lastDayOfMonth() },
      { start: time.firstDayOfYear(), end: time.lastDayOfYear() },
    ]
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <Icon name="nav" onClick={() => { }} />,
          default: () => (
            <Tabs class={s.items} classPrefix={'custom_items'}
              v-model:selected={selectTab.value}
              onUpdate:selected={() => {
                console.log('onUpdate:selected');
              }}>
              <Tab name="本月" class={s.tab}>
                <ItemSummary startDate={timeList[0].start.format()}
                  endDate={timeList[0].start.format()}></ItemSummary>
              </Tab>
              <Tab name="上月" class={s.tab}>
                <ItemSummary startDate={timeList[1].start.format()}
                  endDate={timeList[1].start.format()}></ItemSummary>
              </Tab>
              <Tab name="今年" class={s.tab}>
                <ItemSummary startDate={timeList[1].start.format()}
                  endDate={timeList[2].start.format()}></ItemSummary>
              </Tab>
              <Tab name="自定义时间" class={s.tab}>
                <ItemSummary startDate={customTime.startDate}
                  endDate={customTime.endDate}></ItemSummary>
              </Tab>
            </Tabs>
          )
        }}
      </MainLayout>
    )
  }
})