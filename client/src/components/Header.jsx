import { Link } from "react-router-dom";

function Header()
{
    return(
        <div className="bg-slate-200">
            <div className="flex justify-between items-center max-w-6xl mx-auto p-6">
                <Link to='/'><h1 className="font-bold text-2xl">Reflect</h1></Link>
                <ul className="flex gap-4">
                    <Link to='/'><li className="text-2xl">Home</li></Link>
                    <Link to='/about'><li className="text-2xl">About</li></Link>
                    <Link to='/sign-in'><li className="text-2xl">Sign-In</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Header;