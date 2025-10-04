"use client";

import { Navbar } from "@/components/navigation/navbar";
import { useState } from "react";
import { Sparkles, Users, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const [matches, setMatches] = useState([
    { id: 1, name: "Alex Chen", compatibility: 92, interests: ["AI", "Blockchain", "Design"] },
    { id: 2, name: "Sarah Johnson", compatibility: 88, interests: ["Web3", "NFTs", "Art"] },
    { id: 3, name: "Michael Park", compatibility: 85, interests: ["DeFi", "Smart Contracts"] },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-indigo-400" />
            <h1 className="text-4xl font-bold text-white">AI Dashboard</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Users className="w-8 h-8 text-indigo-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">127</div>
              <div className="text-white/60">Total Connections</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-rose-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">94%</div>
              <div className="text-white/60">Match Success Rate</div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <Sparkles className="w-8 h-8 text-violet-400 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">12</div>
              <div className="text-white/60">Active Projects</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">AI-Recommended Matches</h2>
            
            <div className="space-y-4">
              {matches.map((match) => (
                <div
                  key={match.id}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{match.name}</h3>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-indigo-400">{match.compatibility}%</div>
                      <div className="text-white/60 text-sm">match</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 flex-wrap">
                    {match.interests.map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                  
                  <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
