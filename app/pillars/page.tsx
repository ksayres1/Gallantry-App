import { Shield, Users, Crown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pillars } from "@/lib/content";

export const metadata = {
  title: "The 3 Pillars - Gallantry",
  description: "Forge the Man, Build the Brotherhood, Advance the Kingdom - the foundational principles of Gallantry discipleship.",
};

export default function PillarsPage() {
  const icons = [Shield, Users, Crown];

  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-16">
        <Badge className="mb-4">From the Field Guide</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          The 3 Pillars of <span className="text-red-600">Gallantry</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          These aren't just ideas—they're the foundation for authentic discipleship. 
          Every BOARD group, every gathering, every conversation is anchored in these truths.
        </p>
      </div>

      <div className="space-y-16">
        {pillars.map((pillar, index) => {
          const Icon = icons[index];
          const isEven = index % 2 === 0;
          
          return (
            <div key={pillar.title} className="max-w-6xl mx-auto">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-row-dense' : ''}`}>
                <div className={isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-1'}>
                  <Card className="border-2 bg-gradient-to-br from-background to-muted/30">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 rounded-xl bg-red-600/10">
                          <Icon className="h-8 w-8 text-red-600" />
                        </div>
                        <Badge variant="outline" className="text-sm">
                          Pillar {index + 1}
                        </Badge>
                      </div>
                      <CardTitle className="text-3xl">{pillar.title}</CardTitle>
                      <CardDescription className="text-xl font-medium text-foreground">
                        {pillar.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-lg leading-relaxed">
                        {pillar.description}
                      </p>
                      <blockquote className="border-l-4 border-red-600 pl-6 py-4 bg-muted/50 rounded-r-lg">
                        <p className="italic text-muted-foreground font-medium">
                          "{pillar.scripture}"
                        </p>
                      </blockquote>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="text-8xl font-bold text-red-600/10 text-center">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="space-y-4 text-muted-foreground">
                      {index === 0 && (
                        <div className="space-y-3">
                          <p>• Scripture-centered teaching that cuts through cultural noise</p>
                          <p>• Training men to both receive and give discipleship</p>
                          <p>• Calling men to holiness without compromise</p>
                          <p>• Developing integrity in private and public leadership</p>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="space-y-3">
                          <p>• Annual Gallantry Unfiltered gatherings across multiple cities</p>
                          <p>• BOARD Groups that meet regularly for accountability</p>
                          <p>• Prayer partnerships that go beyond surface level</p>
                          <p>• Support systems that challenge and encourage growth</p>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="space-y-3">
                          <p>• Gallantry Tours that bring discipleship to your location</p>
                          <p>• Roundtables that equip men for local impact</p>
                          <p>• YouTube Boardroom for ongoing teaching and alignment</p>
                          <p>• City integration that transforms communities</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-20">
        <Card className="max-w-2xl mx-auto border-2">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Build on This Foundation?</h2>
            <p className="text-muted-foreground mb-6">
              These pillars aren't theoretical. They're lived out in BOARD groups, 
              sharpened through accountability, and deployed in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/roundtables" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                Join a BOARD Group
              </a>
              <a 
                href="/tour" 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              >
                Request a Tour
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}