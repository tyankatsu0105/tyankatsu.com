module.exports = {
  root: true,
  extends: ["plugin:vue/recommended", "plugin:gridsome/recommended"],
  plugins: ["gridsome"],
  rules: {
    "gridsome/use-env-prefix": 0,
    // Web Componentsと差別化を図るため
    "vue/component-name-in-template-casing": "error",
    "vue/html-closing-bracket-newline": "error",
    "vue/html-closing-bracket-spacing": "error",
    "vue/html-indent": ["error", "tab"],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          normal: "never",
        },
      },
    ],
    "vue/no-multi-spaces": "error",
    "vue/no-confusing-v-for-v-if": "error",
    "vue/attributes-order": "error",
    "vue/order-in-components": "error",
    "vue/max-attributes-per-line": [
      2,
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
  },
};
