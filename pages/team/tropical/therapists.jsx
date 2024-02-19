import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const therapists = () => {
  return (
    <div className="container">
      <Head>
        <title>Tropical - Therapists</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading mainHeading="Tropical Therapists" subHeading="Our therapists." />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard
            personName="Diana"
            img="/images/team/tropical/t-diana.webp"
          />
          <TeamCard
            personName="Albany"
            img="/images/team/tropical/t-albany.webp"
          />
          <TeamCard
            personName="Claritza"
            img="/images/team/tropical/t-claritza.webp"
          />
          <TeamCard
            personName="Doraliza"
            img="/images/team/tropical/t-doraliza.webp"
          />
          <TeamCard
            personName="Paola"
            img="/images/team/tropical/t-paola.webp"
          />
          <TeamCard
            personName="Aracelis"
            img="/images/team/tropical/t-aracelis.webp"
          />
          <TeamCard personName="Rosa" img="/images/team/tropical/t-rosa.webp" />
          <TeamCard
            personName="Lysmalier"
            img="/images/team/tropical/t-lysmalier.webp"
          />
          <TeamCard
            personName="Gleibi"
            img="/images/team/tropical/t-gleibi.webp"
          />
          <TeamCard
            personName="Denia"
            img="/images/team/tropical/t-denia.webp"
          />
          <TeamCard
            personName="Raquel"
            img="/images/team/tropical/t-raquel.webp"
          />
          <TeamCard
            personName="Yanelys"
            img="/images/team/tropical/t-yanelys.webp"
          />
          <TeamCard
            personName="Mariana"
            img="/images/team/tropical/t-mariana.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default therapists;
