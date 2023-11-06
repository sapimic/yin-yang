import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

const Atache = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Anubis</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Atache"
        subHeading="Our full Atache product catalog."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center gap-150">
          <ProductCard
            img="/images/products/anubis/antioxidant-cream.webp"
            name="Antioxidant Cream"
            type="Polivitaminic vitamin C line"
            price="$59"
          />
        </div>
        <Link href="/team" className="button mt-80">
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

export default Atache;
