import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";
// import { FaBeer } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <head>
        <title>Pyros</title>
        <meta name="description" content="We make games: they're on fire!" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        </style>
      </head>
      <body className="bg-body text-white">
        <Navbar name="asd" />
        <div className="lg:ml-96 md:ml-72" id="">
          <div className="flex flex-col justify-center items-center h-screen w-full">
            <span className="font-bold text-[7vw] text-primary">
              We make games
            </span>
            <span className="font-bold text-[5vw] text-dim">
              they're on fire!
            </span>
          </div>
        </div>
        <div className="lg:ml-96 md:ml-72" id="games"></div>
        <div className="lg:ml-96 md:ml-72" id="about"></div>
        {/* <span className="font-bold text-blue-600">Giuro</span> */}
      </body>
    </>
  );
}
