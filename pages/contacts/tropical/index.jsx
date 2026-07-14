import React from "react";
import Head from "next/head";
import Heading from "../../../components/Heading";
import SelectionCard from "../../../components/SelectionCard";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Tropical</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Tropical Contacts"
        subHeading="Choose from our managers, reception, advisors and therapists."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <SelectionCard
            img="/images/contacts/reception.webp"
            link="/contacts/tropical/reception"
            linkText="Our Reception"
          />
          <SelectionCard
            img="/images/contacts/advisors.webp"
            link="/contacts/tropical/advisors"
            linkText="Our Advisors"
          />
          <SelectionCard
            img="/images/contacts/managers.webp"
            link="/contacts/tropical/managers"
            linkText="Our Managers"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
