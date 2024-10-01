import { useState } from "react";
import { json, useLoaderData } from "@remix-run/react";

export const meta = () => {
	return [{ title: "New Remix App" }];
};

export const loader = async () => {
	const response = await fetch("https://api.example.com/user");
	const serverSideData = await response.json();

	return json({
		serverSideData,
		test: "Hello",
	});
};

export default function Index() {
	const loaderData = useLoaderData<typeof loader>();

	console.log(loaderData);

	return (
		<div>
			{JSON.stringify(loaderData)}
			<p>
				{loaderData.test}, {loaderData?.serverSideData?.firstName}
			</p>
		</div>
	);
}
