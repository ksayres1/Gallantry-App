import Link from "next/link";
import { ArrowRight, Calendar, Users, Video, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { continuum } from "@/lib/content";

export const metadata = {
  title: "Discipleship Continuum - Gallantry",
  description: "From a catalytic day to a consistent way of life. Follow the journey from Unfiltered to City Integration.",
};

const stepIcons = [Calendar, Users, Video, MapPin, Building];

export default function ContinuumPage() {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-16">
        <Badge className="mb-4">The Journey</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          The Discipleship <span className="text-red-600">Continuum</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From a catalytic day to a consistent way of life. This isn't just an event—it's a pathway 
          that transforms men and deploys them to transform their communities.
        </p>
      </div>

      {/* Timeline View */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <div className="flex-1 h-0.5 bg-border"></div>
            {continuum.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-red-600 border-4 border-background shadow-md"></div>
                {index < continuum.length - 1 && (
                  <div className="flex-1 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
            <div className="flex-1 h-0.5 bg-border"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {continuum.map((step, index) => {
              const Icon = stepIcons[index];
              
              return (
                <div key={step.title} className="relative">
                  {/* Mobile Timeline Indicator */}
                  <div className="lg:hidden flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
                    <Badge variant="outline">Step {index + 1}</Badge>
                  </div>

                  <Card className="border-2 h-full">
                    <CardHeader>
                      <div className="hidden lg:flex justify-center mb-4">
                        <Badge variant="outline">Step {index + 1}</Badge>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        <div className="p-3 rounded-xl bg-red-600/10">
                          <Icon className="h-8 w-8 text-red-600" />
                        </div>
                      </div>
                      <CardTitle className="text-xl text-center">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-center mb-6 text-base">
                        {step.description}
                      </CardDescription>
                      <Button className="w-full" asChild>
                        <Link href={step.href}>
                          {step.cta} <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each step builds on the last, creating a comprehensive discipleship journey 
            that moves men from catalytic moments to consistent transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-red-600" />
                  <CardTitle>Gallantry Unfiltered</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• One-day intensive gatherings</li>
                  <li>• Multi-city simultaneous events</li>
                  <li>• Scripture-centered teaching</li>
                  <li>• BOARD group formation</li>
                  <li>• Live cross-city connections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Video className="h-6 w-6 text-red-600" />
                  <CardTitle>Ongoing Discipleship</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• YouTube Boardroom teachings</li>
                  <li>• KOS Briefings every other Thursday</li>
                  <li>• Local meet-up coordination</li>
                  <li>• Resource sharing and support</li>
                  <li>• Continuous accountability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 text-red-600" />
                  <CardTitle>City Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Local church partnerships</li>
                  <li>• Community leadership development</li>
                  <li>• Family discipleship expansion</li>
                  <li>• Regional network building</li>
                  <li>• Sustainable impact creation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-red-600" />
                  <CardTitle>BOARD Groups</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Bereans Of Accountability, Reconciliation, Discipleship</li>
                  <li>• Weekly or bi-weekly meetings</li>
                  <li>• Scripture study and application</li>
                  <li>• Personal accountability partnerships</li>
                  <li>• Prayer and spiritual warfare</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-red-600" />
                  <CardTitle>Tour/Roundtables</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Catalytic on-location experiences</li>
                  <li>• Church and organization partnerships</li>
                  <li>• Leadership training intensives</li>
                  <li>• Local discipleship launch</li>
                  <li>• Custom content and focus</li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-2 bg-gradient-to-br from-red-600/5 to-black/5">
              <CardHeader>
                <CardTitle>Ready to Start Your Journey?</CardTitle>
                <CardDescription>
                  Don't wait for the perfect moment. The brotherhood is waiting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <Link href="/unfiltered">
                      Join Next Unfiltered Event
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/roundtables">
                      Find Local BOARD Group
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}