import Link from "next/link";
import { Calendar, Users, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/content";

export const metadata = {
  title: "Gallantry Unfiltered - Annual Multi-City Gathering",
  description: "The annual, multi-city, one-day catalytic gathering that forges men and forms BOARD Groups. Raw, Scripture-anchored teaching.",
};

export default function UnfilteredPage() {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-16">
        <Badge className="mb-4">Annual Gathering</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Gallantry <span className="text-red-600">Unfiltered</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The annual, multi-city, one-day catalytic gathering that forges men and forms BOARD Groups. 
          Raw, Scripture-anchored teaching that cuts through the noise and calls men to authentic discipleship.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - What It Is */}
          <div className="space-y-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-red-600 mr-3" />
                  What Is Gallantry Unfiltered?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A one-day intensive that doesn't pull punches. We gather men simultaneously 
                  across multiple cities for raw, biblical teaching that forges conviction, 
                  character, and courage.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm">Multi-city simultaneous gatherings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm">Live cross-city connections</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm">BOARD group formation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm">Unfiltered biblical teaching</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  Current Cities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {["Rochester, NY", "Charlotte, NC", "Dallas, TX"].map((city) => (
                    <div key={city} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="font-medium">{city}</span>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Don't see your city? Request a Tour to bring Gallantry to your area.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Next Event */}
          <div className="space-y-8">
            <Card className="border-2 bg-gradient-to-br from-red-600/5 to-black/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-6 w-6 text-red-600 mr-3" />
                  Next Unfiltered Event
                </CardTitle>
                <CardDescription>
                  Stay connected for the next gathering announcement
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-background rounded-lg border">
                  <h3 className="text-2xl font-bold mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">
                    The next Gallantry Unfiltered event is being planned. 
                    Get notified when registration opens.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/kos-briefings">
                      Get Event Notifications
                    </Link>
                  </Button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">What to Expect:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• 6-8 hours of intensive discipleship training</li>
                    <li>• Live teaching from multiple locations</li>
                    <li>• BOARD group formation and training</li>
                    <li>• Practical tools for ongoing discipleship</li>
                    <li>• Connection to the broader brotherhood</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>After Unfiltered</CardTitle>
                <CardDescription>
                  The event is just the beginning
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Gallantry Unfiltered catalyzes ongoing discipleship through BOARD groups, 
                  YouTube Boardroom teachings, and local meet-ups. The goal isn't just a 
                  great day—it's a transformed life.
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="outline" asChild>
                    <Link href="/videos">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Subscribe to YouTube Boardroom
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

        {/* Bottom CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready for Unfiltered Truth?</h2>
              <p className="text-muted-foreground mb-6">
                Don't wait for the perfect moment. The brotherhood is being forged now.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/tour">
                    Request Tour for Your City
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