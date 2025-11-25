import React from "react";

export default function DishCard({ dish, onToggle }) {
  return (
    <div className="dish-card">
      <img className="dish-image" src={dish.imageUrl} alt={dish.dishName} />

      <div className="dish-body">
        <h3>{dish.dishName}</h3>

        <p>
          Published:{" "}
          <b style={{ color: dish.isPublished ? "green" : "red" }}>
            {dish.isPublished ? "Yes" : "No"}
          </b>
        </p>

        <button
          className={dish.isPublished ? "btn-unpublish" : "btn-publish"}
          onClick={() => onToggle(dish.dishId)}
        >
          {dish.isPublished ? "Unpublish" : "Publish"}
        </button>
      </div>
    </div>
  );
}
