export const flattenObject = (
  obj: any,
  separator = '.',
): Record<string, any> => {
  const result: Record<string, any> = {};

  function recurse(current: Record<string, any>, prop = ''): void {
    for (const key in current) {
      const value = current[key];
      const newKey = prop ? `${prop}${separator}${key}` : key;

      if (
        typeof value === 'object' &&
        !Array.isArray(value) &&
        value !== null
      ) {
        recurse(value, newKey);
      } else {
        result[newKey] = value;
      }
    }
  }

  recurse(obj);

  return result;
};

export const flattenObjects = (data: any[] | undefined, separator = '.') => {
  if (!data) {
    return [];
  }
  return data.map((obj) => flattenObject(obj, separator));
};
