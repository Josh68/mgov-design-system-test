import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const defaultConf = {
    plugins: [react()],
  };
  if (command === "serve") {
    return { ...defaultConf, server: { port: 3002 }, define: { global: {} } };
  } else {
    return { ...defaultConf, base: "/mgov-design-system-test/" };
  }
});
