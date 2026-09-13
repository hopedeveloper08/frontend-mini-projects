type FilterTaskProps = {
  onImportantFilter: (checked: boolean) => void;
  onUrgentFilter: (checked: boolean) => void;
};
function FilterTask({ onImportantFilter, onUrgentFilter }: FilterTaskProps) {
  return (
    <form className="filter">
      <input className="btn" onChange={e => onUrgentFilter(e.target.checked)} type="checkbox" name="filter" aria-label="فوری" />
      <input className="btn" onChange={e => onImportantFilter(e.target.checked)} type="checkbox" name="filter" aria-label="مهم" />
      <input className="btn btn-square" onClick={() => {
        onImportantFilter(false)
        onUrgentFilter(false)
      }} type="reset" value="×" />
    </form>
  );
}

export default FilterTask;
