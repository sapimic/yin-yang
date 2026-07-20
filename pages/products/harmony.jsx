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
        <title>Yin Yang Spa - Harmony</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Harmony"
        subHeading="Our full Harmony product catalog."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center gap-150 p-40">
          <ProductCard
            img="/images/products/harmony/coconut-massage-oil.webp"
            name="Coconut Oil"
            type="Massage oil"
          />
          <ProductCard
            img="/images/products/harmony/vitality-boost.webp"
            name="Vitality Boost"
            type="Hand bracelet"
          />
          <ProductCard
            img="/images/products/harmony/energy-boost.webp"
            name="Energy Boost"
            type="Hand bracelet"
          />
          <ProductCard
            img="/images/products/harmony/tree-of-life.webp"
            name="Tree of Life"
            type="Hand bracelet"
          />
          <ProductCard
            img="/images/products/harmony/chakra-crown.webp"
            name="Chakra Crown"
            type="Hand bracelet"
          />
          <ProductCard
            img="/images/products/harmony/good-vibrations.webp"
            name="Good Vibrations"
            type="Hand bracelet"
          />
          <ProductCard
            img="/images/products/harmony/double-energy.webp"
            name="Double Energy"
            type="Hand bracelet"
          />
          <ProductCard
            img="/images/products/harmony/essential-oils.webp"
            name="Essential Oils"
            type="Aromatic oils"
          />
          <ProductCard
            img="/images/products/harmony/relaxing-tangerine-aromatic-oil.webp"
            name="Stress Relieving"
            type="Aromatic oils"
          />
          <ProductCard
            img="/images/products/harmony/lavender-roll-on.webp"
            name="Lavender Roll On"
            type="Aromatic oils"
          />
          <ProductCard
            img="/images/products/harmony/lavender-roll-on.webp"
            name="Eucalyptus Roll On"
            type="Aromatic oils"
          />
          <ProductCard
            img="/images/products/harmony/lavender-mini-roll-on.webp"
            name="Lavender Mini"
            type="Aromatic oils"
          />
          <ProductCard
            img="/images/products/harmony/eucalyptus-mini-aromatic-oil.webp"
            name="Eucalyptus Mini"
            type="Aromatic oils"
          />
        </div>
      </div>
    </div>
  );
};

export default Atache;
