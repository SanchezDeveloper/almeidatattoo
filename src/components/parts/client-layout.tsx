"use client"; // Marcar como Client Component

import { useState, useEffect } from "react";
import Loader from "@/components/parts/loader"; // Indicador de carregamento

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // Simula carregamento de 1s
    return () => clearTimeout(timeout);
  }, []);

  return loading ? <Loader /> : children;
}
