import Link from "next/link";

/**
 *
 * @param {{id: string, n: number, text: string, active:boolean}} props
 */
export default function NavEntry(props) {
  return (
    <>
      <Link href={`#${props.id}`} id={props.id}>
        <a
          className={`px-3 py-2 mx-5 hover:underline ${
            props.active ? "text-white" : "text-dim"
          } hover:text-primary`}
        >
          <span className="text-primary">{props.n || "#"}.</span>{" "}
          {props.text || "NavbarEntry"}
        </a>
      </Link>
    </>
  );
}
