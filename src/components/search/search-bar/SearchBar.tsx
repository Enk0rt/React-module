import {useFindItems} from "../utils/utils.ts";

export const SearchBar = ({type}: { type: "users" | "recipes" }) => {
    const {handleChangeSearchValue, searchValue} = useFindItems(type);

    return (
        <div>
            <label className="flex items-center">
                <div className="relative">
                    <input
                        className="rounded-xl pl-11 pr-4 py-1 text-black outline-none w w-full"
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => handleChangeSearchValue(e.target.value)}
                    />
                    <img
                        className="size-5 absolute left-3 top-1.5"
                        src="../../../../public/search.png"
                        alt="Search icon"
                    />
                </div>
            </label>
        </div>
    );
};

export default SearchBar;