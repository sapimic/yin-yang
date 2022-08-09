import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import logo from "../public/images/home/yinyang-logo.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHome, FaList, FaUserFriends, FaSpa } from "react-icons/fa";

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
            <Link href="/">
              <a className={router.pathname == "/" ? styles.active : ""}>
                <FaHome className={styles.test} />
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a
                className={
                  router.pathname.startsWith("/services") ? styles.active : ""
                }
              >
                <FaList className={styles.test} />
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a
                className={
                  router.pathname.startsWith("/products") ? styles.active : ""
                }
              >
                <FaSpa className={styles.test} />
                Products
              </a>
            </Link>
          </li>
          <li>
            <Link href="/team">
              <a
                className={
                  router.pathname.startsWith("/team") ? styles.active : ""
                }
              >
                <FaUserFriends className={styles.test} />
                Team
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
