import SearchBar from "./search-bar/SearchBar.tsx";
import SearchResults from "./search-results/SearchResults.tsx";

export const Search = ({ type }: { type: "users" | "recipes" }) => {
    return (
        <div className="w-96">
            <SearchBar type={type} />
            <SearchResults type={type} />
        </div>
    );
};