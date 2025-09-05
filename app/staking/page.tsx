"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Wallet, 
  Star, 
  Coins, 
  Clock, 
  Zap, 
  Shield, 
  TrendingUp,
  Disc3,
  Rocket,
  Cpu,
  Boxes
} from "lucide-react";
import Link from "next/link";
import { WalletConnect } from "@/components/WalletConnect";
import { WalletDebug } from "@/components/WalletDebug";
import { SimpleWalletTest } from "@/components/SimpleWalletTest";
import { WalletInfo } from "@/components/WalletInfo";
import { useWallet } from '@/contexts/WalletContext';

function Starfield() {
  const [stars, setStars] = useState<{ x: number; y: number; s: number; a: number }[]>([]);
  useEffect(() => {
    const arr = Array.from({ length: 120 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 0.5,
      a: Math.random() * 0.6 + 0.2,
    }));
    setStars(arr);
  }, []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((st, i) => (
        <span
          key={i}
          style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.s, height: st.s, opacity: st.a }}
          className="absolute rounded-full bg-white/70 shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]"
        />
      ))}
      <div className="absolute -inset-32 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_60%)]" />
    </div>
  );
}

function NavBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Disc3 className="h-6 w-6 animate-spin-slow text-cyan-400" />
          <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-sm font-semibold tracking-widest text-transparent">
            KAIRO • THE STARBORN
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <WalletConnect />
          <Button asChild variant="outline" size="sm">
            <Link href="/collections">Collections</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function StakingCard({ 
  title, 
  description, 
  icon: Icon, 
  apy, 
  onStake, 
  onUnstake,
  onClaim,
  isStaked = false,
  isSelected = false,
  rewards = 0,
  isWalletConnected = false
}: {
  title: string;
  description: string;
  icon: any;
  apy: string;
  onStake: () => void;
  onUnstake: () => void;
  onClaim: () => void;
  isStaked?: boolean;
  isSelected?: boolean;
  rewards?: number;
  isWalletConnected?: boolean;
}) {
  const isMystery = title === '???';
  
  return (
    <Card className={`border-white/10 bg-white/5 transition-all duration-300 ${
      isSelected ? 'ring-2 ring-cyan-400/50' : ''
    } ${isMystery ? 'border-purple-400/30 bg-gradient-to-b from-purple-500/10 to-transparent' : ''}`}>
      <CardContent className="space-y-4 p-6">
        {/* NFT Thumbnail */}
        <div className="flex justify-center">
          <div className="relative h-32 w-32 overflow-hidden rounded-xl border border-white/10">
            {title === 'Starboxes' && (
              <img 
                src="/images/nfts/starboxes.png" 
                alt="Starboxes NFT"
                className="h-full w-full object-cover"
              />
            )}
            {title === 'SpaceParts' && (
              <img 
                src="/images/nfts/spaceparts.png" 
                alt="SpaceParts NFT"
                className="h-full w-full object-cover"
              />
            )}
            {title === 'Starships' && (
              <img 
                src="/images/nfts/starships.png" 
                alt="Starships NFT"
                className="h-full w-full object-cover"
              />
            )}
            {title === 'Planet NFTs' && (
              <img 
                src="/images/nfts/planets.png" 
                alt="Planet NFTs"
                className="h-full w-full object-cover"
              />
            )}
            {title === 'SpaceKeys' && (
              <img 
                src="/images/nfts/starkeys.png" 
                alt="SpaceKeys NFT"
                className="h-full w-full object-cover"
              />
            )}
            {title === '???' && (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-500/20 to-transparent">
                <Icon className="h-12 w-12 text-purple-300" />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className={`rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 ${isMystery ? 'bg-purple-500/20 ring-purple-400/30' : ''}`}>
            <Icon className={`h-6 w-6 ${isMystery ? 'text-purple-300' : 'text-cyan-300'}`} />
          </div>
          <div>
            <h3 className={`font-semibold ${isMystery ? 'text-purple-300' : 'text-cyan-400'}`}>{title}</h3>
            <p className="text-sm text-white/70">{description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Shield className="h-4 w-4" />
              Status
            </div>
            <div className="text-lg font-semibold text-white">
              {isStaked ? 'Staked' : 'Available'}
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <TrendingUp className="h-4 w-4" />
              APY
            </div>
            <div className={`text-lg font-semibold ${isMystery ? 'text-purple-400' : 'text-green-400'}`}>{apy}</div>
          </div>
        </div>

        {isStaked && (
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <Star className="h-4 w-4" />
              Pending Rewards
            </div>
            <div className="text-lg font-semibold text-yellow-400">{rewards.toFixed(4)} $KAIRO</div>
          </div>
        )}

        <div className="flex gap-2">
          {isStaked ? (
            <>
              <Button onClick={onUnstake} variant="outline" className="flex-1" disabled={!isWalletConnected}>
                <Zap className="mr-2 h-4 w-4" />
                Unstake
              </Button>
              <Button onClick={onClaim} variant="secondary" className="flex-1" disabled={rewards === 0 || !isWalletConnected}>
                <Coins className="mr-2 h-4 w-4" />
                Claim
              </Button>
            </>
          ) : (
            <Button onClick={onStake} className="w-full" disabled={!isWalletConnected || (isSelected && !isStaked)}>
              <Shield className="mr-2 h-4 w-4" />
              {!isWalletConnected ? 'Connect Wallet First' : (isSelected ? 'Staking...' : 'Stake This NFT')}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function StatsCard({ title, value, icon: Icon, change }: { title: string; value: string; icon: any; change?: string }) {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
            <Icon className="h-5 w-5 text-cyan-300" />
          </div>
          <div>
            <p className="text-sm text-white/70">{title}</p>
            <p className="text-xl font-semibold text-white">{value}</p>
            {change && <p className="text-xs text-green-400">{change}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function StakingPage() {
  const { connected, publicKey } = useWallet();
  
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  };

  const [stakedNFTs, setStakedNFTs] = useState<Record<string, { isStaked: boolean; rewards: number }>>({
    starboxes: { isStaked: false, rewards: 0 },
    spaceparts: { isStaked: false, rewards: 0 },
    starships: { isStaked: false, rewards: 0 },
    planets: { isStaked: false, rewards: 0 },
    spacekeys: { isStaked: false, rewards: 0 },
    mystery: { isStaked: false, rewards: 0 }
  });

  const handleStake = (type: string) => {
    setStakedNFTs(prev => ({
      ...prev,
      [type]: { ...prev[type], isStaked: true, rewards: 0 }
    }));
  };

  const handleUnstake = (type: string) => {
    setStakedNFTs(prev => ({
      ...prev,
      [type]: { ...prev[type], isStaked: false, rewards: 0 }
    }));
  };

  const handleClaim = (type: string) => {
    setStakedNFTs(prev => ({
      ...prev,
      [type]: { ...prev[type], rewards: 0 }
    }));
  };

  // Simulate rewards accumulation for all staked NFTs
  useEffect(() => {
    const interval = setInterval(() => {
      setStakedNFTs(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(type => {
          if (updated[type].isStaked) {
            updated[type] = {
              ...updated[type],
              rewards: updated[type].rewards + 0.001
            };
          }
        });
        return updated;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen scroll-smooth bg-black text-white antialiased">
      <Starfield />
      <NavBar />

      {/* Header */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
          <motion.div {...fadeUp} className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <Shield className="h-3.5 w-3.5 text-purple-300" />
              Stake & Earn • Secure • Decentralized
            </div>
            <h1 className="mb-4 bg-gradient-to-b from-cyan-400 to-cyan-300 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
              Kairo Staking Hub
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-white/80">
              Stake your Kairo NFTs to earn $KAIRO rewards. Higher tier NFTs and longer staking periods yield better returns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wallet Info */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-8">
          <WalletInfo />
        </div>
      </section>

      {/* Stats */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid gap-4 md:grid-cols-4">
            <StatsCard 
              title="Total Staked" 
              value="2,847 NFTs" 
              icon={Shield}
              change="+12.5% this week"
            />
            <StatsCard 
              title="Total Rewards" 
              value="1,247,392 $KAIRO" 
              icon={Coins}
              change="+8.3% this week"
            />
            <StatsCard 
              title="Average APY" 
              value="24.7%" 
              icon={TrendingUp}
              change="+2.1% this week"
            />
            <StatsCard 
              title="Active Stakers" 
              value="1,423" 
              icon={Star}
              change="+156 this week"
            />
          </div>
        </div>
      </section>

      {/* Staking Options */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <motion.div {...fadeUp} className="mb-8">
            <h2 className="mb-2 text-2xl font-semibold text-cyan-400">Stake Your NFTs</h2>
            <p className="text-white/80">Stake multiple NFT types simultaneously to maximize your rewards. Each NFT type earns independently.</p>
            
            {!connected && (
              <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                <div className="flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold text-yellow-400">Wallet Not Connected</span>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Please connect your Solana wallet to start staking your Kairo NFTs and earning rewards.
                </p>
              </div>
            )}

            {connected && publicKey && (
              <div className="mt-4 rounded-xl border border-green-400/20 bg-green-400/10 p-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="font-semibold text-green-400">Wallet Connected</span>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Ready to stake! You can now stake multiple NFT types simultaneously for maximum rewards.
                </p>
              </div>
            )}

            {Object.values(stakedNFTs).some(nft => nft.isStaked) && (
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  <span className="font-semibold text-cyan-400">Active Staking</span>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  You have {Object.values(stakedNFTs).filter(nft => nft.isStaked).length} NFT type(s) currently staked and earning rewards.
                </p>
              </div>
            )}
          </motion.div>
          
                     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             <StakingCard
               title="Starboxes"
               description="Loot boxes with evolving tiers. Higher levels = better rewards."
               icon={Boxes}
               apy="15-25%"
               onStake={() => handleStake('starboxes')}
               onUnstake={() => handleUnstake('starboxes')}
               onClaim={() => handleClaim('starboxes')}
               isStaked={stakedNFTs.starboxes.isStaked}
               isSelected={stakedNFTs.starboxes.isStaked}
               rewards={stakedNFTs.starboxes.rewards}
               isWalletConnected={connected}
             />
             
             <StakingCard
               title="SpaceParts"
               description="Mechanical parts for Starships. Upgrade to Level 10 for max rewards."
               icon={Cpu}
               apy="20-35%"
               onStake={() => handleStake('spaceparts')}
               onUnstake={() => handleUnstake('spaceparts')}
               onClaim={() => handleClaim('spaceparts')}
               isStaked={stakedNFTs.spaceparts.isStaked}
               isSelected={stakedNFTs.spaceparts.isStaked}
               rewards={stakedNFTs.spaceparts.rewards}
               isWalletConnected={connected}
             />
             
             <StakingCard
               title="Starships"
               description="Your flagship NFT. Requires 4 Level 10 SpaceParts for staking."
               icon={Rocket}
               apy="30-50%"
               onStake={() => handleStake('starships')}
               onUnstake={() => handleUnstake('starships')}
               onClaim={() => handleClaim('starships')}
               isStaked={stakedNFTs.starships.isStaked}
               isSelected={stakedNFTs.starships.isStaked}
               rewards={stakedNFTs.starships.rewards}
               isWalletConnected={connected}
             />
             
             <StakingCard
               title="Planet NFTs"
               description="Shares in memecoin pools. Stake for revenue-based rewards."
               icon={Star}
               apy="18-40%"
               onStake={() => handleStake('planets')}
               onUnstake={() => handleUnstake('planets')}
               onClaim={() => handleClaim('planets')}
               isStaked={stakedNFTs.planets.isStaked}
               isSelected={stakedNFTs.planets.isStaked}
               rewards={stakedNFTs.planets.rewards}
               isWalletConnected={connected}
             />

             <StakingCard
               title="SpaceKeys"
               description="Mysterious keys that unlock hidden treasures in the KairoVerse."
               icon={Shield}
               apy="25-45%"
               onStake={() => handleStake('spacekeys')}
               onUnstake={() => handleUnstake('spacekeys')}
               onClaim={() => handleClaim('spacekeys')}
               isStaked={stakedNFTs.spacekeys.isStaked}
               isSelected={stakedNFTs.spacekeys.isStaked}
               rewards={stakedNFTs.spacekeys.rewards}
               isWalletConnected={connected}
             />
             
             <StakingCard
               title="???"
               description="In the void between stars, truth awaits the seeker..."
               icon={Star}
               apy="???"
               onStake={() => handleStake('mystery')}
               onUnstake={() => handleUnstake('mystery')}
               onClaim={() => handleClaim('mystery')}
               isStaked={stakedNFTs.mystery.isStaked}
               isSelected={stakedNFTs.mystery.isStaked}
               rewards={stakedNFTs.mystery.rewards}
               isWalletConnected={connected}
             />
           </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <motion.div {...fadeUp} className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-cyan-400">How Staking Works</h2>
            <p className="text-white/80">Simple steps to start earning rewards</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
                  <Wallet className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="mb-2 font-semibold text-cyan-400">1. Connect Wallet</h3>
                <p className="text-sm text-white/70">Connect your Solana wallet to access your Kairo NFTs</p>
              </CardContent>
            </Card>
            
            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="mb-2 font-semibold text-cyan-400">2. Choose & Stake</h3>
                <p className="text-sm text-white/70">Select your NFTs and stake them to start earning rewards</p>
              </CardContent>
            </Card>
            
            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                  <Coins className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="mb-2 font-semibold text-cyan-400">3. Earn Rewards</h3>
                <p className="text-sm text-white/70">Claim your $KAIRO rewards and compound your earnings</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="text-center text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} Kairo The Starborn. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Debug Info - Remove in production */}
      <WalletDebug />
      <SimpleWalletTest />
    </main>
  );
}
