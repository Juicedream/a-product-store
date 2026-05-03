// lib/hooks/useLastSeen.ts
import { useEffect, useState } from "react";
import { storage } from "../storage";

const LAST_SEEN_KEY = "lastSeenAt";

function formatLastSeen(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);

  // Under 1 minute — just now
  if (diffSeconds < 60) {
    return "Just now";
  }

  // Under 1 hour — X minutes ago
  if (diffMinutes < 60) {
    return `${diffMinutes} ${diffMinutes === 1 ? "minute" : "minutes"} ago`;
  }

  // Under 24 hours — X hours ago
  if (diffHours < 24) {
    return `${diffHours} ${diffHours === 1 ? "hour" : "hours"} ago`;
  }

  // Under 7 days — X days ago
  if (diffDays < 2) {
    return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
  }

  // Older than 2 days — show full date e.g. Sunday, 3 May, 2026 at 12:04PM
  return (
    date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }) +
    " at " +
    date
      .toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .toUpperCase()
  );
}

export function useLastSeen() {
  const [lastSeen, setLastSeen] = useState<string | null>(null);
  const [formatted, setFormatted] = useState<string>("");

  // On mount, read last seen and then save current time as new last seen
  useEffect(() => {
    function handleSetLastSeen() {
      const stored = storage.get(LAST_SEEN_KEY);
      if (stored) {
        setLastSeen(stored);
        setFormatted(formatLastSeen(stored));
      }
    }
    handleSetLastSeen();

    // Save current time as the new last seen
    // const now = new Date().toISOString();
    // storage.set(LAST_SEEN_KEY, now);
  }, []);

  // Update the formatted string every minute so "X minutes ago" stays accurate
  useEffect(() => {
    if (!lastSeen) return;

    const interval = setInterval(() => {
      setFormatted(formatLastSeen(lastSeen));
    }, 60 * 1000); // every minute

    return () => clearInterval(interval);
  }, [lastSeen]);

  return { formatted, lastSeen };
}
