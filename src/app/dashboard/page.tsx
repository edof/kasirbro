import BottomNav from "../components/BottomNav";

export default function Dashboard() {
  return (
    <main className="min-h-screen p-4 pb-20">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid gap-4">
        {/* Placeholder content */}
        <div className="p-4 bg-gray-100 rounded-lg">
          <p>Dashboard content will be added here</p>
        </div>
      </div>
      <BottomNav />
    </main>
  );
}
