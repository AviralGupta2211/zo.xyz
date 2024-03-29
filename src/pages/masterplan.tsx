import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Conclusion,
  Details,
  EarnCards,
  Introduction,
  JoinDiscord,
  ZoApp,
} from "../components/page-sections/masterplan";
import Roadmap from "../components/page-sections/masterplan/Roadmap";

const MasterplanPage: NextPage = () => {
  return (
    <section className="bg-white max-w-full overflow-hidden">
      <Head>
        <title>Masterplan | The Zo World</title>
      </Head>
      <Introduction />
      <Details />
      <JoinDiscord />
      <EarnCards />
      <Roadmap />
      <ZoApp />
      <Conclusion />
    </section>
  );
};

export default MasterplanPage;
