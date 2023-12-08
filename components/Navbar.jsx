import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import logo from "../public/images/home/yinyang-logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FaHome,
  FaList,
  FaUserFriends,
  FaSpa,
  FaCreditCard,
} from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src={logo} alt="Vercel Logo" width={160} height={100} />
        </div>
        <ul>
          <li className={styles.li}>
            <Link
              href="/"
              className={router.pathname.endsWith("/") ? styles.active : ""}
            >
              <FaHome className={styles.icon} />
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={
                router.pathname.startsWith("/services") ? styles.active : ""
              }
            >
              <FaList className={styles.icon} />
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className={
                router.pathname.startsWith("/products") ? styles.active : ""
              }
            >
              <FaSpa className={styles.icon} />
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className={
                router.pathname.startsWith("/team") ? styles.active : ""
              }
            >
              <FaUserFriends className={styles.icon} />
              Team
            </Link>
          </li>
          {/* <li>
            <Link
              href="/payments"
              className={
                router.pathname.startsWith("/payments") ? styles.active : ""
              }
            >
              <FaCreditCard className={styles.icon} />
              Payments
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
