"use client"

import { useState, useEffect } from "react"

interface Activity {
  id: number
  name: string
  location: string
}

export default function ActivityPlanner() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivities, setSelectedActivities] = useState<number[]>([])

  useEffect(() => {
    fetch("/api/activities")
      .then((res) => res.json())
      .then((data) => setActivities(data))
  }, [])

  const toggleActivity = (id: number) => {
    setSelectedActivities((prev) => (prev.includes(id) ? prev.filter((actId) => actId !== id) : [...prev, id]))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Activity Planner</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedActivities.includes(activity.id)}
                onChange={() => toggleActivity(activity.id)}
                className="form-checkbox"
              />
              <span>
                {activity.name} - {activity.location}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

