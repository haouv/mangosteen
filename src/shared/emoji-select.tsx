import { computed, defineComponent, ref } from "vue";
import { emojis } from "./emojis";
import s from "./emoji-select.module.scss";

export const EmojiSelect = defineComponent({
  setup: () => {
    const refSelected = ref(0);
    const table: [string, string[]][] = [
      ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
        'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
        'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
      ]],
      ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
        'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
      ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
        'person-activity', 'person-sport', 'person-resting']],
      ['衣服', ['clothing']],
      ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
        'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
      ['植物', ['plant-flower', 'plant-other']],
      ['自然', ['sky & weather', 'science']],
      ['食物', [
        'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
        'food-marine', 'food-sweet'
      ]],
      ['运动', ['sport', 'game']],
    ]

    const selectedEmojis = computed(() => {
      const selectedEmojiTypes = table[refSelected.value][1];
      return selectedEmojiTypes.map((type: string) => {
        return emojis.find(emoji => emoji[0] === type)?.[1].map(item => <li>{item}</li>)
      });
    })

    const onEmojiTypeClick = (index: number) => {
      refSelected.value = index;
    }

    return () => (
      <div class={s.wrapper}>
        <nav class={s.nav}>
          {table.map((item, index) => (
            <span class={refSelected.value === index ? s.selected: ''} 
                  onClick={() => {onEmojiTypeClick(index)}}>{item[0]}</span>
          ))}
        </nav>
        <ol>
          {selectedEmojis.value}
        </ol>
      </div>
    )
  }
})