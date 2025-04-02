type FilterButtonProps = {
	text: string;
  onClick: () => void;
	isActive: boolean;
	isDarkMode: boolean;
};

const FilterButton: React.FC<FilterButtonProps> = ({ text, onClick, isActive, isDarkMode }) => {
	return (
		<button
			type="button"
      onClick={onClick}
			className={`bg-neutral-0 rounded-3xl py-3 px-6 shadow hover:cursor-pointer hover:bg-red-700 hover:text-neutral-0 ${isDarkMode && isActive ? 'bg-red-400 text-neutral-900' : isActive ? 'bg-red-700 text-neutral-0' : 'bg-neutral-0' } ${isDarkMode ? 'bg-neutral-700' : ''}`}
		>
			<span className={`text-[1.2rem] ${isDarkMode ? 'text-neutral-0' : ''}`}>{text}</span>
		</button>
	);
};

export default FilterButton;
