function SearchBar({search, searchChange}) {
    
    return (
      <div className="flex justify-center h-10 w-full">
        <input
          className="h-full border border-red-500 px-4 py-2 placeholder:text-white"
          type="text"
          placeholder="Find your Agent!"
          value={search}
          onChange={searchChange}
        />
      </div>
    );
  }

  export default SearchBar;