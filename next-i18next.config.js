// /** @type {import('next-i18next').UserConfig} */
const path = require("path");
module.exports = {
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },
  localePath: path.resolve("./public/locales")
};