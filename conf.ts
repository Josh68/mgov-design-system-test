import * as packageConf from "./package.json";

export const conf = {
  base: process.env.NODE_ENV === "production" ? `/${packageConf.name}/` : "/",
};
