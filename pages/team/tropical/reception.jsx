import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const reception = () => {
  return (
    <div className="container">
      <Head>
        <title>Tropical - Reception</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Heading
        mainHeading="Tropical Reception"
        subHeading="Our reception staff."
      />
      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard
            personName="Carla"
            img="/images/team/tropical/t-r-carla.jpg"
          />
          <TeamCard
            personName="Marleny"
            img="/images/team/tropical/t-r-marleny.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default reception;
