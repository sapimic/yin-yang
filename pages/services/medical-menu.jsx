import React from "react";
import Head from "next/head";
import Heading from "../../components/Heading";
import MenuItem from "../../components/MenuItem";
import Link from "next/link";
import { FaUsers } from "react-icons/fa";

const menu = () => {
  return (
    <div className="container">
      <Head>
        <title>Yin Yang Spa - Medical Menu</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Heading
        mainHeading="Medical Menu"
        subHeading="All medical services offered by Yin Yang Spa."
      />

      <div className="flex-column justify-center align-center">
        <div className="flex-row justify-center">
          <MenuItem menuHeading="Eye Light">
            <p className="p-20">
              Often a combination of lifestyle, hormones and depleting collagen,
              most of us combat dark circles through our lives. Eye Light, a
              painless intra-dermal delivery system induces collagen and elastin
              production. It also improves skin texture and appearances of fine
              lines and wrinkles. An all new treatment that promises great
              results.
            </p>
          </MenuItem>
          <MenuItem menuHeading="Botox">
            <p className="p-20">
              Doctor Medical Spa offers BOTOX Cosmetic injectable treatment for
              patients interested in reducing the appearance of the visible
              effects of age. BOTOX® Cosmetic is a neuromodulator that
              temporarily relaxes the facial muscles in the designated treatment
              area to treat dynamic wrinkles like frown lines, crow’s feet, and
              smile lines. If you are looking to restore a younger-looking
              appearance without undergoing an extensive surgical procedure,
              BOTOX Cosmetic might be the right choice for you!
            </p>
          </MenuItem>
          <MenuItem menuHeading="Injectable Hyaluronic Acid">
            <p className="p-20">
              Injectable hyaluronic acid (HA) is a type of temporary dermal
              filler. Hyaluronic acid is found naturally through out the body,
              with the highest concentrations in the joints, eyes, and skin. In
              the skin hyaluronic acid attracts water, which allows the skin to
              become more hydrated. As we age, the fat, muscles, bone, and skin
              in our face begins to thin. This loss of volume leads to either a
              sunken or sagging appearance of the face, fine lines, wrinkles,
              folds, and thin lips. Injectable HA is used to reduce the
              appearance of fine lines and wrinkles, facial folds, and to create
              structure, framework, and volume to the face and lips. The effects
              of injectable hyaluronic acid are seen immediately.
            </p>
          </MenuItem>
          <MenuItem menuHeading="Profhilo Treatment">
            <p className="p-20">
              Profhilo is an injectable anti-ageing treatment containing slow
              release Hyaluronic Acid (HA) that is formulated to increase the
              volume and elasticity in the skin. The treatment also helps to
              stimulate collagen and elastin production which in turn improve
              skin tone, hydration and the appearance of fine lines.
            </p>
          </MenuItem>
        </div>

        <Link href="/team" className="button">
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

export default menu;
