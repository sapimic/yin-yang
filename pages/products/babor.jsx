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
            img="/images/products/babor/argan-cream.webp"
            name="Argan Cream"
            type="Nourishing skin smoother"
          />
          <ProductCard
            img="/images/products/babor/egf-collagen.webp"
            name="EGF & Collagen Cream"
            type="Lifting & firming, anti-aging"
          />
          <ProductCard
            img="/images/products/babor/gentle-peeling.webp"
            name="Gentle Peeling Cream"
            type="Even complexion, pore refining"
          />
          <ProductCard
            img="/images/products/babor/u-repair-cleanser.webp"
            name="Repair Cleanser"
            type="Repair RX"
          />
          <ProductCard
            img="/images/products/babor/stress-repair-lotion.webp"
            name="De-Stress & Repair Lotion"
            type="Refreshes the skin"
          />
          <ProductCard
            img="/images/products/babor/cellulite-lotion.webp"
            name="3D Cellulite Lotion"
            type="Active concentrate"
          />
          <ProductCard
            img="/images/products/babor/cellulite-fluid.webp"
            name="3D Cellulite Fluid"
            type="Active concentrate"
          />
          <ProductCard
            img="/images/products/babor/glow-cream.webp"
            name="Glow Cream"
            type="Hydration, luminosity"
          />
          <ProductCard
            img="/images/products/babor/cleansing-milk.webp"
            name="Cleansing Milk"
            type="Cleaning milk"
          />
          <ProductCard
            img="/images/products/babor/gel-tonic.webp"
            name="Gel & Tonic"
            type="Skin perfectioner"
          />
          <ProductCard
            img="/images/products/babor/shaping-body.webp"
            name="Shaping For Body"
            type="Body shaping lotion"
          />
          <ProductCard
            img="/images/products/babor/detox-v-cream.webp"
            name="Detox Vitamin Cream"
            type="Detoxification cream"
          />
          <ProductCard
            img="/images/products/babor/lift-express.webp"
            name="Lift Express"
            type="Softer skin"
          />
          <ProductCard
            img="/images/products/babor/active-purifier.webp"
            name="Active Purifier"
            type="For imperfections"
          />
          <ProductCard
            img="/images/products/babor/collagen-concetrate.webp"
            name="Collagen Concetrate"
            type="Better juicy skin"
          />
          <ProductCard
            img="/images/products/babor/perfect-glow.webp"
            name="Perfect Glow"
            type="Helps dry skin"
          />
          <ProductCard
            img="/images/products/babor/3d-firming.webp"
            name="3D Firming"
            type="Facial firming"
          />
          <ProductCard
            img="/images/products/babor/vitalizing-cream.webp"
            name="Vitalizing Cream"
            type="Facial treatment cream"
          />
          <ProductCard
            img="/images/products/babor/mimical-c-cream.webp"
            name="Control Cream"
            type="Anti-aging, hydration"
          />
          <ProductCard
            img="/images/products/babor/soothing-cream.webp"
            name="Soothing Cream"
            type="Reduces tightness"
          />
          <ProductCard
            img="/images/products/babor/balancing-cream.webp"
            name="Balancing Cream"
            type="Age preventing"
          />
          <ProductCard
            img="/images/products/babor/calming-cream.webp"
            name="Calming Cream"
            type="Sensitive skin"
          />
          <ProductCard
            img="/images/products/babor/cooling-gel.webp"
            name="Cooling Eye Gel"
            type="Age preventing"
          />
          <ProductCard
            img="/images/products/babor/detox-vitamin.webp"
            name="Refine Cellular"
            type="Detox vitamin cream"
          />
          <ProductCard
            img="/images/products/babor/hydration-ampoules.webp"
            name="Hydration Ampoules"
            type="Hydration plus"
          />
          <ProductCard
            img="/images/products/babor/m-eye-cream.webp"
            name="Moisturizing Eye Cream"
            type="Age Preventing"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-30.webp"
            name="Protect Cellular 30"
            type="Body protector"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-50.webp"
            name="Protect Cellular 50"
            type="Body protector"
          />
          <ProductCard
            img="/images/products/babor/purifying-cream.webp"
            name="Purifying Cream"
            type="Age preventing"
          />
          <ProductCard
            img="/images/products/babor/fluid-active-night.webp"
            name="Fluid Active Night"
            type="Anti-aging"
          />
          <ProductCard
            img="/images/products/babor/r-eye-cream.webp"
            name="Retinol Eye Cream"
            type="Sensitive eyes"
          />
          <ProductCard
            img="/images/products/babor/rose-toning.webp"
            name="Rose Toning Essence"
            type="Cleansing"
          />
          <ProductCard
            img="/images/products/babor/spa-shaping.webp"
            name="Spa Shaping"
            type="Body cream"
          />
          <ProductCard
            img="/images/products/babor/spot-corrector.webp"
            name="Refine cellular"
            type="Age spot corrector"
          />
          <ProductCard
            img="/images/products/babor/ultimate-repair.webp"
            name="Repair Cellular"
            type="Ultimate repair cream"
          />
          <ProductCard
            img="/images/products/babor/hand-cream.webp"
            name="Shaping Hand Cream"
            type="Hydration"
          />
          <ProductCard
            img="/images/products/babor/v-eye-cream.webp"
            name="Vitalizing Eye Cream"
            type="Eye cream"
          />
          <ProductCard
            img="/images/products/babor/vitamin-ampoules.webp"
            name="Vitamin Ampoules"
            type="Dull skin"
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

export default Babor;
