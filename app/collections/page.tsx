"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Boxes, 
  Rocket, 
  Key, 
  Globe, 
  Ship, 
  Sparkles,
  ExternalLink,
  Users,
  Calendar
} from "lucide-react";

function Starfield() {
  const [stars, setStars] = React.useState<{ x: number; y: number; s: number; a: number }[]>([]);
  
  React.useEffect(() => {
    const arr = Array.from({ length: 180 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2,
      a: Math.random() * 0.5 + 0.5,
    }));
    setStars(arr);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute h-px w-px animate-pulse rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.a,
            transform: `scale(${star.s})`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}

function NavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600" />
          <span className="text-xl font-bold text-white">KairoVerse</span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          <a href="/" className="text-white/70 transition-colors hover:text-white">Home</a>
          <a href="/collections" className="text-cyan-400">Collections</a>
          <a href="/staking" className="text-white/70 transition-colors hover:text-white">Staking</a>
          <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-purple-600">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  );
}

interface CollectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  totalSupply: string;
  floorPrice: string;
  volume: string;
  isMystery?: boolean;
}

function CollectionCard({ 
  title, 
  description, 
  icon, 
  image, 
  totalSupply, 
  floorPrice, 
  volume,
  isMystery = false 
}: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <Card className={`border-white/10 bg-white/5 transition-all hover:border-cyan-400/30 hover:bg-white/10 ${isMystery ? 'border-purple-400/20 bg-gradient-to-br from-purple-500/10 to-transparent' : ''}`}>
        <CardContent className="p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${isMystery ? 'bg-gradient-to-br from-purple-500/20 to-transparent' : 'bg-gradient-to-br from-cyan-500/20 to-transparent'}`}>
              {icon}
            </div>
            <div>
              <h3 className={`font-semibold ${isMystery ? 'text-purple-300' : 'text-cyan-400'}`}>
                {title}
              </h3>
              <p className="text-sm text-white/60">Collection NFT</p>
            </div>
          </div>
          
          <div className="mb-4 flex justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-xl border border-white/10">
              {isMystery ? (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/20 to-transparent">
                  {icon}
                </div>
              ) : (
                <img
                  src={image}
                  alt={`${title} NFT`}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
          
          <p className="mb-4 text-sm text-white/70">{description}</p>
          
          <div className="mb-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-white/50">Total Supply</p>
              <p className="font-semibold text-white">{totalSupply}</p>
            </div>
            <div>
              <p className="text-xs text-white/50">Floor Price</p>
              <p className="font-semibold text-white">{floorPrice}</p>
            </div>
            <div>
              <p className="text-xs text-white/50">Volume</p>
              <p className="font-semibold text-white">{volume}</p>
            </div>
          </div>
          
          <Button 
            className={`w-full ${isMystery ? 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500' : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500'}`}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Collection
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function CollectionsPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  };

  const collections = [
    {
      title: "Starboxes",
      description: "Mysterious boxes containing rare artifacts and resources from across the KairoVerse. Each Starbox holds the potential for incredible discoveries.",
      icon: <Boxes className="h-6 w-6 text-cyan-400" />,
      image: "/images/nfts/starboxes.png",
      totalSupply: "10,000",
      floorPrice: "0.5 SOL",
      volume: "2,500 SOL"
    },
    {
      title: "SpaceParts",
      description: "Essential components for building and upgrading your spacecraft. Collect different parts to create the ultimate vessel for your cosmic adventures.",
      icon: <Rocket className="h-6 w-6 text-cyan-400" />,
      image: "/images/nfts/spaceparts.png",
      totalSupply: "5,000",
      floorPrice: "0.3 SOL",
      volume: "1,200 SOL"
    },
    {
      title: "Starships",
      description: "Fully assembled spacecraft ready for interstellar travel. Each Starship has unique capabilities and can be customized for different missions.",
      icon: <Ship className="h-6 w-6 text-cyan-400" />,
      image: "/images/nfts/starships.png",
      totalSupply: "2,500",
      floorPrice: "1.2 SOL",
      volume: "3,000 SOL"
    },
    {
      title: "Planet NFTs",
      description: "Own a piece of the KairoVerse with these unique planetary NFTs. Each planet has distinct characteristics and can generate resources over time.",
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      image: "/images/nfts/planets.png",
      totalSupply: "1,000",
      floorPrice: "2.0 SOL",
      volume: "2,000 SOL"
    },
    {
      title: "SpaceKeys",
      description: "Special access keys that unlock hidden areas and exclusive content within the KairoVerse. Limited edition with unique utility.",
      icon: <Key className="h-6 w-6 text-cyan-400" />,
      image: "/images/nfts/starkeys.png",
      totalSupply: "500",
      floorPrice: "0.8 SOL",
      volume: "400 SOL"
    },
    {
      title: "???",
      description: "Something mysterious awaits... The secrets of the KairoVerse are yet to be revealed. What lies beyond the known universe?",
      icon: <Sparkles className="h-6 w-6 text-purple-300" />,
      image: "",
      totalSupply: "???",
      floorPrice: "???",
      volume: "???",
      isMystery: true
    }
  ];

  return (
    <main className="relative min-h-screen scroll-smooth bg-black text-white antialiased">
      <Starfield />
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.div {...fadeUp}>
            <Badge className="mb-4 border-white/10 bg-white/5 text-cyan-400">
              <Star className="mr-2 h-3.5 w-3.5" />
              NFT Collections
            </Badge>
            <h1 className="mb-6 bg-gradient-to-b from-cyan-400 to-cyan-300 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
              KairoVerse Collections
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Discover our unique NFT collections that bring the KairoVerse to life. Each collection offers distinct utility and value within our ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            {...fadeUp}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 bg-gradient-to-b from-cyan-400 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">
              Explore Our Collections
            </h2>
            <p className="text-white/70">
              Each collection is carefully crafted with unique mechanics and utility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <CollectionCard
                key={collection.title}
                title={collection.title}
                description={collection.description}
                icon={collection.icon}
                image={collection.image}
                totalSupply={collection.totalSupply}
                floorPrice={collection.floorPrice}
                volume={collection.volume}
                isMystery={collection.isMystery}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div 
            {...fadeUp}
            className="grid grid-cols-1 gap-8 md:grid-cols-4"
          >
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-cyan-400">6</div>
              <div className="text-sm text-white/70">Collections</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-cyan-400">19,000</div>
              <div className="text-sm text-white/70">Total NFTs</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-cyan-400">9,100</div>
              <div className="text-sm text-white/70">Volume (SOL)</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-cyan-400">2,500</div>
              <div className="text-sm text-white/70">Holders</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-white/50">
            © 2024 KairoVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
