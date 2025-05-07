import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { RouterProvider,Outlet, createBrowserRouter } from "react-router";
import Header from "./components/Header";
import Favourite from "./components/Favourite";
import MovieInfo from "./components/MovieInfo";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";


const AppLayout = () => {
    return(
        <Provider store={appStore}>
            <div>
                <Header/>
                <Outlet/>

            </div>
        </Provider>
    )
}



const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children : [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/favourites",
                element: <Favourite/>
            },
            {
                path: "/movie/:title",
                element: <MovieInfo/>
            }
        ],
        
    },
]   
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
