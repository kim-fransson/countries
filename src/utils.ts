type CSSVariableMap = Record<`--${string}`, string | number>;

export function setCSSVariables(
  variables: CSSVariableMap,
  target: HTMLElement = document.documentElement,
): void {
  for (const [key, value] of Object.entries(variables)) {
    target.style.setProperty(key, String(value));
  }
}
