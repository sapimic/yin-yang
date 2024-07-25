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
        <title>Yin Yang Spa - Atache</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Atache"
        subHeading="Our full Atache product catalog."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center gap-150">
          <ProductCard
            img="/images/products/atache/wrinkle-attack-night.webp"
            name="Wrinkle Attack Night"
            type="Anti-aging"
          />
          <ProductCard
            img="/images/products/atache/wrinkle-attack-day.webp"
            name="Wrinkle Attack Day"
            type="Anti-wrinkle"
          />
          <ProductCard
            img="/images/products/atache/hydroprotective-cream.webp"
            name="Hydroprotective Cream"
            type="Antioxidant cream"
          />
          <ProductCard
            img="/images/products/atache/tensor-boost.webp"
            name="Lift Therapy"
            type="Tensor boost"
          />
          <ProductCard
            img="/images/products/atache/makeup-remover.webp"
            name="Makeup Remover"
            type="Remover"
          />
          <ProductCard
            img="/images/products/atache/lift-therapy.webp"
            name="Lift Therapy"
            type="Force lift day"
          />
          <ProductCard
            img="/images/products/atache/eye-wrinkle.webp"
            name="Eye Wrinkle Attack"
            type="Eye serum"
          />
          <ProductCard
            img="/images/products/atache/intensive-lift.webp"
            name="Intesive Lift Contour"
            type="Eye and lip cream"
          />
          <ProductCard
            img="/images/products/atache/eye-contour.webp"
            name="Eye Contour"
            type="Eye cream"
          />
          <ProductCard
            img="/images/products/atache/antioxidant-velvet.webp"
            name="Velvet Serum"
            type="Antioxidant velvet serum"
          />
          <ProductCard
            img="/images/products/atache/sublime-lift-therapy.webp"
            name="Sublime Lift Night"
            type="Firming serum"
          />
          <ProductCard
            img="/images/products/atache/aqua-tonic.webp"
            name="Aqua Tonic"
            type="Makeup Remover"
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
