import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import SelectionCard from "../../components/SelectionCard";

const Products = () => {
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
            img="/images/products/babor-logo.webp"
            link="/products/babor"
            linkText="Babor"
          />
          <SelectionCard
            img="/images/products/anubis-logo.webp"
            link="/products/atache"
            linkText="Atache"
          />
          <SelectionCard
            img="/images/products/alaila-logo.webp"
            link="/products/alaila"
            linkText="Alaila"
          />
          <SelectionCard
            img="/images/products/germaine-logo.webp"
            link="/products/capuccini"
            linkText="Germaine de Capuccini"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
