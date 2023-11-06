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
            price="$112"
          />
          <ProductCard
            img="/images/products/babor/egf-collagen.webp"
            name="EGF & Collagen Cream"
            type="Lifting & firming, anti-aging"
            price="$178"
          />
          <ProductCard
            img="/images/products/babor/gentle-peeling.webp"
            name="Gentle Peeling Cream"
            type="Even complexion, pore refining"
            price="$37"
          />
          <ProductCard
            img="/images/products/babor/u-repair-cleanser.webp"
            name="Repair Cleanser"
            type="Repair RX"
            price="$54"
          />
          <ProductCard
            img="/images/products/babor/stress-repair-lotion.webp"
            name="De-Stress & Repair Lotion"
            type="Refreshes the skin"
            price="$51"
          />
          <ProductCard
            img="/images/products/babor/cellulite-lotion.webp"
            name="3D Cellulite Lotion"
            type="Active concentrate"
            price="$107"
          />
          <ProductCard
            img="/images/products/babor/cellulite-fluid.webp"
            name="3D Cellulite Fluid"
            type="Active concentrate"
            price="$108"
          />
          <ProductCard
            img="/images/products/babor/glow-cream.webp"
            name="Glow Cream"
            type="Hydration, luminosity"
            price="$40"
          />
          <ProductCard
            img="/images/products/babor/cleansing-milk.webp"
            name="Cleansing Milk"
            type="Cleaning milk"
            price="$38"
          />
          <ProductCard
            img="/images/products/babor/gel-tonic.webp"
            name="Gel & Tonic"
            type="Skin perfectioner"
            price="$45"
          />
          <ProductCard
            img="/images/products/babor/shaping-body.webp"
            name="Shaping For Body"
            type="Body shaping lotion"
            price="$28"
          />
          <ProductCard
            img="/images/products/babor/detox-v-cream.webp"
            name="Detox Vitamin Cream"
            type="Detoxification cream"
            price="$155"
          />
          <ProductCard
            img="/images/products/babor/lift-express.webp"
            name="Lift Express"
            type="Softer skin"
            price="$72"
          />
          <ProductCard
            img="/images/products/babor/active-purifier.webp"
            name="Active Purifier"
            type="For imperfections"
            price="$44"
          />
          <ProductCard
            img="/images/products/babor/collagen-concetrate.webp"
            name="Collagen Concetrate"
            type="Better juicy skin"
            price="$61"
          />
          <ProductCard
            img="/images/products/babor/perfect-glow.webp"
            name="Perfect Glow"
            type="Helps dry skin"
            price="$48"
          />
          <ProductCard
            img="/images/products/babor/3d-firming.webp"
            name="3D Firming"
            type="Facial firming"
            price="$76"
          />
          <ProductCard
            img="/images/products/babor/vitalizing-cream.webp"
            name="Vitalizing Cream"
            type="Facial treatment cream"
            price="$94"
          />
          <ProductCard
            img="/images/products/babor/mimical-c-cream.webp"
            name="Control Cream"
            type="Anti-aging, hydration"
            price="$96"
          />
          <ProductCard
            img="/images/products/babor/soothing-cream.webp"
            name="Soothing Cream"
            type="Reduces tightness"
            price="$94"
          />
          <ProductCard
            img="/images/products/babor/balancing-cream.webp"
            name="Balancing Cream"
            type="Age preventing"
            price="$92"
          />
          <ProductCard
            img="/images/products/babor/calming-cream.webp"
            name="Calming Cream"
            type="Sensitive skin"
            price="$92"
          />
          <ProductCard
            img="/images/products/babor/cooling-gel.webp"
            name="Cooling Eye Gel"
            type="Age preventing"
            price="$62"
          />
          <ProductCard
            img="/images/products/babor/detox-vitamin.webp"
            name="Refine Cellular"
            type="Detox vitamin cream"
            price="$149"
          />
          <ProductCard
            img="/images/products/babor/hydration-ampoules.webp"
            name="Hydration Ampoules"
            type="Hydration plus"
            price="$55"
          />
          <ProductCard
            img="/images/products/babor/m-eye-cream.webp"
            name="Moisturizing Eye Cream"
            type="Age Preventing"
            price="$68"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-30.webp"
            name="Protect Cellular 30"
            type="Body protector"
            price="$64"
          />
          <ProductCard
            img="/images/products/babor/protecting-balm-50.webp"
            name="Protect Cellular 50"
            type="Body protector"
            price="$48"
          />
          <ProductCard
            img="/images/products/babor/purifying-cream.webp"
            name="Purifying Cream"
            type="Age preventing"
            price="$94"
          />
          <ProductCard
            img="/images/products/babor/active-night.webp"
            name="Fluid Active Night"
            type="Anti-aging"
            price="$52"
          />
          <ProductCard
            img="/images/products/babor/r-eye-cream.webp"
            name="Retinol Eye Cream"
            type="Sensitive eyes"
            price="$72"
          />
          <ProductCard
            img="/images/products/babor/rose-toning.webp"
            name="Rose Toning Essence"
            type="Cleansing"
            price="$33"
          />
          <ProductCard
            img="/images/products/babor/spa-shaping.webp"
            name="Spa Shaping"
            type="Body cream"
            price="$69"
          />
          <ProductCard
            img="/images/products/babor/spot-corrector.webp"
            name="Refine cellular"
            type="Age spot corrector"
            price="$85"
          />
          <ProductCard
            img="/images/products/babor/ultimate-repair.webp"
            name="Repair Cellular"
            type="Ultimate repair cream"
            price="$187"
          />
          <ProductCard
            img="/images/products/babor/hand-cream.webp"
            name="Shaping Hand Cream"
            type="Hydration"
            price="$62"
          />
          <ProductCard
            img="/images/products/babor/v-eye-cream.webp"
            name="Vitalizing Eye Cream"
            type="Eye cream"
            price="$63"
          />
          <ProductCard
            img="/images/products/babor/vitamin-ampoules.webp"
            name="Vitamin Ampoules"
            type="Dull skin"
            price="$52"
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
