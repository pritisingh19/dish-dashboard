export const API_BASE = import.meta.env.VITE_API_BASE;

export async function fetchDishes() {
  const res = await fetch(`${API_BASE}/api/dishes`);
  return res.json();
}

export async function toggleDish(dishId) {
  const res = await fetch(`${API_BASE}/api/dishes/${dishId}/toggle`, {
    method: "PATCH"
  });
  return res.json();
}
