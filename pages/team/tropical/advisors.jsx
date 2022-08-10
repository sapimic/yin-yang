import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const advisors = () => {
  return (
    <div className="container">
      <Head>
        <title>Tropical - Advisors</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Heading mainHeading="Tropical Advisors" subHeading="Our advisors." />
      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard
            personName="Guilberto"
            img="/images/team/tropical/t-a-guilberto.jpg"
            contactable="true"
            number="https://wa.me/18099010166"
          />
          <TeamCard
            personName="Jancarlos"
            img="/images/team/tropical/t-a-jancarlos.jpg"
            contactable="true"
            number="https://wa.me/18296046662"
          />
          <TeamCard
            personName="Jean"
            img="/images/team/tropical/t-a-jean.jpg"
            contactable="true"
            number="https://wa.me/18299016556"
          />
        </div>
      </div>
    </div>
  );
};

export default advisors;
