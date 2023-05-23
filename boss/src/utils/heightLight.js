// 定义关键字高亮的函数
export const heightLight = (str, key) => {
  const reg = new RegExp(key, "ig");
  return str.replace(reg, (val) => {
    return `<span style='color: #00bbc1'>${val}</span>`;
  });
};
