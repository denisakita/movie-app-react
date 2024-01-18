import {Card} from "../components";
import {useFetch} from "../hooks/useFetch";

export const MovieList = (baseUrl) => {

    const {data: movies} = useFetch(baseUrl);


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
