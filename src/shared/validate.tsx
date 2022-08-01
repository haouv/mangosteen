const rules = [
  { key: "name", type: "required", message: "必填" },
  { key: "name", type: "pattern", regex: ``, message: "必填" },
  { key: "tag", type: "required", message: "标签名必填" },
]

const errors = {
  name: ["必填", "邮件格式错误"],
  tag: ["必填"]
}

interface FData {
  [k: string]: string | number | undefined | null | FData;
}

type Rule<T> = {
  key: keyof T,
  message: string,
} & (
    { type: "required" } | { type: "pattern", regex: RegExp }
  )

type Rules<T> = Rule<T>[];

export const validate = <T extends FData>(fdata: T, rules: Rules<T>) => {
  type Errors = { [k in keyof T]?: string[] }
  const errors: Errors = {};

  rules.map((rule: Rule<T>) => {
    const value = fdata[rule.key];
    const { message, key, type } = rule;
    switch (type) {
      case "required":
        if (!value) {
          errors[key] = errors[key] ?? [];
          errors[key]?.push(message);
        }
        break;
      case "pattern":
        if (value && !rule.regex.test(value.toString())) {
          errors[key] = errors[key] ?? [];
          errors[key]?.push(message);
        }
        break;
    }
  })
  return errors;
}

export type { FData, Rule, Rules }