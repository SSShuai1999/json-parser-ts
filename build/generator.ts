module.exports = {
  // 生成 script 标签
  gScript(config) {
    return config.scriptMap
      .map((url) => `<script src="${url}"></script>`)
      .toString()
      .replace(/,/g, "\n  ");
  },
};
