import Link from "next/link";
import Container from "../Container";
import { Redressed } from "next/font/google";
const redressed = Redressed({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 shadow-sm">
      <div className="py-4 border-b[1px]">
        <Container>
          <div className="flex justify-between items-center gap-3 md:gap-0">
            <Link className={`${redressed.className} text `} href={"/"}>
              E-Shop
            </Link>
            <div className="hidden md:block">Serch</div>
            <div className="flex items-center gap-8 md:gap-12">
              <div>Cart Count</div>
              <div>User Menu</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
