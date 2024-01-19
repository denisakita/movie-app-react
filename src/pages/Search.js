import React from "react";
import {useFetch} from "../hooks/useFetch";
import {Card} from "../components";
import {useSearchParams} from "react-router-dom";
import {useTitle} from "../hooks/useTitle";

export const Search = ({baseUrl}) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");

    const {data: movies} = useFetch(baseUrl, queryTerm);

    useTitle(`Search result for ${queryTerm}`);

    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-700 dark:text-white">
                    {movies && movies.length === 0 ? (
                        `No results found for '${queryTerm}'`
                    ) : (
                        `Results for '${queryTerm}'`
                    )}
                </p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies &&
                        movies.map((movie) => (
                            <Card key={movie.id} movie={movie}/>
                        ))}
                </div>
            </section>
        </main>
    );
};
