import Link from "next/link";
import Logo from "../../../public/panaverse-logo.webp";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <Wrapper>
        {/* Logo */}
        <div className="flex justify-between py-4 items-center">
          <div>
            <Image height={50} src={Logo} alt="Logo" />
          </div>

          {/* Navigation Bar */}
          <nav>
            <ul className="flex space-x-8 font-medium">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/courses"}>Courses</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Wrapper>
    </header>
  );
}
