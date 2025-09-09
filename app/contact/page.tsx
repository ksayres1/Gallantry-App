"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { SuccessDialog } from "@/components/ui/success-dialog";
import { contactSchema, type Contact } from "@/lib/schemas";
import { regions, siteConfig } from "@/lib/content";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: Contact) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Failed to submit');

      reset();
      setShowSuccess(true);
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4">Get in Touch</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Contact <span className="text-red-600">Gallantry</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Ready to bring discipleship to your area? Have questions about BOARD groups? 
          Want to connect with the brotherhood? We're here to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Regions */}
          <div className="space-y-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-6 w-6 text-red-600 mr-3" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="text-red-600 hover:underline"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a 
                      href={siteConfig.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:underline"
                    >
                      overcomeworldwide.org
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  Regional Hubs
                </CardTitle>
                <CardDescription>
                  Connect with BOARD groups in these cities
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {regions.map((region) => (
                  <div key={region.city} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{region.city}</h4>
                      <Badge variant="outline">Active</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {region.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {region.contact}
                    </p>
                  </div>
                ))}
                <div className="p-4 bg-gradient-to-br from-red-600/5 to-black/5 rounded-lg border">
                  <h4 className="font-semibold mb-2">Don't See Your City?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We're expanding to new regions. Request a Tour or inquire about 
                    hosting a BOARD group in your area.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="/tour">Request Tour</a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href="/roundtables">Host BOARD Group</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out this form and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic *</Label>
                    <Select onValueChange={(value) => setValue("topic", value as any)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="tour">Tour Request</SelectItem>
                        <SelectItem value="roundtables">BOARD Groups/Roundtables</SelectItem>
                        <SelectItem value="kos">KOS Briefings</SelectItem>
                        <SelectItem value="media">Media/Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.topic && (
                      <p className="text-sm text-red-600">{errors.topic.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <SuccessDialog
        open={showSuccess}
        onOpenChange={setShowSuccess}
        title="Message Sent!"
        description="We've received your message and will get back to you within 24 hours. Check your email for confirmation."
      />
    </div>
  );
}