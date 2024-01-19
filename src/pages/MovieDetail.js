import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useTitle} from "../hooks/useTitle";


export const MovieDetail = () => {
    const params = useParams();
    const [movie, setMovie] = useState({});
    useTitle(movie.title);


    useEffect(() => {
            async function fetchMovie() {
                const response = await fetch(`https://swapi.dev/api/films/${params.episode_id}`);
                const json = await response.json();
                setMovie(json);
                console.log(json)
            }

            fetchMovie();
        }, [params.episode_id]
    )

    return (
        <main>
            <section className="flex justify-around flex-wrap py-5">
                <div className="max-w-sm">
                    <p className="ml-2 text-gray-900 dark:text-white">{movie.opening_crawl}</p>
                </div>
                <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
                    <h1 className="text-4xl font-bold my-3 text-center lg:text-left">{movie.title}</h1>


                    <p className="my-4">
                        <span className="mr-2 font-bold">Producer:</span>
                        <span>{movie.producer}</span>
                    </p>

                    <p className="my-4">
                        <span className="mr-2 font-bold">Director:</span>
                        <span>{movie.director}</span>
                    </p>


                    <p className="my-4">
                        <span className="mr-2 font-bold">Release Date:</span>
                        <span>{movie.release_date}</span>
                    </p>


                </div>
            </section>
        </main>
    )
}
