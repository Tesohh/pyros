// import styles from "../styles/Home.module.css";
import Link from "next/link";
import NavEntry from "./NavEntry";

export default function Navbar(props) {
  return (
    <div className="fixed top-0 left-0 h-screen w-96 flex flex-col text-white outline-offset-1 outline-1 outline outline-gray-600 hidden md:block font-semibold ">
      <div className="flex flex-col h-screen items-center justify-center justify-items-center">
        <NavEntry></NavEntry>
      </div>
    </div>
  );
}
