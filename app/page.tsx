import React from "react";
import { Htag, Button, P } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Hello</Htag>
      <Button appearance="primary" arrow="right">
        Button
      </Button>
      <Button appearance="ghost" arrow="down">
        Button
      </Button>
      <P size="l">Big</P>
      <P>Medium</P>
      <P size="s">Small</P>
    </>
  );
}
