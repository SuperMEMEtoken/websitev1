"use client";

import { useWallet } from '@/contexts/WalletContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wallet, Coins, TrendingUp, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function WalletInfo() {
  const { connected, publicKey, solBalance, kairoBalance } = useWallet();
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    if (publicKey) {
      await navigator.clipboard.writeText(publicKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getShortAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (!connected || !publicKey) {
    return null;
  }

  return (
    <Card className="border-white/10 bg-white/5">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-500/20 p-2 ring-1 ring-cyan-500/30">
              <Wallet className="h-5 w-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Wallet Connected</h3>
              <p className="text-sm text-white/70">{getShortAddress(publicKey)}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
              Connected
            </Badge>
            <button
              onClick={copyAddress}
              className="rounded-lg p-1.5 hover:bg-white/10 transition-colors"
              title="Copy address"
            >
              <Copy className="h-4 w-4 text-white/70" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-lg bg-purple-500/20 p-1.5">
                <Coins className="h-4 w-4 text-purple-400" />
              </div>
              <span className="text-sm text-white/70">SOL Balance</span>
            </div>
            <div className="text-xl font-semibold text-white">
              {solBalance.toFixed(4)} SOL
            </div>
            <div className="text-xs text-white/50">
              ≈ ${(solBalance * 95.50).toFixed(2)} USD
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-lg bg-cyan-500/20 p-1.5">
                <TrendingUp className="h-4 w-4 text-cyan-400" />
              </div>
              <span className="text-sm text-white/70">KAIRO Balance</span>
            </div>
            <div className="text-xl font-semibold text-white">
              {kairoBalance.toLocaleString()} KAIRO
            </div>
            <div className="text-xs text-white/50">
              ≈ ${(kairoBalance * 0.025).toFixed(2)} USD
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-white/10">
          <div className="flex items-center justify-between text-xs text-white/50">
            <span>Network: Solana Devnet</span>
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
