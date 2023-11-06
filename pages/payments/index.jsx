import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";

const Payments = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Payments</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Payments"
        subHeading="A quick look at all the services and packages our spa offers."
      />
    </div>
  );
};

export default Payments;
