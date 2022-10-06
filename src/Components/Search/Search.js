import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = () => {
  return (
    <AsyncPaginate
      placeholder="Search For City"
      debounceTimeout={600}
      value={Search}
    />
  );
};

export default Search;
