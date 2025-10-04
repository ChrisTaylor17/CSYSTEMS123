"use client";

import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import Link from "next/link";
import { ArrowRight, Users, Sparkles, Coins, Image } from "lucide-react";

export default function Home() {
  return (
    <main>
      <HeroGeometric 
        badge="CONSILIENCE SYSTEMS" 
        title1="AI-Powered Matching" 
        title2="On Solana Blockchain" 
      />
      
      <section className="bg-black py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Platform Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/dashboard" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <Users className="w-12 h-12 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Dashboard</h3>
                <p className="text-white/60">AI-guided matching and connections</p>
                <ArrowRight className="w-5 h-5 text-white/40 mt-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <Sparkles className="w-12 h-12 text-rose-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Projects</h3>
                <p className="text-white/60">Manage and collaborate on projects</p>
                <ArrowRight className="w-5 h-5 text-white/40 mt-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/nft-gallery" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <Image className="w-12 h-12 text-violet-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">NFT Gallery</h3>
                <p className="text-white/60">AI-generated NFT collection</p>
                <ArrowRight className="w-5 h-5 text-white/40 mt-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/tokens" className="group">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                <Coins className="w-12 h-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Tokens</h3>
                <p className="text-white/60">Manage your blockchain tokens</p>
                <ArrowRight className="w-5 h-5 text-white/40 mt-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
