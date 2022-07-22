export const throttle = <T extends (...args: unknown[]) => any>(fn: T, time: number) => {
  let result: ReturnType<T>;
  let timer: number | undefined;
  return (...args: Parameters<T>) => {
    if (timer) {
      return result;
    } else {
      timer = setTimeout(() => {
        timer = undefined;
        clearTimeout(timer);
      }, time)
      result = fn(...args);
    }
  }
}