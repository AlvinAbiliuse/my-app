import { Collapsible } from "@base-ui-components/react/collapsible";
import "./styles.css";
import "./collapsibleStyles.css";
import Carousel from "./Carousel.jsx";

export function ChevronIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
			<path d="M3.5 9L7.5 5L3.5 1" stroke="currentcolor" />
		</svg>
	);
}
import Splide from "@splidejs/splide";

export default function FrontEndMentor() {
	return (
		<div className="frontEndMentor">
			<h1>Front End Mentor Exercises</h1>
			<Carousel />
			<Collapsible.Root className="collapsibleBox Collapsible">
				<Collapsible.Trigger className="collapsibleTrigger Trigger">
					<ChevronIcon className="Icon" />
					01 - Newbie
				</Collapsible.Trigger>
				<Collapsible.Panel className="collapsiblePanel Panel">
					<div className="Content">
						<a href="/frontendmentor/newbie/workitlandingpage">
							Workit Landing Page
						</a>
					</div>
				</Collapsible.Panel>
			</Collapsible.Root>
			<Collapsible.Root className="collapsibleBox Collapsible">
				<Collapsible.Trigger className="collapsibleTrigger Trigger">
					<ChevronIcon className="Icon" />
					02 - Junior
				</Collapsible.Trigger>
				<Collapsible.Panel className="collapsiblePanel Panel">
					<div className="Content"></div>
				</Collapsible.Panel>
			</Collapsible.Root>
			<Collapsible.Root className="collapsibleBox Collapsible">
				<Collapsible.Trigger className="collapsibleTrigger Trigger">
					<ChevronIcon className="Icon" />
					03 - Intermediate
				</Collapsible.Trigger>
				<Collapsible.Panel className="collapsiblePanel Panel">
					<div className="Content">
						<a href="/frontendmentor/intermediate/spacetourism">
							Space tourism multi-page website
						</a>
					</div>
				</Collapsible.Panel>
			</Collapsible.Root>
			<Collapsible.Root className="collapsibleBox Collapsible">
				<Collapsible.Trigger className="collapsibleTrigger Trigger">
					<ChevronIcon className="Icon" />
					04 - Advanced
				</Collapsible.Trigger>
				<Collapsible.Panel className="collapsiblePanel Panel">
					<div className="Content"></div>
				</Collapsible.Panel>
			</Collapsible.Root>
			<Collapsible.Root className="collapsibleBox Collapsible">
				<Collapsible.Trigger className="collapsibleTrigger Trigger">
					<ChevronIcon className="Icon" />
					05 - Guru
				</Collapsible.Trigger>
				<Collapsible.Panel className="collapsiblePanel Panel">
					<div className="Content"></div>
				</Collapsible.Panel>
			</Collapsible.Root>
		</div>
	);
}
