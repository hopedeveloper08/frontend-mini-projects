import toast from "react-hot-toast";

type SearchProps = {
  city: string;
  onCityChange: (city: string) => void;
  onSearch: () => Promise<void>;
};

function Search({ city, onCityChange, onSearch }: SearchProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast.promise(onSearch(), {
          loading: "در حال دریافت اطلاعات . . .",
          success: <b>اطلاعات با موفقیت دریافت شد!</b>,
          error: <b>اطلاعات دمای شهر {city} یافت نشد!</b>,
        });
      }}
      className="flex gap-2 mb-8"
    >
      <input
        type="text"
        className="
          flex-1
          h-12
          rounded-xl
          border border-white/20
          shadow-sm
          bg-white/20
          px-4
          text-sm md:text-base
          text-zinc-900
          placeholder:text-zinc-700
          outline-none
          focus:border-white/50
          focus:bg-white/25
          transition
        "
        placeholder="نام شهر را جستجو کنید..."
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
      />

      <button
        type="submit"
        className="
          btn
          text-sm md:text-base
          h-12
          px-5
          rounded-xl
          transition
          cursor-pointer
          font-medium
        "
      >
        جستجو
      </button>
    </form>
  );
}

export default Search;
