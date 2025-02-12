"use client"

import { useState, useEffect } from "react"

interface Meal {
  id: number
  name: string
  type: string
}

export default function MealPlanner() {
  const [meals, setMeals] = useState<Meal[]>([])
  const [selectedMeals, setSelectedMeals] = useState<number[]>([])

  useEffect(() => {
    fetch("/api/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data))
  }, [])

  const toggleMeal = (id: number) => {
    setSelectedMeals((prev) => (prev.includes(id) ? prev.filter((mealId) => mealId !== id) : [...prev, id]))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Meal Planner</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id} className="mb-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedMeals.includes(meal.id)}
                onChange={() => toggleMeal(meal.id)}
                className="form-checkbox"
              />
              <span>
                {meal.name} - {meal.type}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

