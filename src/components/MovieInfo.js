import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utils/FavSlice";
import { useSelector } from "react-redux";

const MovieInfo = () => {
    const {title} = useParams();
    // console.log(title)
    const [info, setInfo] = useState([])
    
    const dispatch = useDispatch();
    const handleAddItem = (info) => {
        dispatch(addItem(info))
    }

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    const fetchInfo = async() => {
        const data = await fetch("https://omdbapi.com/?apikey=4bc379e1&t=" + title)
        const json = await data.json();
        console.log(json)
        setInfo(json)
    }

    useEffect(() => {
        fetchInfo();
    },[])

    const favItems = useSelector((store) => store.fav.items)

    const check = favItems.filter((item) => item.imdbID === info.imdbID)

    return(
        <div className="w-9/12 my-10 bg-gray-300 p-10 mx-auto">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-2xl">{info.Title}</h1>
                    <p className="font-bold">{info.Released}</p>
                    {info.Runtime && <p className="font-bold">{info.Runtime}</p> }
                </div>
                <div>
                    <p className="font-bold">{info.imdbRating}</p>
                </div>

            </div>
            
            {info.Poster && <img src={info.Poster} className="rounded-lg my-10 h-auto w-auto mx-auto shadow-2xl"></img>}
            {info.Plot && <p className="border-b border-black py-4">{info.Plot}</p>}
            {info.Type && <h3 className="border-b border-black py-4"><strong>Type: </strong> {info.Type}</h3>}
            {info.Actors && <h3 className="border-b border-black py-4"><strong>Actors:</strong> {info.Actors}</h3>}
            {info.Writer && <h3 className="border-b border-black py-4"><strong>Writer:</strong> {info.Writer}</h3>}
            {info.Director && <h3 className="border-b border-black py-4"><strong>Director:</strong> {info.Director}</h3>}
            {info.totalSeasons && <h3 className="border-b border-black py-4"><strong>Seasons:</strong> {info.totalSeasons}</h3>}
            {info.Genre && <h3 className="border-b border-black py-4"><strong>Genre:</strong> {info.Genre}</h3>}
            {info.Language && <h3 className="py-4"><strong>Language:</strong> {info.Language}</h3>}
            {((check == false) && (info.Title)) ? <button className="bg-black text-white font-bold px-4 py-2 rounded-full cursor-pointer" onClick={() => {handleAddItem(info)}}>➕</button> : <button className="bg-black text-white font-bold px-4 py-2 rounded-full cursor-pointer" onClick={() => {handleRemoveItem(info.imdbID)}}>✔️</button>}
            {/* {(info.Title) && <button className="my-4 bg-black text-white font-bold p-3 cursor-pointer" onClick={() => {handleAddItem(info)}}>Add to Favourites</button>} */}
        </div>
    )

}

export default MovieInfo;