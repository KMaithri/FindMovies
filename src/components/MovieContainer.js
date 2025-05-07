import { useCallback, useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router";
import debounce from "lodash.debounce";

const MovieContainer = () => {

    let [movies,setMovies] = useState([]);
    const[search,setSearch] = useState("");

    const fetchMovies = async (query) => {
        if(!query) return;
        const data = await fetch(`https://www.omdbapi.com/?apikey=4bc379e1&s=${query}`);
        const json = await data.json();
        // console.log(`APi called ${query}`)
        setMovies(json.Search)
    }

    const debouncedFetchMovies = useCallback(
        debounce((query) => {
            fetchMovies(query);
        },500),
        []
    );

    const handleInputChange = (event) =>{
        const value = event.target.value;
        setSearch(value);
        debouncedFetchMovies(value);
    }


    // useEffect(() => {
    //     fetchMovies(search);
    // },[search]);

    

    return(
        <div>
            <div>
                <input className="border-black border-2 px-4 w-[600]" type="text" placeholder="Search..." onChange={handleInputChange}></input>
                {/* <button className="mx-4 px-4 py-0.5 bg-black text-white font-bold rounded-lg cursor-pointer" onClick={() => {setSearch("")}}>Clear</button> */}
            </div>
            {/* {search == "" ? <h1 className="m-4 text-xl font-bold">Start Searching</h1> : ""} */}

            {movies && 
            <div  className="flex flex-wrap">

            {
                movies.map((movie) => (
                    
                        // <Link key={movie.imdbID} to={"/movie/" + movie.Title}>< MovieCard data = {movie}/></Link>
                        < MovieCard data = {movie} key={movie.imdbID}/>
                   
                    
                ))
            }
            
            
            </div>}
            
        </div>
        
    )
}

export default MovieContainer;