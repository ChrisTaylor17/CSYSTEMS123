"use client";

import { Navbar } from "@/components/navigation/navbar";
import { useState } from "react";
import { Image as ImageIcon, Sparkles } from "lucide-react";
import Image from "next/image";

export default function NFTGallery() {
  const [nfts] = useState([
    {
      id: 1,
      name: "Cosmic Consilience #001",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop",
      price: "2.5 SOL",
      creator: "AI Generator",
    },
    {
      id: 2,
      name: "Digital Harmony #042",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop",
      price: "1.8 SOL",
      creator: "AI Generator",
    },
    {
      id: 3,
      name: "Neural Network #127",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&h=400&fit=crop",
      price: "3.2 SOL",
      creator: "AI Generator",
    },
    {
      id: 4,
      name: "Quantum Dreams #089",
      image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=400&h=400&fit=crop",
      price: "2.1 SOL",
      creator: "AI Generator",
    },
    {
      id: 5,
      name: "Blockchain Vision #203",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=400&h=400&fit=crop",
      price: "4.0 SOL",
      creator: "AI Generator",
    },
    {
      id: 6,
      name: "Cyber Synthesis #156",
      image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=400&h=400&fit=crop",
      price: "2.7 SOL",
      creator: "AI Generator",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-8 h-8 text-violet-400" />
            <h1 className="text-4xl font-bold text-white">NFT Gallery</h1>
            <Sparkles className="w-6 h-6 text-violet-400" />
          </div>

          <p className="text-white/60 mb-12 text-lg">
            Explore our collection of AI-generated NFTs on the Solana blockchain
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nfts.map((nft) => (
              <div
                key={nft.id}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={nft.image}
                    alt={nft.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{nft.name}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/60 text-sm">{nft.creator}</span>
                    <span className="text-violet-400 font-bold">{nft.price}</span>
                  </div>

                  <button className="w-full px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors">
                    View on Solana
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
