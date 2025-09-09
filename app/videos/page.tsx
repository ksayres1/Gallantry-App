import Link from "next/link";
import { Youtube, ExternalLink, Play, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: "YouTube Boardroom - Gallantry Videos",
  description: "Subscribe to The Gallantry BOARD Room for unfiltered discipleship teaching and alignment. This is our discipleship war room.",
};

export default function VideosPage() {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-16">
        <Badge className="mb-4">Discipleship War Room</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          YouTube <span className="text-red-600">Boardroom</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          This is our discipleship war room. Subscribe for unfiltered teaching, 
          KOS Briefings, and alignment that keeps the brotherhood sharp and focused.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Welcome Video */}
        <div className="mb-16">
          <Card className="border-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-black flex items-center justify-center">
                <iframe
                  src="https://www.youtube.com/embed/UafLyNkrqds?si=-8vCamYkGSJFK8ME"
                  title="Welcome to Gallantry - YouTube video player"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Welcome to Gallantry</h2>
                    <p className="text-muted-foreground">
                      Get introduced to the brotherhood and our mission
                    </p>
                  </div>
                  <Button size="lg" asChild>
                    <a href={siteConfig.youtubeChannel} target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-5 w-5" />
                      Subscribe to Channel
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-lg bg-red-600/10">
                  <Play className="h-6 w-6 text-red-600" />
                </div>
                <Badge variant="outline">Live</Badge>
              </div>
              <CardTitle>KOS Briefings</CardTitle>
              <CardDescription>
                Live every other Thursday at 8 PM EST
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Kingdom Operating System briefings with unfiltered teaching, 
                accountability check-ins, and real-time brotherhood connection.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/kos-briefings">
                  <Bell className="mr-2 h-4 w-4" />
                  Get Reminders
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-lg bg-red-600/10">
                  <Youtube className="h-6 w-6 text-red-600" />
                </div>
                <Badge variant="outline">Series</Badge>
              </div>
              <CardTitle>Teaching Series</CardTitle>
              <CardDescription>
                Deep dives into Scripture and discipleship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Comprehensive teaching series that build on the 3 Pillars: 
                Forge the Man, Build the Brotherhood, Advance the Kingdom.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href={siteConfig.youtubeChannel} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Browse Series
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 rounded-lg bg-red-600/10">
                  <Play className="h-6 w-6 text-red-600" />
                </div>
                <Badge variant="outline">Events</Badge>
              </div>
              <CardTitle>Event Recordings</CardTitle>
              <CardDescription>
                Gallantry Unfiltered and Tour highlights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Key moments from Gallantry Unfiltered gatherings, Tours, 
                and other catalytic events that forge men and build brotherhood.
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href={siteConfig.youtubeChannel} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Watch Events
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Why Subscribe Section */}
        <div className="text-center mb-16">
          <Card className="max-w-4xl mx-auto border-2 bg-gradient-to-br from-red-600/5 to-black/5">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">Why Subscribe?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Unfiltered Truth</h4>
                      <p className="text-sm text-muted-foreground">Scripture-anchored teaching that doesn't compromise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Consistent Discipleship</h4>
                      <p className="text-sm text-muted-foreground">Regular content that keeps you growing and accountable</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Brotherhood Connection</h4>
                      <p className="text-sm text-muted-foreground">Connect with men across cities and regions</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">BOARD Group Resources</h4>
                      <p className="text-sm text-muted-foreground">Content designed for local group study and discussion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Live Interaction</h4>
                      <p className="text-sm text-muted-foreground">Real-time Q&A and accountability during live sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold">Kingdom Impact</h4>
                      <p className="text-sm text-muted-foreground">Training that deploys you to transform your community</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href={siteConfig.youtubeChannel} target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-5 w-5" />
                    Subscribe to the Boardroom
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Join the War Room?</h2>
              <p className="text-muted-foreground mb-6">
                Don't just consume content—engage with the brotherhood. Subscribe, 
                participate in live sessions, and connect with BOARD groups in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/kos-briefings">
                    Get KOS Reminders
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/roundtables">
                    Host a BOARD Group
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}