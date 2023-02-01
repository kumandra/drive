import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({ to, label }) {
	const location = useLocation();
	return (
		<li>
			<Link
				to={to}
				className={
					location.pathname === to ? "active transition-all" : "transition-all"
				}
			>
				{label}
			</Link>
		</li>
	);
}
