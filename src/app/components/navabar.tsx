import styles from "@/app/ui/home.module.css";
import navbarStyles from "@/app/ui/navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SideNav() {
  return (
    <nav className={`${styles.mainContainer} flex justify-between`}>
      <Link href="/"><h1 className={`text-2xl p-5`}>Curio</h1></Link>
      <div className={`navLinks`}>
        <ul className={`flex justify-between p-5 pr-10 ${navbarStyles.unli}`}>
          <li className="pr-5">
            <Link href="https://mrinshad.github.io/Portfolio/">About Dev</Link>
          </li>
          <li>
            <Link href="https://github.com/mrinshad" target="_blank">
            <Image 
            src="/github.png" 
            width={25}
            height={25}
            alt="send picture"
            /></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
