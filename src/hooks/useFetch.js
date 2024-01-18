import {useEffect, useState} from "react";

export const useFetch = (baseUrl, queryTerm = "") => {

    const [data, setData] = useState([]);
    const url = `https://swapi.dev/api/films/?&query=${queryTerm}`

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results)
        }

        fetchMovies();
    }, [url])


    return {data}
}
