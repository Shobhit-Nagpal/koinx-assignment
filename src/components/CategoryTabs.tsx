type TabProps = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

function Tab({ name, isActive, onClick }: TabProps) {
  return (
    <button
      className={`px-4 py-2 font-semibold text-sm sm:text-lg focus:outline-none ${
        isActive ? "border-b-2 border-blue-600 text-blue-700" : "text-gray-600"
      } whitespace-nowrap`} // Prevent text from wrapping
      onClick={onClick}
    >
      {name}
    </button>
  );
}

type CategoryTabsProps = {
  categories: string[];
  activeTab: string;
  onTabClick: (category: string) => void;
};

export default function CategoryTabs({
  categories,
  activeTab,
  onTabClick,
}: CategoryTabsProps) {
  return (
    <div className="border-b border-gray-300 overflow-x-auto no-scrollbar"> {/* Make the container scrollable horizontally */}
      <div className="flex gap-5 whitespace-nowrap"> {/* Prevent wrapping and allow scrolling */}
        {categories.map((category) => (
          <Tab
            key={category}
            name={category}
            isActive={activeTab === category}
            onClick={() => onTabClick(category)}
          />
        ))}
      </div>
    </div>
  );
}
