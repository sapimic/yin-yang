import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import ServiceCard from "../../components/ServiceCard";

const BodyTreatments = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Body Treatments</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Body Treatments"
        subHeading="Body treatment services."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <ServiceCard img="/images/services/body-treatments/bt-1.jpg" />
          <ServiceCard img="/images/services/body-treatments/bt-2.jpg" />
          <ServiceCard img="/images/services/body-treatments/bt-3.jpg" />
          <ServiceCard img="/images/services/body-treatments/bt-4.jpg" />
        </div>
        <Link href="/team">
          <a className="button">
            <FaUsers
              style={{
                verticalAlign: "middle",
                fontSize: "20px",
                marginRight: "10px",
              }}
            />
            Contact Team
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BodyTreatments;
