import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],
  presets: [
    presetWind(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter',
      },
    }),
  ],
  theme: {
    colors: {
      veryCool: '#0000ff', // class="text-very-cool"
      primary: 'hsla(var(--hue, 217), 78%, 51%)', // class="bg-primary"
    },
    breakpoints: {
      sm: '320px',
      md: '640px',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
