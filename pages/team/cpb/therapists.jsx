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
        subHeading="Our therapists."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard personName="Suna" img="/images/team/cpb/c-suna.webp" />
          <TeamCard
            personName="Florian"
            img="/images/team/cpb/c-florian.webp"
          />
          <TeamCard
            personName="Maribel"
            img="/images/team/cpb/c-maribel.webp"
          />
          <TeamCard
            personName="Yuliana"
            img="/images/team/cpb/c-yuliana.webp"
          />
          <TeamCard
            personName="Romelia"
            img="/images/team/cpb/c-romelia.webp"
          />
          <TeamCard
            personName="Naftaly"
            img="/images/team/cpb/c-naftaly.webp"
          />
          <TeamCard personName="Maria" img="/images/team/cpb/c-maria.webp" />
          <TeamCard
            personName="Niurquys"
            img="/images/team/cpb/c-niurquys.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Therapists;
