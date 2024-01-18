import {Route, Routes} from "react-router-dom";
import {MovieDetail, MovieList, PageNotFound, Search} from "../pages";

export const AllRoutes = () => {
    return (
        <div className="dark:bg-darkbg">
            <Routes>
                <Route path="" element={<MovieList/>}/>

                <Route path="movie/:episode_id" element={<MovieDetail/>}/>

                <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>}/>
                <Route path="movies/top" element={<MovieList apiPath="movie/top"/>}/>
                <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>

                <Route path="search" element={<Search/>}/>

                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </div>
    )
}
