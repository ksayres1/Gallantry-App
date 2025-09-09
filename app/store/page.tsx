import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { featuredMerch, siteConfig } from "@/lib/content";

export const metadata = {
  title: "Gallantry Store - Brotherhood Gear",
  description: "Represent the brotherhood with purpose. Shop custom city t-shirts, hoodies, and men's discipleship journals.",
};

export default function StorePage() {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-16">
        <Badge className="mb-4">Brotherhood Gear</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Gallantry <span className="text-red-600">Store</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Represent the brotherhood with purpose. Every purchase supports the mission 
          of forging men, building brotherhood, and advancing the Kingdom.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Featured Products */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Gear</h2>
            <p className="text-lg text-muted-foreground">
              Essential items for the discipleship journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMerch.map((item) => (
              <Card key={item.name} className="border-2 overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-600">{item.price}</span>
                      <Button asChild>
                        <Link href={siteConfig.storeUrl} target="_blank">
                          Shop Now <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Store Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-lg text-muted-foreground">
              Find gear that represents your commitment to the brotherhood
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-red-600/10">
                  <ShoppingBag className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>Apparel</CardTitle>
                <CardDescription>T-shirts, hoodies, and brotherhood gear</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-red-600/10">
                  <ShoppingBag className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>Journals</CardTitle>
                <CardDescription>Discipleship and accountability journals</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-red-600/10">
                  <ShoppingBag className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>City Gear</CardTitle>
                <CardDescription>Custom items for Rochester, Charlotte, Dallas</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-red-600/10">
                  <ShoppingBag className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle>Resources</CardTitle>
                <CardDescription>Books, guides, and discipleship tools</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="border-2 bg-gradient-to-br from-red-600/5 to-black/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">More Than Merchandise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Every item in our store represents a commitment to the 3 Pillars of Gallantry. 
                When you wear our gear, you're not just representing a brand—you're representing 
                a brotherhood committed to authentic discipleship and Kingdom impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-600">Forge the Man</h4>
                  <p className="text-sm text-muted-foreground">
                    Gear that reminds you of your commitment to holiness and growth
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-600">Build the Brotherhood</h4>
                  <p className="text-sm text-muted-foreground">
                    Items that connect you to men across cities and regions
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-red-600">Advance the Kingdom</h4>
                  <p className="text-sm text-muted-foreground">
                    Tools that equip you for discipleship and community impact
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Represent?</h2>
              <p className="text-muted-foreground mb-6">
                Browse our full collection and find gear that reflects your commitment 
                to the brotherhood and the mission of Gallantry.
              </p>
              <Button size="lg" asChild>
                <Link href={siteConfig.storeUrl} target="_blank">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Shop Full Collection
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}