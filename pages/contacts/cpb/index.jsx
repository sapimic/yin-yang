import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import SelectionCard from "../../../components/SelectionCard";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - CPB</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Cofresi Palm Beach Contacts"
        subHeading="Choose from our managers, reception, advisors and therapists."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <SelectionCard
            img="/images/contacts/reception.webp"
            link="/contacts/cpb/reception"
            linkText="Our Reception"
          />
          <SelectionCard
            img="/images/contacts/advisors.webp"
            link="/contacts/cpb/advisors"
            linkText="Our Advisors"
          />
          <SelectionCard
            img="/images/contacts/managers.webp"
            link="/contacts/cpb/managers"
            linkText="Our Managers"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
