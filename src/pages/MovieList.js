import {Card} from "../components";
import {useFetch} from "../hooks/useFetch";

export const MovieList = () => {

    const {data: movies} = useFetch("https://swapi.dev/api/films/");


    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-center flex-wrap other:justify-evenly">
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie}/>
                    ))}
                </div>
            </section>
        </main>
    )
}
