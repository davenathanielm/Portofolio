import { Outlet } from "react-router-dom";

export default function HomeRoot(){
    return(
        <div className="w-full min-h-screen overflow-x-hidden">
            <Outlet/>
        </div>
    );
}