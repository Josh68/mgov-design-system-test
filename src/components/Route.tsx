import React, { ReactElement } from "react";
import App from "../App";
import { Layout } from "../layout";

const Route: React.FC<{
  path: string;
  children: ReactElement<any, any>;
}> = ({ path, children }) => {
  const isRoot = window.location.pathname === "/";
  return window.location.pathname === path ? (
    isRoot ? (
      children
    ) : (
      <Layout>{children}</Layout>
    )
  ) : null;
};

export default Route;
