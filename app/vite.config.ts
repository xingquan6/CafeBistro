import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap's own Sass still uses color functions Dart Sass has
        // deprecated (e.g. green()); quietDeps silences warnings that
        // originate in dependencies without hiding ones from our own scss.
        quietDeps: true,
        // Bootstrap 5.3 hasn't migrated off @import to @use yet, and @import
        // is still the only documented way to override its Sass variables —
        // silence just this deprecation category rather than all of them.
        silenceDeprecations: ['import'],
      },
    },
  },
})
