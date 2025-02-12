import ActivityPlanner from "../components/ActivityPlanner"
import MealPlanner from "../components/MealPlanner"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Weekend Wellness Planner</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <ActivityPlanner />
        <MealPlanner />
      </div>
    </main>
  )
}

