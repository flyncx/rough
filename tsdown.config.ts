import { defineConfig } from 'tsdown'

export default defineConfig({
  publint: true,
  attw: {
    profile: "esm-only"
  },
  exports: true,
  entry: {
    index: "./src/rough.ts"
  },
  format: {
    esm: {
      target: ["es2025"]
    }
  },
  plugins: [],
})