import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const defaultConf = {
    plugins: [react()],
    define: { global: {} },
    base: "/ds-medicare-gov/",
  };
  if (command === "serve") {
    return { ...defaultConf, server: { port: 3002 } };
  } else {
    return defaultConf;
  }
});
