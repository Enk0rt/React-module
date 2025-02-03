import SearchBar from "./search-bar/SearchBar.tsx";
import SearchResults from "./search-results/SearchResults.tsx";
import './Search.scss'
export const Search = ({ type }: { type: "users" | "recipes" }) => {
    return (
        <div className="search">
            <SearchBar type={type} />
            <SearchResults type={type} />
        </div>
    );
};