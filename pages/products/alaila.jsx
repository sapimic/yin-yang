import React from "react";
import Head from "next/head";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";
import Heading from "../../components/Heading";
import { FaUsers } from "react-icons/fa";

const Alaila = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Alaila</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading mainHeading="Alaila" subHeading="Our Alaila gift products." />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center gap-150">
          <ProductCard
            img="/images/products/alaila/aceite-masajes.webp"
            name="Oil Massage"
            type="Relaxing oils"
          />
          <ProductCard
            img="/images/products/alaila/ceras.webp"
            name="Waxes"
            type="Wax healing"
          />
          <ProductCard
            img="/images/products/alaila/exfoliante.webp"
            name="Scrub"
            type="Skin beautifier"
          />
          <ProductCard
            img="/images/products/alaila/jabon-espumoso.webp"
            name="Foamy Soap"
            type="Foamy line"
          />
          <ProductCard
            img="/images/products/alaila/sales-aromaticas.webp"
            name="Aromatic Salts"
            type="Stress reduction"
          />
          <ProductCard
            img="/images/products/alaila/sweet-scrub.webp"
            name="Sweet Scrub"
            type="Essential oils"
          />
          <ProductCard
            img="/images/products/alaila/tropical-peonias.webp"
            name="Tropical Peonias"
            type="Skin beautifier"
          />
        </div>
        <Link href="/contacts" className="button mt-80">
          <FaUsers
            style={{
              verticalAlign: "middle",
              fontSize: "20px",
              marginRight: "10px",
            }}
          />
          Contacts
        </Link>
      </div>
    </div>
  );
};

export default Alaila;
