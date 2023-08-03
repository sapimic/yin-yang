import Head from "next/head";
import React from "react";
import Heading from "../../components/Heading";
import SelectionCard from "../../components/SelectionCard";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Services</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Heading
        mainHeading="Our Services"
        subHeading="Select one of the featured services."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <SelectionCard
            img="/images/services/spa-menu.webp"
            link="/services/spa-menu"
            linkText="Spa Menu"
          />
          <SelectionCard
            img="/images/services/medical-menu.webp"
            link="/services/medical-menu"
            linkText="Medical Menu"
          />
          <SelectionCard
            img="/images/services/aesthetic-medicine.webp"
            link="/services/aesthetic-medicine"
            linkText="Aesthetic Medicine"
          />
          <SelectionCard
            img="/images/services/facial-treatments.webp"
            link="/services/facial-treatments"
            linkText="Facial Treatments"
          />
          <SelectionCard
            img="/images/services/body-treatments.webp"
            link="/services/body-treatments"
            linkText="Body Treatments"
          />
          <SelectionCard
            img="/images/services/massages.webp"
            link="/services/massages"
            linkText="Massages"
          />
          <SelectionCard
            img="/images/services/beauty-salon.webp"
            link="/services/beauty-salon"
            linkText="Beauty Salon"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
