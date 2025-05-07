import { useDispatch } from "react-redux"
import { addItem,removeItem } from "../Utils/FavSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const MovieCard = ({data}) => {
    // console.log(data)
    const dispatch = useDispatch();
    const handleAddItem = (data) => {
        dispatch(addItem(data))
    }

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    const favItems = useSelector((store) => store.fav.items)

    const check = favItems.filter((item) => item.imdbID === data.imdbID)
    
    return (
        <div className=" m-4 p-4 h-[380] w-[250] bg-gray-200" >
            {data.Poster && <Link to={"/movie/" + data.Title}><img src = {data.Poster} className="w-[250] h-[200] rounded-lg"/></Link>}
            <h1 className="my-4 font-bold">{data.Title}</h1>
            <h2 className="my-1">{data.Year}</h2>
            {(check == false)? <button className="bg-black text-white font-bold px-4 py-2 rounded-full cursor-pointer my-2" onClick={() => {handleAddItem(data)}}>➕</button> : <button className="bg-black text-white font-bold px-4 py-2 rounded-full cursor-pointer my-2" onClick={() => {handleRemoveItem(data.imdbID)}}>✔️</button>}
            {/* <button className="bg-black text-white font-bold cursor-pointer px-4 py-2 mx-4 rounded-lg">View</button> */}
        </div>
    )
}

export default MovieCard;