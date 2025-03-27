import Image from "next/image";
import data from "@/data.json";

// Components
import ExtensionCard from "../components/ExtensionCard";

export default function Home() {
	// Resgatando dados do arquivo JSON local (data.json)
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

			<div className="w-full text-center mb-10">
				<h1 className="font-bold text-neutral-900">Extensions List</h1>
				<div className="flex justify-around">
					<button
						type="button"
						className="bg-neutral-0 rounded-3xl py-4 px-6 shadow"
					>
						All
					</button>
					<button
						type="button"
						className="bg-neutral-0 rounded-3xl py-4 px-6 shadow"
					>
						Active
					</button>
					<button
						type="button"
						className="bg-neutral-0 rounded-3xl py-4 px-6 shadow"
					>
						Inactive
					</button>
				</div>
			</div>

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
