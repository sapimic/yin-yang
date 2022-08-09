import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

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
        <div className="flex-row justify-center align-center gap-100"></div>
        <Link href="/team">
          <a className="button mt-40">
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
