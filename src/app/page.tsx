"use client";

import Image from "next/image";
import data from "@/data.json";
import { useState } from "react";

// Components
import ExtensionCard from "../components/ExtensionCard";
import FilterButton from "@/components/FilterButton";

export default function Home() {
	const [activeFilter, setActiveFilter] = useState("all");

	// Getting data from the data.json file
	const extensionData = data;

	return (
		<main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-5 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9]">
			<header className="bg-neutral-0 rounded-xl p-3.5 mb-10 w-full flex items-center justify-between shadow">
				<Image src={"/images/logo.svg"} alt="logo" width={200} height={200} />
				<Image
					src={"/images/icon-moon.svg"}
					alt="color mode changer"
					width={60}
					height={60}
					className="bg-neutral-100 p-4 rounded-xl"
				/>
			</header>

			{/* The filter */}
			<div className="w-full text-center mb-10">
				<h1 className="font-bold text-neutral-900">Extensions List</h1>
				<div className="flex justify-around">
					<FilterButton text="All" isActive={activeFilter === "all"} onClick={() => setActiveFilter("all")} />
					<FilterButton text="Active" isActive={activeFilter === "active"} onClick={() => setActiveFilter("active")} />
					<FilterButton text="Inactive" isActive={activeFilter === "inactive"} onClick={() => setActiveFilter("inactive")} />
				</div>
			</div>

			{/* Displaying all the cards */}
			{extensionData.map((extension) => (
				<ExtensionCard
					key={extension.id}
					name={extension.name}
					description={extension.description}
					icon={extension.logo}
					isActive={extension.isActive}
				/>
			))}
		</main>
	);
}
