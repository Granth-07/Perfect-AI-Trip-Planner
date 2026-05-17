const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

export async function generateTripPlan({ destination, budget, duration, preferences }) {
  const response = await fetch(`${BACKEND_URL}/api/trip-plan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ destination, budget, duration, preferences }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to generate trip plan: ${errorText}`);
  }

  return await response.json();
}
