import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Users, Crown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";
import { pillars, continuum, featuredMerch, siteConfig } from "@/lib/content";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="outline" className="mb-4">
                Discipleship War Room
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="text-red-600">Gallantry:</span> Men Forged for{" "}
                <span className="block">Accountability, Discipleship,</span>
                <span className="block">and Real Brotherhood</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We gather men into BOARD groups that sharpen conviction, character, and courage—then send them out to lead in faith, family, and community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tour">
                  Request the Tour <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/roundtables">
                  Host a Roundtable
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/kos-briefings" className="hover:underline">
                Get KOS Reminders
              </Link>
              <Link href="/videos" className="hover:underline">
                Subscribe on YouTube
              </Link>
              <Link href="/store" className="hover:underline">
                Shop Merch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The 3 Pillars of Gallantry
            </h2>
            <p className="text-xl text-muted-foreground">
              From the Field Guide: Foundation for authentic discipleship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const icons = [Shield, Users, Crown];
              const Icon = icons[index];
              
              return (
                <Card key={pillar.title} className="relative overflow-hidden border-2">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 rounded-lg bg-red-600/10">
                        <Icon className="h-6 w-6 text-red-600" />
                      </div>
                      <Badge variant="outline">Pillar {index + 1}</Badge>
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-foreground">
                      {pillar.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {pillar.description}
                    </p>
                    <blockquote className="border-l-4 border-red-600 pl-4 italic text-sm text-muted-foreground">
                      {pillar.scripture}
                    </blockquote>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/pillars">
                Explore All Pillars <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Continuum Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The Discipleship Continuum
            </h2>
            <p className="text-xl text-muted-foreground">
              From a catalytic day to a consistent way of life
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
              {continuum.map((step, index) => (
                <div key={step.title} className="relative">
                  {index < continuum.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border z-0">
                      <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-muted-foreground" />
                    </div>
                  )}
                  <Card className="relative z-10 border-2">
                    <CardHeader className="pb-2">
                      <div className="text-center mb-2">
                        <Badge variant="outline">Step {index + 1}</Badge>
                      </div>
                      <CardTitle className="text-lg text-center">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground text-center mb-4">
                        {step.description}
                      </p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={step.href}>
                          {step.cta}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/continuum">
                View Full Continuum <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Merch Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Featured Gear
            </h2>
            <p className="text-xl text-muted-foreground">
              Represent the brotherhood with purpose
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredMerch.map((item) => (
              <Card key={item.name} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-red-600">{item.price}</span>
                      <Button size="sm" asChild>
                        <Link href={siteConfig.storeUrl} target="_blank">
                          Shop <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/store">
                View All Gear <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Brotherhood Testimonies
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from men who've been transformed
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialsCarousel />
          </div>
        </div>
      </section>

      {/* Next Events Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What's Next
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't miss the next opportunity to grow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge className="mr-3">Live</Badge>
                  KOS Briefing
                </CardTitle>
                <CardDescription>
                  Next session: Every other Thursday 8 PM EST
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join live on YouTube for unfiltered teaching and accountability check-ins.
                </p>
                <Button asChild>
                  <Link href="/kos-briefings">
                    Get Reminders
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-3">Regional</Badge>
                  Next Roundtable
                </CardTitle>
                <CardDescription>
                  Find your local BOARD group
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Connect with men in your area for ongoing discipleship and accountability.
                </p>
                <Button asChild>
                  <Link href="/roundtables">
                    Host a Roundtable
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}