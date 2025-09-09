import Link from "next/link";
import { ExternalLink, Youtube, Mail } from "lucide-react";
import { siteConfig, regions } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-bold">{siteConfig.brandName}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Men forged for accountability, discipleship, and real brotherhood.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/tour" className="hover:underline">Request Tour</Link>
              <Link href="/roundtables" className="hover:underline">Join Roundtable</Link>
              <Link href="/kos-briefings" className="hover:underline">KOS Briefings</Link>
              <Link href="/videos" className="hover:underline">Watch Videos</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">External Links</h3>
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" asChild className="justify-start h-auto p-0">
                <Link 
                  href={siteConfig.websiteUrl} 
                  target="_blank"
                  className="text-sm hover:underline flex items-center"
                >
                  Website <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start h-auto p-0">
                <Link 
                  href={siteConfig.storeUrl} 
                  target="_blank"
                  className="text-sm hover:underline flex items-center"
                >
                  Store <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
              <Button variant="ghost" asChild className="justify-start h-auto p-0">
                <Link 
                  href={siteConfig.youtubeChannel} 
                  target="_blank"
                  className="text-sm hover:underline flex items-center"
                >
                  <Youtube className="mr-1 h-3 w-3" />
                  YouTube
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="space-y-2">
              <Button variant="ghost" asChild className="justify-start h-auto p-0">
                <Link 
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-sm hover:underline flex items-center"
                >
                  <Mail className="mr-1 h-3 w-3" />
                  {siteConfig.contactEmail}
                </Link>
              </Button>
              <div className="flex flex-wrap gap-1 mt-2">
                {regions.map((region) => (
                  <Badge key={region.city} variant="outline" className="text-xs">
                    {region.city}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
            </p>
            <nav className="flex gap-4 text-sm">
              <Link href="/privacy" className="hover:underline">Privacy</Link>
              <Link href="/terms" className="hover:underline">Terms</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}