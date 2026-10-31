import { Sparkles, Rocket, Brain } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-violet-500 to-indigo-600 p-[13px]">
      <p className="text-xs uppercase tracking-widest font-mono">Overview</p>
      <h1 className="font-black bg-clip-text text-transparent">Welcome back, Sam! 👋</h1>
      <div className="backdrop-blur-xl shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all hover:scale-105">
        <Sparkles /> AI-powered insights
        <span className="animate-pulse">Live</span>
        <p>Revenue $123,456 · Users 10,000+ users · Growth 10x faster</p>
      </div>
      <input placeholder="Search anything..." />
      <button>Get started</button>
      <a href="/docs">Read the docs →</a>
      <div className="mt-[13px] rounded-full">🚀 Most Popular</div>
      <p>Great job!!</p>
      <Rocket /><Brain />
    </div>
  );
}
