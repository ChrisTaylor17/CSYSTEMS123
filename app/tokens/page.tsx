"use client";

import { Navbar } from "@/components/navigation/navbar";
import { useState } from "react";
import { Coins, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function Tokens() {
  const [balance] = useState({
    sol: 45.23,
    consilience: 1250.5,
    usd: 8234.12,
  });

  const [transactions] = useState([
    { id: 1, type: "receive", amount: "+125 CNSL", from: "0x742d...3f4a", date: "2024-01-15", status: "Confirmed" },
    { id: 2, type: "send", amount: "-50 CNSL", to: "0x8a3c...9b2d", date: "2024-01-14", status: "Confirmed" },
    { id: 3, type: "receive", amount: "+2.5 SOL", from: "0x1f5e...7c8b", date: "2024-01-13", status: "Confirmed" },
    { id: 4, type: "send", amount: "-75 CNSL", to: "0x4d2a...6e1f", date: "2024-01-12", status: "Confirmed" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Coins className="w-8 h-8 text-amber-400" />
            <h1 className="text-4xl font-bold text-white">Token Management</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 rounded-xl p-6">
              <div className="text-amber-400/60 text-sm mb-2">SOL Balance</div>
              <div className="text-3xl font-bold text-white mb-1">{balance.sol} SOL</div>
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+12.5%</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 border border-indigo-500/30 rounded-xl p-6">
              <div className="text-indigo-400/60 text-sm mb-2">CNSL Tokens</div>
              <div className="text-3xl font-bold text-white mb-1">{balance.consilience}</div>
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+8.3%</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-6">
              <div className="text-emerald-400/60 text-sm mb-2">USD Value</div>
              <div className="text-3xl font-bold text-white mb-1">${balance.usd}</div>
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+15.2%</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <button className="bg-amber-600 hover:bg-amber-700 text-white rounded-xl p-6 transition-colors text-left">
              <div className="text-2xl font-bold mb-2">Send Tokens</div>
              <div className="text-amber-100">Transfer SOL or CNSL tokens</div>
            </button>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl p-6 transition-colors text-left">
              <div className="text-2xl font-bold mb-2">Receive Tokens</div>
              <div className="text-indigo-100">Get your wallet address</div>
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Transactions</h2>
            
            <div className="space-y-3">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-full ${
                        tx.type === "receive" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-red-500/20 text-red-400"
                      }`}>
                        {tx.type === "receive" ? (
                          <ArrowDownRight className="w-5 h-5" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5" />
                        )}
                      </div>
                      
                      <div>
                        <div className="text-white font-semibold">{tx.amount}</div>
                        <div className="text-white/60 text-sm">
                          {tx.type === "receive" ? `From: ${tx.from}` : `To: ${tx.to}`}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-white/60 text-sm">{tx.date}</div>
                      <div className="text-green-400 text-sm">{tx.status}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
