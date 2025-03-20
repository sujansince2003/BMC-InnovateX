"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
// Define the Ad type
interface Ad {
  id: string;
  imageUrl: string;
  linkUrl: string;
  priority: 1 | 2 | 3 | 4 | 5; // Priority from 1 (lowest) to 5 (highest)
}

// Sample ad data
const sampleAds: Ad[] = [
  {
    id: "ad1",
    imageUrl: "/placeholder.svg?height=300&width=500",
    linkUrl: "https://example.com/premium",
    priority: 5,
  },
  {
    id: "ad2",
    imageUrl: "/placeholder.svg?height=300&width=500",
    linkUrl: "https://example.com/special",
    priority: 4,
  },
  {
    id: "ad3",
    imageUrl: "/placeholder.svg?height=300&width=500",
    linkUrl: "https://example.com/new",
    priority: 3,
  },
  {
    id: "ad4",
    imageUrl: "/placeholder.svg?height=300&width=500",
    linkUrl: "https://example.com/limited",
    priority: 2,
  },
  {
    id: "ad5",
    imageUrl: "/placeholder.svg?height=300&width=500",
    linkUrl: "https://example.com/basic",
    priority: 1,
  },
];

// Function to select a random ad based on priority
const selectRandomAdByPriority = (ads: Ad[]): Ad => {
  // Create a weighted array based on priority
  const weightedAds: Ad[] = [];

  ads.forEach((ad) => {
    // Add the ad to the array multiple times based on its priority
    // Higher priority = more occurrences = higher chance of selection
    for (let i = 0; i < ad.priority; i++) {
      weightedAds.push(ad);
    }
  });

  // Select a random ad from the weighted array
  const randomIndex = Math.floor(Math.random() * weightedAds.length);
  return weightedAds[randomIndex];
};

interface AdPopupProps {
  delay?: number;
  ads?: Ad[];
}

export function AdPopup({ delay = 3000, ads = sampleAds }: AdPopupProps) {
  const [open, setOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null);

  useEffect(() => {
    const ad = selectRandomAdByPriority(ads);
    setSelectedAd(ad);
    setOpen(true);
  }, [delay, ads]);

  const handleImageClick = () => {
    if (selectedAd?.linkUrl) {
      window.open(selectedAd.linkUrl, "_blank");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <VisuallyHidden>
        <DialogTitle>Advertisiment</DialogTitle>
      </VisuallyHidden>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        {selectedAd && (
          <div className="relative">
            {/* Close button positioned in the top-right corner */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 z-10"
            >
              <X className="h-4 w-4 text-white" />
            </Button>

            {/* Clickable image */}
            <div onClick={handleImageClick} className="cursor-pointer">
              <Image
                src={
                  "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                }
                alt="Advertisement"
                width={1000}
                height={1000}
                className="w-full object-cover"
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
