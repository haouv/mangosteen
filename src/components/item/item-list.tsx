import { Overlay } from "vant";
import { defineComponent, PropType, reactive, ref } from "vue";
import { MainLayout } from "../../layouts/main-layout";
import { Form, FormItem } from "../../shared/form";
import { Icon } from "../../shared/icon";
import { OverlayIcon } from "../../shared/overlay";
import { Tab, Tabs } from "../../shared/tabs";
import { Time } from "../../shared/time";
import s from "./item-list.module.scss";
import { ItemSummary } from "./item-summary";

export const ItemList = defineComponent({
  setup: () => {
    const selectTab = ref<string>("本月");
    const refOverlayVisible = ref<boolean>(false);
    const time = new Time();
    const customTime = reactive({
      start: new Time().format(),
      end: new Time().format(),
    });
    const timeList = [
      { start: time.firstDayOfMonth(), end: time.lastDayOfMonth() },
      {
        start: time.add(-1, "month").firstDayOfMonth(),
        end: time.add(-1, "month").lastDayOfMonth(),
      },
      { start: time.firstDayOfYear(), end: time.lastDayOfYear() },
    ];

    const onSubmitCustomTime = (e: Event) => {};
    return () => (
      <MainLayout>
        {{
          title: () => "山竹记账",
          icon: () => <OverlayIcon />,
          default: () => (
            <>
              <Tabs
                class={s.items}
                classPrefix={"custom_items"}
                v-model:selected={selectTab.value}
                onUpdate:selected={(item) => {
                  if (item === "自定义时间") {
                    refOverlayVisible.value = true;
                  }
                }}
              >
                <Tab name="本月" class={s.tab}>
                  <ItemSummary
                    startDate={timeList[0].start.format()}
                    endDate={timeList[0].start.format()}
                  ></ItemSummary>
                </Tab>
                <Tab name="上月" class={s.tab}>
                  <ItemSummary
                    startDate={timeList[1].start.format()}
                    endDate={timeList[1].start.format()}
                  ></ItemSummary>
                </Tab>
                <Tab name="今年" class={s.tab}>
                  <ItemSummary
                    startDate={timeList[1].start.format()}
                    endDate={timeList[2].start.format()}
                  ></ItemSummary>
                </Tab>
                <Tab name="自定义时间" class={s.tab}>
                  <ItemSummary
                    startDate={customTime.start}
                    endDate={customTime.end}
                  ></ItemSummary>
                </Tab>
              </Tabs>
              <Overlay show={refOverlayVisible.value} class={s.overlay}>
                <div class={s.overlay_inner}>
                  <header>请选择时间</header>
                  <main>
                    <Form onSubmit={onSubmitCustomTime}>
                      <FormItem
                        label="开始时间"
                        type="date"
                        v-model={customTime.start}
                      ></FormItem>
                      <FormItem
                        label="结束时间"
                        type="date"
                        v-model={customTime.end}
                      ></FormItem>

                      <FormItem>
                        <div class={s.actions}>
                          <button
                            type="button"
                            onClick={() => (refOverlayVisible.value = false)}
                          >
                            取消
                          </button>
                          <button type="submit">确认</button>
                        </div>
                      </FormItem>
                    </Form>
                  </main>
                </div>
              </Overlay>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
