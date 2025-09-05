"use client";

import { useWallet } from '@/contexts/WalletContext';
import { useEffect, useState } from 'react';

export function WalletDebug() {
  const { 
    publicKey, 
    connected, 
    connecting,
    wallets,
    connect,
    disconnect
  } = useWallet();
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 border border-white/10 rounded-lg p-4 text-xs text-white max-w-sm">
        <h3 className="font-semibold mb-2">Wallet Debug Info</h3>
        <div className="space-y-1">
          <div>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 border border-white/10 rounded-lg p-4 text-xs text-white max-w-sm">
      <h3 className="font-semibold mb-2">Wallet Debug Info</h3>
      <div className="space-y-1">
        <div>Connected: {connected ? '✅' : '❌'}</div>
        <div>Connecting: {connecting ? '⏳' : '❌'}</div>
        <div>Public Key: {publicKey ? `${publicKey.slice(0, 8)}...` : 'None'}</div>
        <div>Available Wallets: {wallets.length}</div>
        <div className="mt-2">
          <div className="font-semibold">Wallets:</div>
          {wallets.map((w, i) => (
            <div key={i} className="ml-2">
              {w.name} - {w.readyState}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

