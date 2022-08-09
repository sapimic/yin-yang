import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import { FaUsers } from "react-icons/fa";

const Babor = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Babor</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Babor"
        subHeading="Our full Babor product catalog."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center gap-150">
          <ProductCard
            img="/images/products/babor/argan-cream.jpg"
            name="Argan Cream"
            type="Nourishing skin smoother"
            price="$112"
          />
          <ProductCard
            img="/images/products/babor/balancing-cream.jpg"
            name="Balancing Cream"
            type="Age preventing"
            price="$92"
          />
          <ProductCard
            img="/images/products/babor/calming-cream.jpg"
            name="Calming Cream"
            type="Sensitive skin"
            price="$92"
          />
          <ProductCard
            img="/images/products/babor/cooling-gel.jpg"
            name="Cooling Eye Gel"
            type="Age preventing"
            price="$62"
          />
          <ProductCard
            img="/images/products/babor/detox-vitamin.jpg"
            name="Refine Cellular"
            type="Detox vitamin cream"
            price="$149"
          />
          <ProductCard
            img="/images/products/babor/gentle-peeling.jpg"
            name="Gentle Peeling"
            type="Cleansing"
          />
          <ProductCard
            img="/images/products/babor/hand-cream.jpg"
            name="Hand Cream"
            type="Hand cleaning"
          />
          <ProductCard
            img="/images/products/babor/hydration-ampoules.jpg"
            name="Hydration Ampoules"
            type="Hydration plus"
            price="$55"
          />
          <ProductCard
            img="/images/products/babor/m-eye-cream.jpg"
            name="Moisturizing Eye Cream"
            type="Age Preventing"
            price="$67"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-30.jpg"
            name="Protect Cellular 30"
            type="Body protector"
            price="$64"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-50.jpg"
            name="Protect Cellular 50"
            type="Body protector"
            price="$48"
          />
          <ProductCard
            img="/images/products/babor/purifying-cream.jpg"
            name="Purifying Cream"
            type="Age preventing"
            price="$92"
          />
          <ProductCard
            img="/images/products/babor/r-eye-cream.jpg"
            name="Retinol Eye Cream"
            type="Sensitive eyes"
            price="$72"
          />
          <ProductCard
            img="/images/products/babor/refine-cellular.jpg"
            name="Refine Cellular"
            type="Enzyme peeling balm"
          />
          <ProductCard
            img="/images/products/babor/rose-toning.jpg"
            name="Rose Toning Essence"
            type="Cleansing"
            price="$33"
          />
          <ProductCard
            img="/images/products/babor/sos-ampoules.jpg"
            name="SOS Calming"
            type="Sensitive skin"
          />
          <ProductCard
            img="/images/products/babor/spa-shaping.jpg"
            name="Spa Shaping"
            type="Body cream"
            price="$210"
          />
          <ProductCard
            img="/images/products/babor/spot-corrector.jpg"
            name="Refine cellular"
            type="Age spot corrector"
            price="$63"
          />
          <ProductCard
            img="/images/products/babor/ultimate-repair.jpg"
            name="Repair Cellular"
            type="Ultimate repair cream"
            price="$180"
          />
          <ProductCard
            img="/images/products/babor/v-eye-cream.jpg"
            name="Vitalizing Eye Cream"
            type="Eye cream"
            price="$61"
          />
          <ProductCard
            img="/images/products/babor/vitamin-ampoules.jpg"
            name="Vitamin Ampoules"
            type="Dull skin"
            price="$52"
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

export default Babor;
