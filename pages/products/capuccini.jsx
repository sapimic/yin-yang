import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";
import ProductCard from "../../components/ProductCard";

const capuccini = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Germaine de Capuccini</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Germaine de Capuccini"
        subHeading="Our full Germaine de Capuccini product catalog."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center gap-150">
          <ProductCard
            img="/images/products/capuccini/tlift-serum.webp"
            name="Timeexpert Lift Vector"
            type="Redefines facial contour"
            price="$172"
          />
          <ProductCard
            img="/images/products/capuccini/tlift-supreme.webp"
            name="Timeexpert Supreme Definition"
            type="Deeply hydrating"
            price="$96"
          />
          <ProductCard
            img="/images/products/capuccini/tlift-neck.webp"
            name="Timeexpert Lift Neck"
            type="Firming cream"
            price="$94"
          />
          <ProductCard
            img="/images/products/capuccini/tlift-eye.webp"
            name="Timeexpert Lift Eye"
            type="Contour cream"
            price="$93"
          />
          <ProductCard
            img="/images/products/capuccini/bcalm-sos.webp"
            name="B-Calm SOS"
            type="Intensive care"
            price="$94"
          />
          <ProductCard
            img="/images/products/capuccini/trides-night.webp"
            name="Timeexpert Rides Night"
            type="Renewing mask"
            price="$70"
          />
          <ProductCard
            img="/images/products/capuccini/tradiance-c+.webp"
            name="Timeexpert Radiance C+"
            type="Antioxidant"
            price="$76"
          />
          <ProductCard
            img="/images/products/capuccini/excel-pollution.webp"
            name="Excel Therapy O2"
            type="Skin combination"
            price="$84"
          />
          <ProductCard
            img="/images/products/capuccini/men-aqua-gel.webp"
            name="Aqua Clean Gel"
            type="Men's wash-off cleanser"
            price="$47"
          />
          <ProductCard
            img="/images/products/capuccini/men-energy-eyes.webp"
            name="Energy Eyes Roll-on"
            type="Men's anti-fatigue serum"
            price="$56"
          />
          <ProductCard
            img="/images/products/capuccini/men-powerage.webp"
            name="Powerage"
            type="Men's anti-aging"
            price="$71"
          />
          <ProductCard
            img="/images/products/capuccini/men-force-revive.webp"
            name="Force Revive"
            type="Men's anti-aging serum"
            price="$85"
          />
          <ProductCard
            img="/images/products/capuccini/sperience-cinnamon.webp"
            name="Sperience Cinnamon"
            type="Scrub"
            price="$79"
          />
          <ProductCard
            img="/images/products/capuccini/sperience-spa.webp"
            name="Sperience Spa"
            type="Exfoliating"
            price="$72"
          />
          <ProductCard
            img="/images/products/capuccini/sperience-essence.webp"
            name="Sperience Essence"
            type="Mediterranean cream"
            price="$79"
          />
          <ProductCard
            img="/images/products/capuccini/hydro-gel.webp"
            name="Hydro-gel Aloe Vera"
            type="Hydration treatment"
            price="$33"
          />
          <ProductCard
            img="/images/products/capuccini/tsrns-pro.webp"
            name="Timeexpert SRNS Pro"
            type="Advanced cream"
            price="$118"
          />
        </div>
        <Link href="/team">
          <a className="button mt-80">
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

export default capuccini;
