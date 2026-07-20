export function TodoTabs({ currentTab, setCurrentTab }) {
  const tabs = [1, 2, 3, 4];

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          style={{ color: currentTab === tab ? "red" : "black" }}
        >
          Todo #{tab}
        </button>
      ))}
    </div>
  );
}
