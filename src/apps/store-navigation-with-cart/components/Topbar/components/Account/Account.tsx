import AccountButton from "./AccountButton";
import AccountDropdown from "./AccountDropdown";

export default function Account() {
  const isLogin = true;
  return (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
      <AccountButton isLogin={isLogin} username="رضا شهرکی" />
      {isLogin && <AccountDropdown />}
    </div>
  );
}
