import React, { useEffect, useState } from "react";
import { fetchDishes, toggleDish } from "./api";
import { socket } from "./socket";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import DishCard from "./components/DishCard";
import "./index.css";

export default function App() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("az");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    loadDishes();

    socket.on("dishUpdated", ({ dishId, isPublished }) => {
      
       setDishes((prev) =>
        prev.map((d) => (d.dishId === dishId ? { ...d, isPublished } : d))
      );
    });

    return () => socket.off("dishUpdated");
  }, []);

 
 
  async function loadDishes() {
     const data = await fetchDishes();
    setDishes(data);
  }

  
  
  async function handleToggle(id) {
    await toggleDish(id);
  }

  
  const filtered = dishes
    .filter((d) => d.dishName.toLowerCase().includes(search.toLowerCase()))
    .filter((d) =>
      filter === "published"
        ? d.isPublished
        : filter === "unpublished"
        ? !d.isPublished
        : true
    )
    
    
    .sort((a, b) =>
      sort === "az"
        ? a.dishName.localeCompare(b.dishName)
        : b.dishName.localeCompare(a.dishName)
    );

  return (
    
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(!darkMode)} />

      <Filters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <div className="grid">
           {filtered.map((dish) => (
          
          <DishCard key={dish.dishId} dish={dish} onToggle={handleToggle} />
        ))}
      </div>
    </div>
  );
}
