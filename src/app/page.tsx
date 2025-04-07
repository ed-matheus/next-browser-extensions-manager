"use client";

import Image from "next/image";
import data from "@/data.json";
import { useEffect, useState } from "react";

// Components
import ExtensionCard from "../components/ExtensionCard";
import FilterButton from "@/components/FilterButton";

export default function Home() {
	// Getting data from data.json file
	const extensionData = data;

	// States
	const [activeFilter, setActiveFilter] = useState("all");
	const [filteredExtensions, setFilteredExtensions] = useState(extensionData);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") === "dark";
		setIsDarkMode(savedTheme);
		document.documentElement.classList.toggle("dark", savedTheme);
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			document.documentElement.classList.toggle("dark", newMode);
			localStorage.setItem("theme", newMode ? "dark" : "light");
			return newMode;
		});
	};

	const colorMode = localStorage.getItem("theme")
	// console.log(colorMode)

	const handleExtensionsFilter = (filter: "all" | "active" | "inactive") => {
		setActiveFilter(filter);

		// Filtering Data
		switch (filter) {
			case "active":
				return setFilteredExtensions(
					extensionData.filter((extension) => extension.isActive === true),
				);
			case "inactive":
				return setFilteredExtensions(
					extensionData.filter((extension) => extension.isActive === false),
				);
			default:
				return setFilteredExtensions(extensionData);
		}
	};

	return (
		<main className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-5 pb-20 gap-16 sm:p-20 font-[faily-name:var(--font-geist-sans)] ${isDarkMode ? "bg-gradient-to-b from-[#040918] to-[#091540]" : "bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9]"}`}>
			<header className={`${isDarkMode ? "bg-neutral-800" : "bg-neutral-0"} rounded-xl p-3.5 mb-10 w-full flex items-center justify-between shadow lg:w-[52rem] xl:w-[77rem]`}>
				<Image src={"/images/logo.svg"} alt="logo" width={200} height={200} />

				{/* Theme changer button */}
				<button
					type="button"
					className="cursor-pointer"
					onClick={toggleDarkMode}
				>
					<Image
						src={isDarkMode ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
						alt={isDarkMode ? "Dark mode" : "Light mode"}
						className={`${isDarkMode ? "bg-neutral-700 hover:bg-neutral-600" : "bg-neutral-100 hover:bg-neutral-300"} p-4 rounded-xl w-[60] h-[60]`}
						width={60}
						height={60}
					/>
				</button>
			</header>

			{/* Filtro */}
			<div className="w-full text-center mb-10 lg:flex lg:justify-between lg:w-[52rem] xl:w-[77rem]">
				<h1 className={`${isDarkMode ? "text-neutral-0" : "text-neutral-900"} font-bold`}>Extensions List</h1>
				<div className="flex justify-around lg:gap-5 lg:py-3 xl:gap-5 xl:py-4">
					<FilterButton
						text="All"
						isActive={activeFilter === "all"}
						onClick={() => handleExtensionsFilter("all")}
						isDarkMode={colorMode === 'dark' ? isDarkMode === true : false}
					/>
					<FilterButton
						text="Active"
						isActive={activeFilter === "active"}
						onClick={() => handleExtensionsFilter("active")}
						isDarkMode={colorMode === 'dark' ? isDarkMode === true : false}
					/>
					<FilterButton
						text="Inactive"
						isActive={activeFilter === "inactive"}
						onClick={() => handleExtensionsFilter("inactive")}
						isDarkMode={colorMode === 'dark' ? isDarkMode === true : false}
					/>
				</div>
			</div>

			{/* Renderização dinâmica dos cards */}
			<section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:w-[77rem]">
				{filteredExtensions.map((extension) => (
					<ExtensionCard
						key={extension.id}
						name={extension.name}
						description={extension.description}
						icon={extension.logo}
						isActive={extension.isActive}
						isDarkMode={colorMode === 'dark' ? isDarkMode === true : false}
					/>
				))}
			</section>
		</main>
	);
}
