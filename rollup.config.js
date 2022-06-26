module.exports = [
  {
    input: "colmjude_frontend/src/javascripts/colmjude-frontend.js",
    output: {
      file: "package/colmjude-frontend/javascripts/colmjude-frontend.js",
      format: 'umd',
      name: "CJFrontend"
    },
    context: "window",
  },
];
