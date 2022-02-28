import { Alert } from "@cmsgov/ds-medicare-gov";
import React, { ReactElement } from "react";
import App from "../App";
import { Layout } from "../layout";

const Route: React.FC<{
  path: string;
  title?: string;
  children: ReactElement<any, any>;
}> = ({ path, children, title = "Test page" }) => (
  <Layout>
    {window.location.pathname === path ? (
      <>
        {" "}
        <h1>{title}</h1>
        <div>{children}</div>
      </>
    ) : (
      <Alert>There's nothing here</Alert>
    )}
  </Layout>
);

export default Route;
