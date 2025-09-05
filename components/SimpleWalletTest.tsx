"use client";

import { useWallet } from '@/contexts/WalletContext';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function SimpleWalletTest() {
  const { connected, publicKey, connecting, connect } = useWallet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-4 left-4 bg-black/80 border border-white/10 rounded-lg p-4 text-white z-50">
        <h3 className="font-semibold mb-2">Simple Wallet Test</h3>
        <div className="space-y-2">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-4 left-4 bg-black/80 border border-white/10 rounded-lg p-4 text-white z-50">
      <h3 className="font-semibold mb-2">Simple Wallet Test</h3>
      <div className="space-y-2">
        <div>Connected: {connected ? '✅' : '❌'}</div>
        <div>Connecting: {connecting ? '⏳' : '❌'}</div>
        <div>Public Key: {publicKey ? `${publicKey.slice(0, 8)}...` : 'None'}</div>
        <div className="mt-3">
          <Button
            onClick={connect}
            disabled={connecting}
            className="bg-blue-500 hover:bg-blue-600 text-white border-0 rounded-lg px-4 py-2"
          >
            {connecting ? 'Connecting...' : 'Connect Wallet'}
          </Button>
        </div>
      </div>
    </div>
  );
}
