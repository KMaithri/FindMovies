import { Link } from "react-router";
import { useSelector } from "react-redux";
import appStore from "../Utils/appStore";

const Header = () => {
    // subscribing to the store using selector to read the data from the store
    const favItems = useSelector((store) => store.fav.items);

    return (
        <div className=" flex justify-between m-6 bg-black text-white font-bold p-5">
            <div>
                <h1>FM</h1>
            </div>
            <div >
                <ul className="flex justify-between">
                    <li className="mx-3"><Link to="/">Home</Link></li>
                    <li className="mx-3"><Link to="/favourites">Favourites ({favItems.length})</Link></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Header;