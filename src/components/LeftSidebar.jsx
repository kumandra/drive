import React from "react";
import NavLink from "./NavLink";

export default function LeftSidebar() {
	return (
		<div className="w-64 h-screen border-r border-r-base-300 sticky top-20">
			<ul className="menu w-full p-2 rounded-box ">
				<NavLink to="/files" label="Files" />
				<NavLink to="/plans" label="Plans" />
			</ul>
		</div>
	);
}
