import {Card} from "../components";
import {useFetch} from "../hooks/useFetch";
import {useTitle} from "../hooks/useTitle";

export const MovieList = (baseUrl, title) => {

    const {data: movies} = useFetch(baseUrl);
    const pageTitle = useTitle(title);


    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-center flex-wrap other:justify-evenly">
                    {movies.map((movie) => (
                        <Card key={movie.episode_id} movie={movie}/>
                    ))}
                </div>
            </section>
        </main>
    )
}
