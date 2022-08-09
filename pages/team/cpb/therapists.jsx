import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const Therapists = () => {
  return (
    <div className="container">
      <Head>
        <title>Cofresi Palm Beach - Therapists</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Cofresi Palm Beach Therapists"
        subHeading="Therapists from the Cofresi Palm Beach Spa."
      />
      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard />
        </div>
      </div>
    </div>
  );
};

export default Therapists;
