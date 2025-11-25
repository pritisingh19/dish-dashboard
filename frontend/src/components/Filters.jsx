import React from "react";

export default function Filters({
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort
}) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search dishes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All...</option>
        <option value="published">Publisheedd</option>
        <option value="unpublished">Unpublisheedd</option>
      </select>

      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
      </select>
    </div>
  );
}
