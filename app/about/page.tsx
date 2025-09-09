import Image from "next/image";
import { Shield, Users, Crown, Target, Book, Sword } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = {
  title: "About Gallantry - Mission & Philosophy",
  description: "Learn about Gallantry's mission to forge men, build brotherhood, and advance the Kingdom through authentic discipleship.",
};

const philosophyItems = [
  {
    title: "Scripture-Anchored Teaching",
    content: "Every teaching, every gathering, every conversation is rooted in the uncompromising truth of God's Word. We don't adjust Scripture to fit culture—we call men to align their lives with biblical truth."
  },
  {
    title: "Authentic Accountability",
    content: "Brotherhood isn't a social club—it's iron sharpening iron. We create environments where men can be honest about their struggles, receive genuine support, and experience real transformation."
  },
  {
    title: "Practical Discipleship",
    content: "Discipleship isn't theoretical. We equip men with practical tools, frameworks, and ongoing support to live out their faith in their families, churches, and communities."
  },
  {
    title: "Multi-Generational Impact",
    content: "We're not just changing individual men—we're transforming families, churches, and communities. The goal is Kingdom impact that spans generations."
  }
];

const nonNegotiables = [
  {
    title: "Biblical Authority",
    content: "Scripture is our final authority in all matters of faith and practice. We don't compromise biblical truth for cultural acceptance or personal comfort."
  },
  {
    title: "Holiness Over Happiness",
    content: "We call men to pursue holiness, even when it's difficult. Character formation takes precedence over temporary comfort or convenience."
  },
  {
    title: "Accountability Over Affirmation",
    content: "True brotherhood speaks truth in love, even when it's hard to hear. We prioritize growth over feelings and transformation over temporary peace."
  },
  {
    title: "Kingdom Mission",
    content: "Everything we do serves the greater mission of advancing God's Kingdom. Personal growth is always connected to Kingdom impact and service to others."
  }
];

export default function AboutPage() {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-16">
        <Badge className="mb-4">Our Mission</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          About <span className="text-red-600">Gallantry</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We exist to forge men through Scripture-anchored discipleship, build authentic brotherhood 
          through accountability, and advance the Kingdom through transformed lives and communities.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Mission Statement */}
        <section>
          <Card className="border-2 bg-gradient-to-br from-red-600/5 to-black/5">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Mission Statement</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="mx-auto p-4 rounded-full bg-red-600/10 w-fit">
                    <Shield className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Forge the Man</h3>
                  <p className="text-muted-foreground">
                    Through truth-centered biblical teaching, we train men to be discipled 
                    and to disciple others, calling them to holiness, integrity, and servant leadership.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="mx-auto p-4 rounded-full bg-red-600/10 w-fit">
                    <Users className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Build the Brotherhood</h3>
                  <p className="text-muted-foreground">
                    Brotherhood isn't a vibe—it's accountability. Through BOARD groups, 
                    gatherings, and ongoing support, we create authentic community that transforms lives.
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="mx-auto p-4 rounded-full bg-red-600/10 w-fit">
                    <Crown className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold">Advance the Kingdom</h3>
                  <p className="text-muted-foreground">
                    From your family to your city, we deploy trained men to lead transformation 
                    in their communities through Tours, Roundtables, and ongoing discipleship.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Philosophy */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core beliefs shape everything we do, from our teaching approach 
              to our community structure and Kingdom mission.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {philosophyItems.map((item, index) => (
              <AccordionItem key={index} value={`philosophy-${index}`} className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-red-600/10">
                      {index === 0 && <Book className="h-5 w-5 text-red-600" />}
                      {index === 1 && <Users className="h-5 w-5 text-red-600" />}
                      {index === 2 && <Target className="h-5 w-5 text-red-600" />}
                      {index === 3 && <Crown className="h-5 w-5 text-red-600" />}
                    </div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground leading-relaxed ml-12">
                    {item.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Non-Negotiables */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Non-Negotiables</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles are foundational to who we are and will never be compromised 
              for cultural acceptance or personal comfort.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {nonNegotiables.map((item, index) => (
              <AccordionItem key={index} value={`non-negotiable-${index}`} className="border-2 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-red-600/10">
                      <Sword className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-semibold">{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-2">
                  <p className="text-muted-foreground leading-relaxed ml-12">
                    {item.content}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Photo Gallery */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Brotherhood in Action</h2>
            <p className="text-lg text-muted-foreground">
              Moments from Gallantry Unfiltered gatherings and BOARD group meetings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-2">
              <div className="aspect-video relative">
                <Image
                  src="/hoodie front.webp"
                  alt="Brotherhood gathering - men in fellowship"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
            <Card className="overflow-hidden border-2">
              <div className="aspect-video relative">
                <Image
                  src="/hoodie sleeve.webp"
                  alt="Gallantry Unfiltered event - teaching session"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
            <Card className="overflow-hidden border-2">
              <div className="aspect-video relative">
                <Image
                  src="/t shirt.webp"
                  alt="BOARD group meeting - accountability in action"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
            <Card className="overflow-hidden border-2">
              <div className="aspect-video relative">
                <Image
                  src="/men journal.webp"
                  alt="Men's discipleship tools and resources"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
            <Card className="overflow-hidden border-2">
              <div className="aspect-video relative bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span>Prayer & Accountability Session</span>
                </div>
              </div>
            </Card>
            <Card className="overflow-hidden border-2">
              <div className="aspect-video relative bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span>Multi-City Live Connection</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <Card className="border-2 bg-gradient-to-br from-red-600/5 to-black/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Join the Mission?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Gallantry isn't just about personal growth—it's about Kingdom transformation. 
                Join men who are committed to authentic discipleship and real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/tour" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                >
                  Request a Tour
                </a>
                <a 
                  href="/roundtables" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                >
                  Host a BOARD Group
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}