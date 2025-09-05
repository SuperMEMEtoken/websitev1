"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Mail, Rocket, Shield, Star, Boxes, Coins, Cpu, Wallet, Twitter, MessageCircle, Disc3 } from "lucide-react";

function Starfield() {
  const [stars, setStars] = useState<{ x: number; y: number; s: number; a: number }[]>([]);
  useEffect(() => {
    const arr = Array.from({ length: 180 }, () => ({
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

function RandomKairoGif() {
  const [gifs, setGifs] = useState<{ id: number; x: number; y: number; visible: boolean }[]>([]);

  useEffect(() => {
    const createRandomGif = () => {
      const newGif = {
        id: Date.now() + Math.random(),
        x: Math.random() * 80 + 10, // Entre 10% et 90% de la largeur
        y: Math.random() * 80 + 10, // Entre 10% et 90% de la hauteur
        visible: true
      };
      
      setGifs(prev => [...prev, newGif]);
      
      // Faire disparaître le GIF après 3 secondes
      setTimeout(() => {
        setGifs(prev => prev.filter(gif => gif.id !== newGif.id));
      }, 3000);
    };

    // Créer un GIF aléatoire toutes les 4-8 secondes
    const interval = setInterval(createRandomGif, Math.random() * 4000 + 4000);
    
    // Créer le premier GIF après 2 secondes
    const initialTimeout = setTimeout(createRandomGif, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {gifs.map((gif) => (
        <motion.div
          key={gif.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            left: `${gif.x}%`,
            top: `${gif.y}%`,
            zIndex: 10
          }}
        >
          <img
            src="https://media.giphy.com/media/BDtK8LNnrhQmtRppaU/giphy.gif"
            alt="Kairo"
            className="w-16 h-16 rounded-full"
            style={{
              background: 'transparent',
              mixBlendMode: 'screen'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function NeonDivider({ label }: { label?: string }) {
  return (
    <div className="relative my-10 flex items-center">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      {label && (
        <span className="mx-4 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-widest text-white/80 backdrop-blur">
          {label}
        </span>
      )}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </div>
  );
}

function NavBar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#lore", label: "Lore" },
    { href: "/collections", label: "Collections" },
    { href: "#token", label: "$KAIRO" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#community", label: "Community" },
  ];
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Disc3 className="h-6 w-6 animate-spin-slow text-cyan-400" />
          <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-sm font-semibold tracking-widest text-transparent">
            KAIRO • THE STARBORN
          </span>
        </div>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-start gap-2">
          <div className="hidden md:flex flex-col items-center">
            <Button 
              className="opacity-50 cursor-not-allowed" 
              variant="secondary"
              disabled
            >
              <Wallet className="mr-2 h-4 w-4" /> STAKING APP
            </Button>
            <span className="text-xs text-white/50 mt-1">soon</span>
          </div>
          <Button asChild className="mt-0">
            <a href="#community">Join</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc, badge }: { icon: any; title: string; desc: string; badge?: string }) {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-3 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
            <Icon className="h-5 w-5 text-cyan-300" />
          </div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-cyan-400">{title}</h3>
            {badge && <Badge className="bg-purple-600/40 text-purple-100">{badge}</Badge>}
          </div>
        </div>
        <p className="text-sm text-white/70">{desc}</p>
      </CardContent>
    </Card>
  );
}

function TimelineItem({ quarter, items }: { quarter: string; items: string[] }) {
  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]" />
          <h4 className="font-semibold tracking-wide text-cyan-400">{quarter}</h4>
        </div>
        <ul className="ml-2 list-disc space-y-2 pl-4 text-sm text-white/75">
          {items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function FooterLink({ href, children }: any) {
  return (
    <a href={href} className="text-white/70 hover:text-white">
      {children}
    </a>
  );
}

export default function KairoLanding() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 },
  };

  const year = new Date().getFullYear();

  return (
    <main id="home" className="relative min-h-screen scroll-smooth bg-black text-white antialiased">
      <Starfield />
      <RandomKairoGif />
      <NavBar />

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-24">
          <motion.div {...fadeUp} className="order-2 md:order-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <Shield className="h-3.5 w-3.5 text-purple-300" />
              Built on Solana • Fast • Low Fees
            </div>
            <h1 className="mb-4 bg-gradient-to-b from-cyan-400 to-cyan-300 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl">
              Kairo The Starborn
            </h1>
            <p className="mb-6 max-w-xl text-white/80">
              A cinematic, lore‑driven Web3 universe. Evolving NFTs, on‑chain progression, and a community‑powered economy anchored in the Solana ecosystem.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-col items-center">
                <Button 
                  size="lg" 
                  className="opacity-50 cursor-not-allowed" 
                  disabled
                >
                  <Rocket className="mr-2 h-4 w-4" /> Explore Collections
                </Button>
                <span className="text-xs text-white/50 mt-1">soon</span>
              </div>
              <Button asChild size="lg" variant="secondary">
                <a href="#token"><Coins className="mr-2 h-4 w-4" /> Learn about $KAIRO</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/60">
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-300" /> Holder‑first design</div>
              <div className="flex items-center gap-2"><Cpu className="h-4 w-4 text-cyan-300" /> Evolving on‑chain logic</div>
              <div className="flex items-center gap-2"><Boxes className="h-4 w-4 text-purple-300" /> Starbox loot mechanics</div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="order-1 md:order-2">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent blur-2xl" />
              <div className="relative h-full w-full rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-2 backdrop-blur">
                <div className="relative h-full w-full rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-black/40 to-black/80 overflow-hidden">
                  <img 
                    src="/images/logo/kairo-logo.png" 
                    alt="Kairo Logo"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-sm text-cyan-400/90 font-medium text-center">Kairo The Starborn</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <NeonDivider label="LORE" />

      {/* Lore */}
      <section id="lore" className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold text-cyan-400">The Starborn Chronicles</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              In the vast expanse of the cosmos, where stars are born and destinies are written in stardust, 
              Kairo emerged as the first of the Starborn - a being forged in the heart of a dying star.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div {...fadeUp} className="space-y-6">
              <Card className="border-white/10 bg-white/5 h-[600px] flex flex-col shadow-[0_0_20px_4px_rgba(34,211,238,0.3)] animate-pulse">
                <CardContent className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-2 text-xl font-semibold text-cyan-400">The Genesis</h3>
                  <p className="text-white/80 mb-2 flex-1">
                    In a distant future, the galaxy is under the yoke of the Nexus Order, an all-powerful technocratic 
                    entity that controls energy, knowledge... and memories. To establish its domination, the Nexus 
                    conducted forbidden experiments on hybrid species.
                  </p>
                  <p className="text-white/70 text-sm mb-2">
                    Among them: Kairo, a modified DNA feline humanoid, endowed with augmented intelligence and 
                    mysterious powers linked to an ancient cosmic energy: $PRM.
                  </p>
                  <div className="mt-2 flex-1">
                    <img 
                      src="/images/lore-genesis.png" 
                      alt="Kairo in stasis chamber"
                      className="w-full h-full object-contain rounded-lg border border-white/10"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-white/10 bg-white/5 h-[600px] flex flex-col shadow-[0_0_20px_4px_rgba(34,211,238,0.3)] animate-pulse">
                <CardContent className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-2 text-xl font-semibold text-cyan-400">The Starboxes</h3>
                  <p className="text-white/80 mb-2">
                    During Kairo's cosmic journey, the Starborn discovered mysterious containers scattered 
                    across the galaxy - the legendary Starboxes. Each box contains fragments of stellar 
                    matter, remnants of ancient civilizations, waiting to be unlocked.
                  </p>
                  <div className="mt-2 flex-1 flex items-center justify-center">
                    <img 
                      src="/images/lore-starboxes.png" 
                      alt="The Starboxes"
                      className="max-w-full max-h-full object-contain rounded-lg border border-white/10"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div {...fadeUp} className="space-y-6">
              <Card className="border-white/10 bg-white/5 h-[600px] flex flex-col shadow-[0_0_20px_4px_rgba(34,211,238,0.3)] animate-pulse">
                <CardContent className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-2 text-xl font-semibold text-cyan-400">The Kairoverse</h3>
                  <p className="text-white/80 mb-2 flex-1">
                    As Kairo's influence spread across the galaxy, entire worlds began to transform. 
                    Planets once barren now pulse with cosmic energy, their surfaces reflecting the 
                    starlight that Kairo carries within.
                  </p>
                  <p className="text-white/70 text-sm mb-2">
                    These transformed worlds - the BONK Planet, PEPE Planet, and WEN Planet - 
                    represent the convergence of cosmic power and memetic energy, creating 
                    unprecedented opportunities for those brave enough to explore.
                  </p>
                  <div className="mt-2 flex-1 flex items-center justify-center">
                    <img 
                      src="/images/lore-kairoverse.png" 
                      alt="The Kairoverse"
                      className="max-w-full max-h-full object-contain rounded-lg border border-white/10"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-white/10 bg-white/5 h-[600px] flex flex-col shadow-[0_0_20px_4px_rgba(34,211,238,0.3)] animate-pulse">
                <CardContent className="p-4 flex-1 flex flex-col">
                  <h3 className="mb-2 text-xl font-semibold text-cyan-400">The Quest Continues</h3>
                  <p className="text-white/80 mb-2 flex-1">
                    Kairo's journey is far from over. As the Starborn, Kairo seeks companions 
                    who share the vision of a universe where cosmic energy flows freely, 
                    where evolution is not just possible but inevitable.
                  </p>
                  <p className="text-white/70 text-sm mb-2">
                    Will you join Kairo in this cosmic adventure? The stars await your decision, 
                    and the universe holds infinite possibilities for those who dare to dream.
                  </p>
                  <div className="mt-2 flex-1 flex items-center justify-center">
                    <img 
                      src="/images/lore-quest-continues.png" 
                      alt="The Quest Continues"
                      className="max-w-full max-h-full object-contain rounded-lg border border-white/10"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <NeonDivider label="COLLECTIONS" />

      {/* Collections */}
      <section id="collections" className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={Boxes} title="Starboxes" desc="Loot boxes with evolving tiers (Lv.1-5). Open to mint SpaceParts and more - burn on open for deflationary dynamics." />
            <FeatureCard icon={Cpu} title="SpaceParts" desc="Four mechanical part types, each upgradable to Lv.10 via staking. Required to equip Starships." />
            <FeatureCard icon={Rocket} title="Starships" desc="Your flagship NFT. Can be staked once fully equipped with 4 Lv.10 SpaceParts, then levels up on‑chain." />
            <FeatureCard icon={Star} title="Planet NFTs" desc="Represent shares in curated memecoin pools ($BONK, $PEPE, $WEN). Stake for level‑based revenue share." badge="Utility" />
          </div>
        </div>
      </section>

      <NeonDivider label="$KAIRO TOKEN" />

      {/* Token */}
      <section id="token" className="relative">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-6 pb-20 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <h2 className="mb-2 text-2xl font-semibold text-cyan-400">Utility at the Core</h2>
            <p className="mb-4 text-white/80">$KAIRO powers upgrades, cosmetics, quests, and governance experiments. Designed for sustainable sinks (upgrades, boosts, cosmetics) and fair distribution through participation.</p>
            <div className="space-y-3 text-sm text-white/80">
              <Card className="border-white/10 bg-white/5">
                <CardContent className="p-4">
                  <div className="mb-2 font-semibold text-cyan-400">Initial Distribution</div>
                  <ul className="ml-4 list-disc space-y-1 text-white">
                    <li>Community & Quests</li>
                    <li>Liquidity & Partnerships</li>
                    <li>Team (long‑term vesting)</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/5">
                <CardContent className="p-4">
                  <div className="mb-2 font-semibold text-cyan-400">Sinks & Utility</div>
                  <ul className="ml-4 list-disc space-y-1 text-white">
                    <li>XP boosts & leveling costs</li>
                    <li>Cosmetic items & name reservations</li>
                    <li>Event gates & premium features</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <Card className="border-white/10 bg-white/5">
              <CardContent className="p-6">
                <h3 className="mb-3 font-semibold text-cyan-400">Email whitelist</h3>
                <p className="mb-4 text-sm text-white/70">Get notified when $KAIRO launches and early quests open.</p>
                
                <form 
                  action="https://formspree.io/f/xldwpgol" 
                  method="POST" 
                  className="space-y-3"
                >
                  <div className="flex gap-2">
                    <Input 
                      type="email"
                      name="email"
                      placeholder="you@galaxy.mail" 
                      className="bg-black/40" 
                      required
                    />
                    <input
                      type="hidden"
                      name="message"
                      value="Nouvelle inscription à la whitelist Kairo"
                    />
                    <input
                      type="hidden"
                      name="_subject"
                      value="Nouvelle inscription whitelist Kairo"
                    />
                    <Button 
                      type="submit" 
                      className="min-w-[120px]"
                    >
                      <Mail className="mr-2 h-4 w-4" /> 
                      Notify me
                    </Button>
                  </div>
                </form>
                
                <p className="mt-3 text-xs text-white/50">We'll never spam. Opt‑out anytime.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <NeonDivider label="ROADMAP" />

      {/* Roadmap */}
      <section id="roadmap" className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TimelineItem quarter="Phase 1 - Foundation" items={["Branding & Storytelling", "Community Building", "Daily GM/GN campaigns", "First giveaways (StarKeys, whitelist)"]} />
            <TimelineItem quarter="Phase 2 - First Collection" items={["Starboxes Launch (36k mint)", "Staking page integration", "Loot system: Starboxes to SpaceParts", "Community quests & lore missions"]} />
            <TimelineItem quarter="Phase 3 - Core Gameplay" items={["SpaceParts & Starships release", "Tap-to-earn mini-game", "Leaderboards & referrals", "Starship staking progression"]} />
            <TimelineItem quarter="Phase 4 - Token Launch" items={["$KAIRO utility token launch", "Marketplace for perks & cosmetics", "Cross-community partnerships", "Airdrops to partner communities"]} />
            <TimelineItem quarter="Phase 5 - Expansion" items={["Planet NFTs (BONK, PEPE, WEN)", "Memecoin pool shares", "Burn mechanics for scarcity", "Ecosystem flywheel activation"]} />
            <TimelineItem quarter="Phase 6 - Beyond Year 1" items={["Kairoverse Hub (virtual star map)", "DAO governance", "Ebook: Chronicles of Kairo", "Merch drops & mobile game"]} />
          </div>
        </div>
      </section>

      <NeonDivider label="COMMUNITY" />

      {/* Community */}
      <section id="community" className="relative">
        <div className="mx-auto max-w-7xl px-6 pb-28">
          <motion.div {...fadeUp} className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-semibold text-cyan-400">Join the Kairoverse</h2>
            <p className="text-white/80">Connect with our community across all platforms</p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                  <Twitter className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="mb-2 font-semibold text-cyan-400">X (Twitter)</h3>
                <p className="mb-4 text-sm text-white/70">Follow us on X</p>
                <Button asChild className="w-full">
                  <a href="https://x.com/KairoStarSol" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-4 w-4" /> Follow Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
                  <MessageCircle className="h-6 w-6 text-indigo-400" />
                </div>
                <h3 className="mb-2 font-semibold text-cyan-400">Discord</h3>
                <p className="mb-4 text-sm text-white/70">Join our community server</p>
                <Button asChild className="w-full" variant="secondary">
                  <a href="https://discord.gg/p2TUr2zdwB" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" /> Join Server
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/20">
                  <MessageCircle className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="mb-2 font-semibold text-cyan-400">Telegram</h3>
                <p className="mb-4 text-sm text-white/70">Stay connected on Telegram</p>
                <Button asChild className="w-full" variant="outline">
                  <a href="https://t.me/kairothestarborn" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" /> Join Channel
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/20">
                  <MessageCircle className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="mb-2 font-semibold text-cyan-400">TikTok</h3>
                <p className="mb-4 text-sm text-white/70">Watch our latest content</p>
                <Button asChild className="w-full" variant="outline">
                  <a href="https://www.tiktok.com/@kairosolana" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" /> Follow Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="text-center text-sm text-white/60">
            <p>&copy; {year} Kairo The Starborn. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
