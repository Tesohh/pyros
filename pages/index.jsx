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
        <div className="md:ml-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea
          recusandae molestiae expedita deleniti ullam numquam voluptatem
          delectus similique error, dignissimos pariatur facilis quasi aut
          magnam voluptatibus dolore odio in.
        </div>
        {/* <span className="font-bold text-blue-600">Giuro</span> */}
      </body>
    </>
  );
}
