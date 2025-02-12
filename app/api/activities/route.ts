import { NextResponse } from "next/server"

export async function GET() {
  const activities = [
    { id: 1, name: "Hiking", location: "Mountain Trail" },
    { id: 2, name: "Yoga", location: "City Park" },
    { id: 3, name: "Cycling", location: "Riverside Path" },
    { id: 4, name: "Swimming", location: "Community Pool" },
  ]

  return NextResponse.json(activities)
}

