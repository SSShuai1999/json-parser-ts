var { gScript, gLoading } = require("./generator.ts");

module.exports = (config) => `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${config.title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  ${gScript(config)}

</head>
<body>
</body>
</html>`;
