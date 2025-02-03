import {useSearchParams} from "react-router-dom";
import {FC, memo} from "react";

type Props = {
    skip: number,
    total: number,
}

export const Pagination: FC<Props> = memo(({skip, total}) => {
    const [query, setQuery] = useSearchParams({limit: '5', skip: '0'});

    const amountHandler = (delta:number) => {
        const skip:number = Number(query.get('skip'))
        setQuery({skip: (skip + delta).toString()})
    }

    return (
        <div className={'flex justify-center gap-4 mt-6'}>
            <button className={'border border-black p-2 px-4 hover:bg-white hover:bg-opacity-50'} onClick={() => amountHandler(-5)} disabled={skip === 0}>Previous Page</button>
            <button className={'border border-black p-2 px-4 hover:bg-white hover:bg-opacity-50'} onClick={() => amountHandler(5)} disabled={skip > total - 5}>Next Page</button>
        </div>
    );
})