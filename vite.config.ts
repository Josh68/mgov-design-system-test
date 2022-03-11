import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const defaultConf = {
    plugins: [react()],
  };
  console.debug(`command: ${command}`);
  if (command === "serve") {
    return {
      ...defaultConf,
      base: "/",
      server: { port: 3002 },
      define: { global: {} },
    };
  } else {
    return { ...defaultConf, base: "/mgov-design-system-test/" };
  }
});
