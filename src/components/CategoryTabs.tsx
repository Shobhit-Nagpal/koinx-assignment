type TabProps = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

function Tab({ name, isActive, onClick }: TabProps) {
  return (
    <button
      className={`px-4 py-2 font-semibold text-xl focus:outline-none ${
        isActive ? "border-b-2 border-blue-600 text-blue-700" : "text-gray-600"
      }`}
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
    <div className="border-b border-gray-300">
      <div className="flex flex-wrap -mb-px gap-5">
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
