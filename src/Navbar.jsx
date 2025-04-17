import SearchBar from "./SearchBar";

function Navbar({search, searchChange, modalOn}) {
    
    return (
        <nav >
            <ul className="flex justify-between items-center  px-8 text-stone-100 bg-black fixed top-0 right-0 left-0 z-50">
                <li>
                    <SearchBar search={search} searchChange={searchChange}></SearchBar>
                </li>
                <li>
                    <img className="h-[6rem]" src="./src/assets/logo.png" alt="logo-valorant" />
                </li>
                <li>
                <button onClick={modalOn} className="bg-red-500 hover:bg-gray-900 transition text-white px-4 py-2 rounded">My Team</button>
                
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;