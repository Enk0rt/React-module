import {useSearchParams} from "react-router-dom";
import {FC, memo} from "react";
import './Pagination.scss'

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
        skip >= total-5 ? (
            <div className={'pagination'}>
                <button className={'pagination__button'} onClick={() => amountHandler(-5)}
                        disabled={skip === 0}>Previous Page
                </button>
            </div>
            ): (
            <div className={'pagination'}>
                <button className={'pagination__button'} onClick={() => amountHandler(-5)} disabled={skip === 0}>Previous Page</button>
                <button className={'pagination__button'} onClick={() => amountHandler(5)} disabled={skip > total - 5}>Next Page</button>
            </div>
        )
    );
})