import React from "react";
import Directory from "./Dir";
import File from "./File";

export default function Entry({ entry }) {
	if (entry.type === "directory") {
		return <Directory entry={entry} />;
	}
	return <File entry={entry} />;
}
