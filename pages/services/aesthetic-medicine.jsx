import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import ServiceCard from "../../components/ServiceCard";
import VideoCard from "../../components/VideoCard";

const AestheticMedicine = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Aesthetic Medicine</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Aesthetic Medicine"
        subHeading="Aesthetic medicine services."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center">
          <VideoCard link="https://www.youtube.com/embed/MG4lnGePGkw?mute=1" />
          <VideoCard link="https://www.youtube.com/embed/MG4lnGePGkw?mute=1" />
          <ServiceCard img="/images/services/aesthetic-medicine/am-1.jpg" />
          <ServiceCard img="/images/services/aesthetic-medicine/am-2.jpg" />
          <ServiceCard img="/images/services/aesthetic-medicine/am-3.jpg" />
          <ServiceCard img="/images/services/aesthetic-medicine/am-4.jpg" />
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

export default AestheticMedicine;
