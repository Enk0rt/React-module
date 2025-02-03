import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {Link} from "react-router-dom";
import './SearchResults.scss'

export const SearchResults = ({ type }: { type: "users" | "recipes" }) => {
    const { searchResults } = useAppSelector(({ searchSlice }) => searchSlice);

    return (
        <div className={'search__wrapper'}>
            <div className="search-results">
                {searchResults.length > 0 ? (
                    searchResults.map((res, index) => (
                        <div key={index} className="search-results__item">
                            {type === "users" ? (
                                <Link to={'/users/' + res.id}>
                                    <h2>ID: {res.id} | {res.firstName} {res.lastName}</h2>
                                </Link>
                            ) : (
                                <Link to={'/recipe/' + res.id}>
                                    <h2>ID: {res.id} | {res.name}</h2>
                                </Link>
                            )}
                        </div>
                    ))
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default SearchResults;