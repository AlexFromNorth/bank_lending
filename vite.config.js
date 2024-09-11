import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    imagemin({
      gifsicle: { optimizationLevel: 3 }, // Настройки для GIF
      optipng: { optimizationLevel: 5 }, // Настройки для PNG
      mozjpeg: { quality: 50 }, // Попробуйте изменить качество
      pngquant: { quality: [0.6, 0.8], speed: 4 }, // Настройки для PNG
      svgo: { plugins: [{ removeViewBox: false }] }, // Настройки для SVG
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        assetFileNames: ({ name }) => {
          if (name && /\.(png|jpe?g|gif|svg)$/i.test(name)) {
            return 'assets/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
      },
    },
  },
});
