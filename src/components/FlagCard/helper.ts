export const capitalsToString = (capitals: string[]) => {
  return capitals.length <= 1
    ? (capitals[0] ?? "")
    : `${capitals.slice(0, -1).join(", ")} and ${capitals.at(-1)}`;
};
