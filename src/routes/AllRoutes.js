import {Route, Routes} from "react-router-dom";
import {MovieDetail, MovieList, PageNotFound, Search} from "../pages";

export const AllRoutes = () => {
    return (
        <div className="dark:bg-darkbg">
            <Routes>
                <Route path="" element={<MovieList title="Popular Movies"/>}/>

                <Route path="movie/:episode_id" element={<MovieDetail title="Movie Detail"/>}/>

                <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Movie Popular"/>}/>
                <Route path="movies/top" element={<MovieList apiPath="movie/top" title="Movie Top"/>}/>
                <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Movie Upcoming"/>}/>

                <Route path="search" element={<Search title="Search"/>}/>

                <Route path="*" element={<PageNotFound title="Page Not Found"/>}/>
            </Routes>
        </div>
    )
}
