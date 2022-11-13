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
  rules: [
    [/^f-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
    [/^anim-delay-(\d+)$/, ([, d]) => ({ 'animation-delay': `${d}s` })],
  ],
  shortcuts: [
    ['container-fluid', 'max-w-[100%'],
    ['row', 'flex flex-wrap'],
    ['col-auto', 'flex-[0_0_auto] w-auto'],
    ['col-1', 'flex-[0_0_auto] w-[8.3333333333%]'],
    ['col-2', 'flex-[0_0_auto] w-[16.6666666667%]'],
    ['col-3', 'flex-[0_0_auto] w-[25%]'],
    ['col-4', 'flex-[0_0_auto] w-[33.3333333333%]'],
    ['col-5', 'flex-[0_0_auto] w-[41.6666666667%]'],
    ['col-6', 'flex-[0_0_auto] w-[50%]'],
    ['col-7', 'flex-[0_0_auto] w-[58.3333333333%]'],
    ['col-8', 'flex-[0_0_auto] w-[66.6666666667%]'],
    ['col-9', 'flex-[0_0_auto] w-[75%]'],
    ['col-10', 'flex-[0_0_auto] w-[83.3333333333%]'],
    ['col-11', 'flex-[0_0_auto] w-[91.6666666667%]'],
    ['col-12', 'flex-[0_0_auto] w-[100%]'],
    ['w-50', 'w-[50%]'],
    ['shadow-left', 'shadow-[0 0 0 1px #e0e0e0, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%)]'],
    ['shadow', 'shadow-[15px_0_30px_0_rgba(0,0,0,0,5)]'],
    ['form-group-merge', 'rounded-lg overflow-hidden border-width-[1px] border-gray-200 shadow-md rounded-lg overflow-hidden border-width-[1px] border-gray-200 shadow-md'],
    ['btn-primary', 'bg-black rounded-[6px] text-white h-[44px] w-full flex justify-center items-center font-[18px] font-bold'],
    ['filter-bw', 'filter-[grayscale(1)_saturate(0)_contrast(1)]'],
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
      dark: '#1e232b',
      darksecondary: '#18181b',
      dimgrey: '#292e36',
      black: '#303030',
      lightgray: '#f0f0f0',
      gray: '#767676',
      gray2: '#5e5e5e',
      red: '#dc2727',
    },
    container: {
      center: true,
    },
    breakpoints: {
      'xs': '1px',
      'sm': '320px',
      'md': '768px',
      'lg': '996px',
      'xl': '1440px',
      '2xl': '1536px',
    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
