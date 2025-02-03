import {useFindItems} from "../utils/utils.ts";
import './SearchBar.scss'

export const SearchBar = ({type}: { type: "users" | "recipes" }) => {
    const {handleChangeSearchValue, searchValue} = useFindItems(type);

    return (
        <div>
            <label className="search-bar__wrapper">
                <div className="search-bar__container">
                    <input
                        className="search-bar__input"
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => handleChangeSearchValue(e.target.value)}
                    />
                    <img
                        className="search-bar__image"
                        src="../../../../public/search.png"
                        alt="Search icon"
                    />
                </div>
            </label>
        </div>
    );
};

export default SearchBar;