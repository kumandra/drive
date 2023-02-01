import Plan from "@/components/Plan";
import React from "react";

const plans = [
	{ label: "Basic", price: "1", advantages: ["1GB of storage"] },
	{ label: "Standard", price: "10", advantages: ["10GB of storage"] },
	{ label: "Professional", price: "100", advantages: ["100GB of storage"] },
	{ label: "Enterprise", price: "1000", advantages: ["1000GB of storage"] },
];

export default function Plans() {
	return (
		<section className="text-gray-600 body-font overflow-hidden">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-col text-center w-full mb-20">
					<h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
						Pricing
					</h1>
					<p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
						Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
					</p>
					<div className="flex mx-auto border-2 border-primary rounded overflow-hidden mt-6">
						<button className="py-1 px-4 focus:outline-none">Monthly</button>
						<button className="py-1 px-4 border-primary bg-primary text-white focus:outline-none">
							Annually
						</button>
					</div>
				</div>
				<div className="flex flex-wrap -m-4">
					{plans.map((plan) => (
						<Plan {...plan} key={plan.label} />
					))}
				</div>
			</div>
		</section>
	);
}
