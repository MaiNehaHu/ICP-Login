import React from "react";
import "./App.scss";
import greetImg from "./images/hello.png";

import { createClient } from "@connect2ic/core";
import { defaultProviders } from "@connect2ic/core/providers";
import {
  ConnectButton,
  ConnectDialog,
  Connect2ICProvider,
  useConnect,
} from "@connect2ic/react";

function App() {
  const { isConnected } = useConnect();
  const className = "App";

  return (
    <main className={className}>
      <section className={className + "__icp-login-greet"}>
        <img src={greetImg} alt="Hi" />

        <h1>
          I've learnt how to get you login through ICP (Internet Computer
          Protocol). Wanna Try??
        </h1>
      </section>

      <section className={className + "__connect"}>
        <div className="auth-section">
          <ConnectButton />
        </div>
        <ConnectDialog />

        <h1 className={className + "__connectedStatus"}>
          {isConnected ? "Connected Now" : "Not connected"}
        </h1>
      </section>
    </main>
  );
}

const client = createClient({
  // canisters: {
  //   qoute,
  // },
  providers: defaultProviders,
  // globalProviderConfig: {
  //   /*
  //    * Disables dev mode in production
  //    * Should be enabled when using local canisters
  //    */
  //   dev: import.meta.env.DEV,
  // },
});

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
);
