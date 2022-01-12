// import styles from "../styles/Home.module.css";
import NavEntry from "./NavEntry";

export default function Navbar(props) {
  return (
    <div className="fixed top-0 left-0 h-screen lg:w-96 md:w-72 flex flex-col text-white outline-offset-1 outline-1 md:outline outline-gray-600 hidden md:block font-semibold ">
      <div className="flex flex-col h-screen items-center justify-center justify-items-center gap-1">
        <a href="#" className="mb-2">
          <img src="/biglogo.svg" className="h-20" />
        </a>
        <NavEntry id="games" text="Games" />
        <NavEntry id="about" text="About Us" />
        <NavEntry id="blog" text="Blog" />
      </div>
    </div>
  );
}
