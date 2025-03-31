"use client";

import { useState } from "react";

import Image from "next/image";

type ExtensionCardProps = {
	name: string;
	description: string;
	icon: string;
	isActive: boolean;
};

const ExtensionCard: React.FC<ExtensionCardProps> = ({ name, description, icon, isActive }) => {
	const [isOn, setIsOn] = useState(true);

	// console.log(`${name} | ${description} | ${icon} | ${isActive}`);

	return (
		<div className="p-5 bg-neutral-0 shadow rounded-2xl w-full mb-4">
			<div className="flex items-start">
				<Image
					src={icon}
					alt="extension logo"
					width={80}
					height={80}
				/>

				<div className="ms-3.5">
					<h2 className="font-bold text-2xl mb-2">{name}</h2>
					<span className="text-neutral-500">
						{description}
					</span>
				</div>
			</div>

			<div className="mt-6 flex justify-between items-center">
				<button
					type="button"
					className="rounded-3xl border border-neutral-300 p-2 px-4"
				>
					Remove
				</button>

				<label className="cursor-pointer">
					<input
						type="checkbox"
						className="sr-only peer"
						checked={isActive ? isOn : !isOn}
						onChange={() => setIsOn(!isOn)}
					/>
					<div className="w-11 h-6 bg-gray-300 peer-checked:bg-red-700 rounded-full relative transition">
						<div
							className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${isOn ? "translate-x-5" : ""}`}
						/>
					</div>
				</label>
			</div>
		</div>
	);
};

export default ExtensionCard;
