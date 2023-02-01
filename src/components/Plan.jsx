import React from "react";
import { TbArrowRight, TbCheck } from "react-icons/tb";

export default function Plan({ label, price, advantages, action }) {
	return (
		<div className="p-4 xl:w-1/4 md:w-1/2 w-full">
			<div className="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-primary flex flex-col relative overflow-hidden cursor-pointer">
				<h2 className="text-sm tracking-widest title-font mb-1 font-medium">
					{label}
				</h2>
				<h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
					{parseFloat(price).toLocaleString("en-US", {
						currency: "SEL",
						style: "currency",
					})}
				</h1>
				{advantages.map((ad, index) => (
					<p key={index} className="flex items-center text-gray-600 mb-2">
						<span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
							<TbCheck />
						</span>
						{ad}
					</p>
				))}

				<button className="btn btn-primary flex" onClick={action}>
					<span className="flex flex-grow">Purchase</span>
					<TbArrowRight />
				</button>
				{/* <p className="text-xs text-gray-500 mt-3">
					Literally you probably haven't heard of them jean shorts.
				</p> */}
			</div>
		</div>
	);
}
