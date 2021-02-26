module.exports = {
  root: true,
  extends: [
    "plugin:vue/recommended",
    "plugin:gridsome/recommended",
    "prettier",
  ],
  plugins: ["gridsome"],
  rules: {
    "gridsome/use-env-prefix": 0,
    // Web Componentsと差別化を図るため
    "vue/component-name-in-template-casing": "error",
  },
};
