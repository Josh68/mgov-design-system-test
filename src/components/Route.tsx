import { Alert } from "@cmsgov/ds-medicare-gov";
import React, { ReactElement } from "react";
import { Layout } from "../layout";
import { conf } from "../../conf";

const pathName = window.location.pathname.replace(conf.base, "/");

const Route: React.FC<{
  path: string;
  title?: string;
  children: ReactElement<any, any>;
}> = ({ path, children, title = "Test page" }) => (
  <Layout>
    {pathName === path ? (
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
