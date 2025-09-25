import Image from "next/image";
import "./styles.css";

function HeroNav() {
	return (
		<div className="heroNav">
			<div className="nav">
				<Image
					width={100}
					height={50}
					alt="image for the hero page"
					src="/workitAssets/images/logo-light.svg"
					className="companyLogo"
				/>
				<div className="link">
					<a href="#">Apply for access</a>
					<div></div>
				</div>
			</div>
			<div className="heroSection">
				<h1>
					Data <span>tailored</span> to your needs
				</h1>
				<button>Learn more</button>
				<Image
					width={300}
					height={250}
					alt="background swirl pattern"
					src="/workitAssets/images/bg-pattern-1.svg"
					className="floatingAssetLeft"
				/>
				<Image
					width={250}
					height={200}
					alt="background swirl pattern"
					src="/workitAssets/images/bg-pattern-2.svg"
					className="floatingAssetRight"
				/>
			</div>
		</div>
	);
}

function SecondSection() {
	return (
		<div className="secondSection">
			<Image
				width={800}
				height={800}
				alt="image for the hero page"
				src="/workitAssets/images/image-hero.webp"
				className="heroImage"
			/>
			<div className="card">
				<p className="number">1</p>
				<h3>Actionable insights</h3>
				<p className="content">
					Optimize your products, improve customer satisfaction and stay ahead
					of the competition with our product data analytics.
				</p>
			</div>
			<div className="card">
				<p className="number">2</p>
				<h3>Data-driven decisions</h3>
				<p className="content">
					Make data-driven decisions with our product data analytics. Our
					AI-generated reports help you unlock insights hidden in your product
					data.
				</p>
			</div>
			<div className="card">
				<p className="number">3</p>
				<h3>Always affordable</h3>
				<p className="content">
					Always affordable pricing that scales with your business. Get
					top-quality product data analytics services without hidden costs or
					unexpected fees.
				</p>
			</div>
		</div>
	);
}

function ThirdSection() {
	return (
		<div className="thirdSection">
			<Image
				width={400}
				height={400}
				alt="image of the founder of the company"
				src="/workitAssets/images/image-founder.webp"
				className="profileImage"
			/>
			<div className="CTACard">
				<h3>Be the first to test</h3>
				<p>
					Hi, I'm Louis Graham, the founder of the company. Book a demo call
					with me to become a beta tester for our app and kickstart your
					company. Apply for access below and I’ll be in touch to schedule a
					call.
				</p>
				<button>Apply for access</button>
				<Image
					width={300}
					height={250}
					alt="background swirl pattern"
					src="/workitAssets/images/bg-pattern-3.svg"
					className="cardAsset"
				/>
			</div>
		</div>
	);
}

function Footer() {
	return (
		<div className="footer">
			<img src="/workitAssets/images/logo-dark.svg" className="footerLogo" />
			<div className="socials">
				<img src="/workitAssets/images/icon-facebook.svg" />
				<img src="/workitAssets/images/icon-instagram.svg" />
				<img src="/workitAssets/images/icon-twitter.svg" />
			</div>
		</div>
	);
}

export default function Workit() {
	return (
		<div id="workit">
			<HeroNav />
			<SecondSection />
			<ThirdSection />
			<Footer />
		</div>
	);
}
