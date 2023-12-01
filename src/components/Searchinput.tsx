import React from "react";

export interface ISearchInputProps {
    setSearchQuery:(searchQuery: string) => void;
}

export function SearchUInput(props: ISearchInputProps) {
    const {setSearchQuery} = props;
  return (
    <>
      <label htmlFor="search" className="mt-3">
        Search!
      </label>
      <input
        id="search"
        className="from-contrl full-width"
        type="search"
        placeholder="Search..."
        aria-label="Search"
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </>
  );
}
