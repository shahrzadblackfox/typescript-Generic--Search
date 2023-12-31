export default function genericSearch<T>(
  obejct: T,
  properties: Array<keyof T>,
  query: string,
  shouldBeCaseSensitive: boolean
): boolean {
  if (query === " ") {
    return true;
  }
  return properties.some((property) => {
    const value = obejct[property];
    if (typeof value === "string" || typeof value === "number") {
      if (shouldBeCaseSensitive) {
        return value.toString().includes(query);
      } else {
        return value
          .toString()
          .toLocaleLowerCase()
          .includes(query.toLowerCase());
      }
    }

    return false;
  });
}
