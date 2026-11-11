import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import createSvgSpritemapPlugin from '@spiriit/vite-plugin-svg-spritemap';
import handlebars from '@cpulvermacher/vite-plugin-handlebars';

// Для транспиляции CSS под старые браузеры
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export default defineConfig({
  base: "/vite/",
  plugins: [
    ViteImageOptimizer({
      png: { quality: 75 },
      svg: {
        plugins: [
          {
            name: 'preset-default',
            params: { overrides: { removeEmptyAttrs: false } },
          },
        ],
      },
    }),
    // ✅ Собираем спрайт ТОЛЬКО из папки svg (чтобы логотип академии не попал в спрайт)
    createSvgSpritemapPlugin('src/assets/svg/**/*.svg'), 
    handlebars({
      partialDirectory: `${import.meta.dirname}/src/partials`,
    }),
  ],
  // ✅ Настройки CSS вынесены на верхний уровень
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist()),
    },
  },
  build: {
    sourcemap: true,
    minify: 'oxc',
    cssMinify: 'lightningcss',
    rolldownOptions: {
      input: {
        index: `${import.meta.dirname}/index.html`,
        about: `${import.meta.dirname}/src/pages/about/index.html`,
        catalog: `${import.meta.dirname}/src/pages/catalog/index.html`,
      },
    },
  },
});