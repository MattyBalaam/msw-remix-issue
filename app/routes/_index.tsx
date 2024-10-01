import { useState } from "react";
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
	return [{ title: "New Remix App" }];
};

export const loader = async () => {
	const response = await fetch("https://api.example.com/user");
	const serverSideData = await response.json();

	return {
		serverSideData,
		test: "Hello",
	};
};

export default function Index() {
	const { serverSideData } = useLoaderData();
	const [favoriteMovies, setFavoriteMovies] = useState<{
		data: { movies: Array<{ id: string; title: string }> };
	} | null>(null);

	console.log(serverSideData);

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<p id="server-side-greeting">Hello, {serverSideData?.firstName}!</p>
		</div>
	);
}
