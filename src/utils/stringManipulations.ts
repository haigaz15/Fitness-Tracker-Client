const toKebabCase = (text: string): string => {
  return text.toLowerCase().replace(" ", "-");
};

export { toKebabCase };
