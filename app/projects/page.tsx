"use client";

import { Navbar } from "@/components/navigation/navbar";
import { useState } from "react";
import { FolderKanban, Plus, Calendar, Users } from "lucide-react";

export default function Projects() {
  const [projects] = useState([
    {
      id: 1,
      name: "DeFi Protocol Launch",
      status: "In Progress",
      members: 5,
      deadline: "2024-02-15",
      progress: 65,
    },
    {
      id: 2,
      name: "NFT Marketplace",
      status: "Planning",
      members: 3,
      deadline: "2024-03-01",
      progress: 25,
    },
    {
      id: 3,
      name: "DAO Governance System",
      status: "In Progress",
      members: 8,
      deadline: "2024-02-28",
      progress: 80,
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <FolderKanban className="w-8 h-8 text-rose-400" />
              <h1 className="text-4xl font-bold text-white">Project Management</h1>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors">
              <Plus className="w-5 h-5" />
              New Project
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{project.name}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Status</span>
                    <span className="px-2 py-1 bg-rose-500/20 text-rose-300 rounded">
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Members
                    </span>
                    <span className="text-white">{project.members}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Deadline
                    </span>
                    <span className="text-white">{project.deadline}</span>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-white/60">Progress</span>
                    <span className="text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-rose-500 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <button className="w-full mt-4 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors border border-white/10">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
