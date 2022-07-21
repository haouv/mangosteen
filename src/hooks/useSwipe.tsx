import { onMounted, Ref, ref } from "vue";

type Point = {
  x: number;
  y: number;
}

export const useSwipe = (element: Ref<HTMLElement | null>) => {
  let distance, direction, swiping = false;
  let start = ref<Point | null>(null);
  let end = ref<Point | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    swiping = true;
    const touch = e.touches[0];
    end.value = start.value = { x: touch.clientX, y: touch.clientY };
    console.log('onTouchStart', end.value, start.value)
  };
  const onTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    end.value = { x: touch.clientX, y: touch.clientY };
    console.log('onTouchMove', end.value)
  };

  const onTouchEnd = (e: TouchEvent) => {
    swiping = false;
    console.log('onTouchEnd');
  };
  onMounted(() => {
    if (!element.value) return;
    element.value.addEventListener("touchstart", onTouchStart);
    element.value.addEventListener("touchmove", onTouchMove);
    element.value.addEventListener("touchend", onTouchEnd);
  });
  
  return {
    swiping,
    distance,
    direction
  }
};
