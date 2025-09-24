import { Collapsible } from "@base-ui-components/react/collapsible";
import "./styles.css";

export default function FrontEndMentor() {
	return (
		<div className="frontEndMentor">
			<h1>Front End Mentor Exercises</h1>
			<Collapsible.Root className="collapsibleBox">
				<Collapsible.Trigger className="collapsibleTrigger">
					01 - NEWBIE
				</Collapsible.Trigger>
				<Collapsible.Panel className="collapsiblePanel">
					<a href="/frontendmentor/newbie/workitlandingpage">
						Workit Landing Page
					</a>
				</Collapsible.Panel>
			</Collapsible.Root>
		</div>
	);
}
