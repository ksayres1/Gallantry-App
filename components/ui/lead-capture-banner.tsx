"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LeadCaptureBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white">
      <div className="container px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <p className="text-sm font-medium">
              🔥 Next KOS Briefing: Every other Thursday 8 PM EST{" "}
              <Link 
                href="/kos-briefings" 
                className="underline hover:no-underline"
              >
                Get Reminders
              </Link>
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 p-0 hover:bg-red-700"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  );
}