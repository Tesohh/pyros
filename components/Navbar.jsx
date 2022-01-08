// import styles from "../styles/Home.module.css";
import Link from 'next/link';
import NavEntry from './NavEntry';

export default function Navbar(props) {
	return (
    <>
			<nav className="flex bg-graybg shadow-xl items-center flex-wrap fixed w-full top-0 nav-scroll-magic font-semibold text-gray-400" id="navbar">
		{/* Logo */}
		<a href="#">
			<img src="/logo.svg" alt="logo" className="content-center h-10 mx-10 my-5 opacity-100" />
		</a>
		<p>{props.name}</p>

		{/* Menu Button  */}
		<button className="p-3 inline-flex ml-auto mx-10 lg:hidden" onClick = {
			() => {const menu = document.getElementById('navigation'); 
			menu.classList.toggle('hidden');
			// const btn = document.getElementById('mobile-nav-btn');
			// btn.classNameList.toggle('fa-bars fa-circle-arrow-down'); 
		 }} id="mobile-nav-btn">
			<i className="fas fa-bars"></i>
		</button>

		{/* Entries */}
		<div className="hidden top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto mr-5 text-secondary"
			id="navigation">
			<div className="lg-inline-flex lg:flex-row lg:ml-auto flex flex-col">
				<NavEntry id="games" n="1" text="Games"></NavEntry>
				<NavEntry></NavEntry>
			</div>
			<span className="p-5 lg:hidden"></span>
		</div>
	</nav>
    </>
  );
}
