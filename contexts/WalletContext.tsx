"use client";

import React, { FC, ReactNode, createContext, useContext, useState, useEffect } from 'react';

interface WalletContextType {
  connected: boolean;
  publicKey: string | null;
  connecting: boolean;
  wallets: Array<{ name: string; readyState: string }>;
  solBalance: number;
  kairoBalance: number;
  connect: () => void;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletContextProviderProps {
  children: ReactNode;
}

export const WalletContextProvider: FC<WalletContextProviderProps> = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [solBalance, setSolBalance] = useState(0);
  const [kairoBalance, setKairoBalance] = useState(0);

  const wallets = [
    { name: 'Phantom', readyState: 'Installed' },
    { name: 'Solflare', readyState: 'Installed' },
    { name: 'Torus', readyState: 'Installed' },
  ];

  const connect = () => {
    setConnecting(true);
    // Simulate wallet connection
    setTimeout(() => {
      setConnected(true);
      setPublicKey('Demo123...456');
      setSolBalance(2.45); // Simulated SOL balance
      setKairoBalance(1250.75); // Simulated KAIRO balance
      setConnecting(false);
    }, 1000);
  };

  const disconnect = () => {
    setConnected(false);
    setPublicKey(null);
    setSolBalance(0);
    setKairoBalance(0);
  };

  return (
    <WalletContext.Provider value={{
      connected,
      publicKey,
      connecting,
      wallets,
      solBalance,
      kairoBalance,
      connect,
      disconnect
    }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletContextProvider');
  }
  return context;
};
