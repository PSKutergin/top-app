import React from "react";
import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="done">
        Button
      </Button>
    </>
  );
}
