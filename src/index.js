import React from "react";
import ReactDOM from "react-dom";
import Framework7 from "framework7/framework7.esm.bundle";
import Framework7React from "framework7-react";
import App from "./Components/App";
import Client from "./Apollo/Client";
import { ApolloProvider } from "@apollo/react-hooks";

Framework7.use(Framework7React);

ReactDOM.render(
  <ApolloProvider client={Client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
