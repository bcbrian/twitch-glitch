export function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function replaceAll(str, oldStr, newStr) {
  try {
    return str.replaceAll(oldStr, newStr);
  } catch (error) {
    const regex = new RegExp(oldStr, "g");
    return str.replace(regex, newStr);
  }
}
