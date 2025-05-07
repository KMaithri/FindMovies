import { useSelector } from "react-redux";
import { clearList,removeItem } from "../Utils/FavSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router";


const Favourite = () => {

    const favItems = useSelector((store) => store.fav.items);
    console.log(favItems)

    const dispatch = useDispatch();

    const handleClearList = () => {
        dispatch(clearList())
    }

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    return(
        <div className="w-6/12 mx-auto">
            <h1 className="font-bold text-2xl my-5 text-center">Favourites</h1>
            {(favItems.length == 0) ? <h1 className="font-bold text-2xl my-5 text-center">Oops! You have no favourites </h1> : ""}
            {(favItems.length == 0) ? <Link to="/" className="bg-green-600 text-white font-bold px-4 py-2 my-2 cursor-pointer mx-auto rounded-lg">Browse Movies</Link> : ""}
            {
                favItems.map((item) => 
                    <div key={item.imdbID} className="bg-gray-300 flex justify-between my-5 p-5">
                        <div>
                            <Link to={"/movie/" + item.Title}><img src={item.Poster} className="w-[100] h-[100]"></img></Link>
                            
                        </div>
                        <div>
                            <h1 className="font-bold text-xl">{item.Title}</h1>
                            <h1 className="font-bold">{item.Year}</h1>
                            <button className="bg-gray-500 text-white font-bold px-4 py-2 my-2 cursor-pointer rounded-lg" onClick={()=>{handleRemoveItem(item.imdbID)}}>Remove</button>
                        </div>
                    </div>
                )
            }
            {(favItems.length > 0) && <button className="bg-red-600 text-white font-bold px-4 py-2 my-2 cursor-pointer rounded-lg" onClick={handleClearList}>Clear</button>}
        </div>
    )
}

export default Favourite;