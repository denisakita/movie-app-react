import {Card} from "../components";
import {useEffect, useState} from "react";

export const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();
            setMovies(data.results)
        }

        fetchMovies();
    }, [])

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies && movies.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}

                </div>
            </section>
        </main>
    )
}
