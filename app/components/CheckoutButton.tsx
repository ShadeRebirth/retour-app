"use client";

import { useState } from "react";

export default function CheckoutButton({ label }: { label: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="bg-ochre text-forest font-sans font-semibold text-lg px-8 py-4 rounded-sm w-full sm:w-auto max-w-xs disabled:opacity-60"
    >
      {loading ? "Un instant…" : label}
    </button>
  );
}
