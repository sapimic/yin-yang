import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import ServiceCard from "../../components/ServiceCard";
import { FaUsers } from "react-icons/fa";

const BeautySalon = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Beauty Salon</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading mainHeading="Beauty Salon" subHeading="Beauty salon services." />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <ServiceCard img="/images/services/beauty-salon/bs-1.webp" />
          <ServiceCard img="/images/services/beauty-salon/bs-2.webp" />
          <ServiceCard img="/images/services/beauty-salon/bs-3.webp" />
          <ServiceCard img="/images/services/beauty-salon/bs-4.webp" />
        </div>
        <Link href="/team" className="button">
          <FaUsers
            style={{
              verticalAlign: "middle",
              fontSize: "20px",
              marginRight: "10px",
            }}
          />
          Contact Team
        </Link>
      </div>
    </div>
  );
};

export default BeautySalon;
