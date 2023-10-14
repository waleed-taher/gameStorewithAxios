interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortOrder = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date Added" },
  { value: "-name", label: "Name" },
  { value: "-released", label: "Date Released" },
  { value: "-metacritic", label: "Popularity" },
];

const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const currSorting = SortOrder.find((order) => order.value === selectedOrder);
  return (
    <>
      <details className="dropdown">
        <summary className="m-1 btn">
          Order By: {currSorting?.label || "relevance"}{" "}
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {SortOrder.map((menuItem) => (
            <button
              onClick={() => onSelectSortOrder(menuItem.value)}
              key={menuItem.value}
              className="flex flex-col"
            >
              {menuItem.label}
            </button>
          ))}
        </ul>
      </details>
    </>
  );
};

export default SortSelector;
