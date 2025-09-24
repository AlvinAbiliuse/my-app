import Image from "next/image";
import { Collapsible } from "@base-ui-components/react/collapsible";
import { Dialog } from "@base-ui-components/react/dialog";

export default function Home() {
	return (
		<div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
			<p className="text-[3em]">HELLO</p>
			<a href="/frontendmentor">Front End Mentor Exercises</a>
		</div>
	);
}
