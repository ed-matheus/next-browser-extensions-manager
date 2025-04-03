"use client";

import { useState } from "react";

import Image from "next/image";

type ExtensionCardProps = {
	name: string;
	description: string;
	icon: string;
	isActive: boolean;
	isDarkMode: boolean;
};

const ExtensionCard: React.FC<ExtensionCardProps> = ({
	name,
	description,
	icon,
	isActive,
	isDarkMode,
}) => {
	const [isOn, setIsOn] = useState(true);

	// console.log(`${name} | ${description} | ${icon} | ${isActive}`);

	return (
		<div className={`p-5 ${isDarkMode ? 'bg-neutral-800' : 'bg-neutral-0'} shadow rounded-2xl w-full`}>
			<div className="flex items-start">
				<Image src={icon} alt="extension logo" width={80} height={80} />

				<div className="ms-3.5">
					<h2 className={`font-bold text-2xl mb-2 ${isDarkMode ? 'text-neutral-0' : ''}`}>{name}</h2>
					<span className={`${isDarkMode ? 'text-neutral-300' : 'text-neutral-500'}`}>{description}</span>
				</div>
			</div>

			<div className="mt-6 flex justify-between items-center">
				<button
					type="button"
					className={`rounded-3xl border border-neutral-300 ${isDarkMode ? 'text-neutral-0 hover:bg-red-500 hover:border-neutral-700 hover:text-neutral-900' : 'hover:bg-red-700 hover:text-neutral-0'} p-2 px-4 cursor-pointer`}
				>
					Remove
				</button>

				<label className="inline-flex items-center cursor-pointer">
					<input
						type="checkbox"
						className="sr-only peer"
						checked={isActive ? isOn : !isOn}
						onChange={() => setIsOn(!isOn)}
					/>
					<div className={`relative w-11 h-6 ${isDarkMode ? 'bg-neutral-600' : 'bg-gray-300'} peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-0 after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all ${isDarkMode ? 'peer-checked:bg-red-400 hover:bg-red-500' : 'peer-checked:bg-red-700 hover:bg-red-500'}`} />
				</label>
			</div>
		</div>
	);
};

export default ExtensionCard;
