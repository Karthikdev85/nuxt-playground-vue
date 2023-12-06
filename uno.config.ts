import {defineConfig, presetUno, presetIcons, presetAttributify} from 'unocss'

export default defineConfig({
    shortcuts: {
        'border-base': 'border-gray:40'
    },
    presets: [
        presetUno(),
        presetIcons(),
        presetAttributify()
    ]
})