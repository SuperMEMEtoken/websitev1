"use client";

import { useWallet } from '@/contexts/WalletContext';
import { Button } from '@/components/ui/button';
import { Wallet, User, Copy } from 'lucide-react';
import { useState } from 'react';

export function WalletConnect() {
  const { publicKey, connected, connecting, connect, disconnect } = useWallet();
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    if (publicKey) {
      await navigator.clipboard.writeText(publicKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getShortAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (connected && publicKey) {
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20">
            <User className="h-4 w-4 text-cyan-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-white/70">Connected</span>
            <span className="text-sm font-medium text-white">
              {getShortAddress(publicKey)}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyAddress}
            className="h-6 w-6 p-0 hover:bg-white/10"
          >
            <Copy className="h-3 w-3" />
          </Button>
        </div>
        <Button
          onClick={disconnect}
          variant="outline"
          className="bg-transparent border-white/10 text-white hover:bg-white/10 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
        >
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={connect}
        disabled={connecting}
        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0 rounded-lg px-6 py-2 text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        <Wallet className="mr-2 h-4 w-4" />
        {connecting ? 'Connecting...' : 'Connect Wallet'}
      </Button>
    </div>
  );
}
