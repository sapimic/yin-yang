import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import TeamCard from "../../../components/TeamCard";

const Reception = () => {
  return (
    <div className="container">
      <Head>
        <title>Cofresi Palm Beach - Reception</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Cofresi Palm Beach Reception"
        subHeading="Our reception staff."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <TeamCard
            personName="Eli Yismeli"
            img="/images/contacts/cpb/c-r-eli.webp"
            number="https://wa.me/18098821402"
            contactable="true"
            mailable="true"
            mail="mailto:recepcionista.yinyangspa@
            lhvcresorts.com"
          />
          <TeamCard
            personName="Madelyn"
            img="/images/contacts/cpb/c-r-madelyn.webp"
            number="https://wa.me/18293682785"
            contactable="true"
            mailable="true"
            mail="mailto:recepcionista.yinyangspa@
            lhvcresorts.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Reception;
