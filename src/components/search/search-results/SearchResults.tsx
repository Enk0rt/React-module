import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {Link} from "react-router-dom";


export const SearchResults = ({ type }: { type: "users" | "recipes" }) => {
    const { searchResults } = useAppSelector(({ searchSlice }) => searchSlice);

    return (
        <div className="bg-white text-black mt-2 rounded-xl px-3 w-96 max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
                searchResults.map((res, index) => (
                    <div key={index} className="p-2 hover:bg-gray-100">
                        {type === "users" ? (
                            <Link to={'/users/'+ res.id}>
                                ID: {res.id} | {res.firstName} {res.lastName}
                            </Link>
                        ) : (
                            <Link to={'/recipe/'+res.id}>
                                ID: {res.id} | {res.name}
                            </Link>
                        )}
                    </div>
                ))
            ) : (
                <></>
            )}
        </div>
    );
};

export default SearchResults;