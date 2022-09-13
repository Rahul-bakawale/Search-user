import React, { useState }  from "react";

const search = (props) => {
  // const [search, setSearch] = useState(""); // it's call lifting state
  const { search, onChangeSearch } = props;
  const onSearchChange = (event) =>{
    debugger
    const value = (event.target.value);
    onChangeSearch(value);
    event.target.reset();
    console.log(value)
  };

  return(
    <>
      <div className='search-bar'>
        <input type="text"
          placeholder=" Search Your Name Here..."
          name="search"
          value={search}
          onChange={onSearchChange}
        />
      </div>
    </>
  );
};

export default search;