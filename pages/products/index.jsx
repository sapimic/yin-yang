import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import SelectionCard from "../../components/SelectionCard";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Products</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Heading
        mainHeading="Our Products"
        subHeading="Select one of the featured brands."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <SelectionCard
            img="/images/products/babor-logo.png"
            link="/products/babor"
            linkText="Babor"
          />
          <SelectionCard
            img="/images/products/anubis-logo.png"
            link="/products/anubis"
            linkText="Anubis"
          />
          <SelectionCard
            img="/images/products/alaila-logo.png"
            link="/products/alaila"
            linkText="Alaila"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
