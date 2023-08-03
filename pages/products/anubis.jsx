import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import ProductCard from "../../components/ProductCard";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

const Anubis = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Anubis</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Anubis"
        subHeading="Our full Anubis product catalog."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center align-center gap-150">
          <ProductCard
            img="/images/products/anubis/antioxidant-cream.webp"
            name="Antioxidant Cream"
            type="Polivitaminic vitamin C line"
            price="$59"
          />
          <ProductCard
            img="/images/products/anubis/beauty-flash.webp"
            name="Beauty Flash"
            type="Concentrate line"
            price="$39"
          />
          <ProductCard
            img="/images/products/anubis/concentrate-equilibrant.webp"
            name="Concentrate Equilibrant"
            type="Regul oil"
            price="$69"
          />
          <ProductCard
            img="/images/products/anubis/eye-contour-pack.webp"
            name="Eye Contour Pack"
            type="Excellence anti-aging"
            price="$48"
          />
          <ProductCard
            img="/images/products/anubis/eye-contour.webp"
            name="Eye Contour"
            type="Excellence anti-aging"
            price="$15"
          />
          <ProductCard
            img="/images/products/anubis/ferulic-vit.webp"
            name="Ferulic Vitamin"
            type="Concentrate line"
          />
          <ProductCard
            img="/images/products/anubis/gold-cream.webp"
            name="Gold Cream"
            type="Intensive anti-aging"
            price="$68"
          />
          <ProductCard
            img="/images/products/anubis/hyaluronic-cream.webp"
            name="Hyaluronic Cream"
            type="Anubis medication"
            price="$61"
          />
          <ProductCard
            img="/images/products/anubis/hyaluronic-serum.webp"
            name="Hyaluronic Serum"
            type="Anubis medication"
          />
          <ProductCard
            img="/images/products/anubis/k-mask.webp"
            name="Whitening K Mask"
            type="Shining line"
          />
          <ProductCard
            img="/images/products/anubis/lotion-purificant.webp"
            name="Lotion Purificant"
            type="Regul oil"
            price="$25"
          />
          <ProductCard
            img="/images/products/anubis/makeup-remover.webp"
            name="Makeup Remover"
            type="Vital line"
            price="$22"
          />
          <ProductCard
            img="/images/products/anubis/proteoglycans.webp"
            name="Proteoglycans"
            type="Concentrate line"
            price="$39"
          />
          <ProductCard
            img="/images/products/anubis/serum-hydro.webp"
            name="Serum Hydro"
            type="Regul oil"
            price="$65"
          />
          <ProductCard
            img="/images/products/anubis/shock-treatment-hydrating.webp"
            name="Shock Treatment Hydrating"
            type="7 days line"
            price="$32"
          />
          <ProductCard
            img="/images/products/anubis/shock-treatment-lifting.webp"
            name="Shock Treatment Lifting"
            type="7 days line"
            price="$32"
          />
          <ProductCard
            img="/images/products/anubis/zul-cream.webp"
            name="Moisturizer Cream"
            type="Sensitive zul"
            price="$42"
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

export default Anubis;
