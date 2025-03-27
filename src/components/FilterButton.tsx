type FilterButtonProps = {
	text: string;
  onClick: () => void;
	isActive: boolean;
};

const FilterButton: React.FC<FilterButtonProps> = ({ text, onClick, isActive }) => {
	return (
		<button
			type="button"
      onClick={onClick}
			className={`bg-neutral-0 rounded-3xl py-3 px-6 shadow hover:cursor-pointer ${isActive ? 'bg-red-700 text-neutral-0' : 'bg-neutral-0 text-neutral-900'}`}
		>
			<span className="text-[1.2rem]">{text}</span>
		</button>
	);
};

export default FilterButton;
