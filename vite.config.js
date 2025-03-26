import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true }),
  ],
  build: {
    lib: {
      // Especifica el punto de entrada de tu librería (archivo que exporta los componentes)
      entry: resolve(__dirname, "src/index.ts"),
      name: "jvargas ui library example", // Nombre global de tu librería (si se usa en navegador)
      fileName: (format) => `semantic-release-example.${format}.js`, // Nombre del archivo de salida
    },
    rollupOptions: {
      // Externaliza dependencias que no deben incluirse en el bundle (ej: React)
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});