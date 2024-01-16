import {Link} from "react-router-dom";

export const Card = ({movie}) => {
    const {episode_id, director, producer, title} = movie;
    const movieData = [
        {
            id: 1,
            Poster: "https://m.media-amazon.com/images/M/MV5BZWI3ZThmYzUtNDJhOC00ZWY4LThiNmMtZDgxNjE3Yzk4NDU1XkEyXkFqcGdeQXVyNTk5Nzg1NjQ@._V1_SX300.jpg",
        },
        {
            id: 2,
            Poster: "https://m.media-amazon.com/images/M/MV5BMGYyZTk5MjYtNGY2ZS00NzRhLTgwMWMtZjhmMmQ4OGFkNTNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        },
        {
            id: 3,
            Poster: "https://m.media-amazon.com/images/M/MV5BMTU0NDE5NTU0OV5BMl5BanBnXkFtZTcwMzI1OTMzOQ@@._V1_SX300.jpg",
        },
        {
            id: 4,
            Poster: "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
        },
        {
            id: 5,
            Poster: "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
        },
        {
            id: 6,
            Poster: "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
        },
    ];

    const images = movieData.find((m) => m.id === episode_id)?.Poster;


    return (

        <div
            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
            <Link to={`/movie/${episode_id}`}>
                {images && <img className="rounded-t-lg" src={images} alt={`${title}`}/>}
            </Link>
            <div className="p-5">
                <Link to={`/movie/${episode_id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Director : {director} </p>


            </div>
        </div>

    )
}
