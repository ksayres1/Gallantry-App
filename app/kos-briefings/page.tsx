"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, Youtube, Bell, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { SuccessDialog } from "@/components/ui/success-dialog";
import { kosRemindersSchema, type KOSReminders } from "@/lib/schemas";
import { siteConfig } from "@/lib/content";
import { toast } from "sonner";

export default function KOSBriefingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [nextBriefing, setNextBriefing] = useState<Date | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<KOSReminders>({
    resolver: zodResolver(kosRemindersSchema)
  });

  const smsOptIn = watch("smsOptIn");

  useEffect(() => {
    // Set first KOS Briefing date: August 28th, 2025
    const now = new Date();
    const firstBriefing = new Date('2025-08-28T20:00:00-05:00'); // August 28th, 2025 8 PM EST
    
    let nextBriefing = new Date(firstBriefing);
    
    // If first briefing hasn't happened yet, use it
    if (now < firstBriefing) {
      setNextBriefing(firstBriefing);
      return;
    }
    
    // Calculate next briefing (every other Thursday from first date)
    const daysSinceFirst = Math.floor((now.getTime() - firstBriefing.getTime()) / (1000 * 60 * 60 * 24));
    const weeksSinceFirst = Math.floor(daysSinceFirst / 7);
    const briefingsSinceFirst = Math.floor(weeksSinceFirst / 2);
    
    // Next briefing is either this cycle or next cycle
    const nextBriefingWeeks = (briefingsSinceFirst + 1) * 2;
    nextBriefing.setDate(firstBriefing.getDate() + (nextBriefingWeeks * 7));
    
    // If we've passed this briefing time, go to the next one
    if (now > nextBriefing) {
      nextBriefing.setDate(nextBriefing.getDate() + 14); // Add 2 weeks
    }
    
    setNextBriefing(nextBriefing);
  }, []);

  const onSubmit = async (data: KOSReminders) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/kos-reminders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Failed to submit');

      reset();
      setShowSuccess(true);
      toast.success('KOS reminder subscription successful!');
    } catch (error) {
      toast.error('Failed to subscribe to reminders. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateICSFile = () => {
    if (!nextBriefing) return;

    const startDate = nextBriefing.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(nextBriefing.getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Gallantry//KOS Briefings//EN
BEGIN:VEVENT
UID:kos-briefing-${startDate}@gallantry.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'}
DTSTART:${startDate}
DTEND:${endDate}
SUMMARY:KOS Briefing - Gallantry
DESCRIPTION:Live KOS (Kingdom Operating System) Briefing on YouTube. Unfiltered teaching and accountability check-ins.
LOCATION:${siteConfig.youtubeChannel}
RRULE:FREQ=WEEKLY;INTERVAL=2;BYDAY=TH
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'kos-briefings.ics';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4">Live Teaching</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-red-600">KOS</span> Briefings
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Kingdom Operating System briefings every other Thursday at 8 PM EST. 
          Live on YouTube for unfiltered teaching and accountability check-ins.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <Card className="border-2 bg-gradient-to-br from-red-600/5 to-black/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 text-red-600 mr-3" />
                  Next KOS Briefing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {nextBriefing && (
                  <div className="text-center p-6 bg-background rounded-lg border">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {nextBriefing < new Date('2025-08-28') ? 'Kick-off: August 28, 2025' : nextBriefing.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        month: 'long', 
                        day: 'numeric' 
                      }) + (nextBriefing.getFullYear() !== new Date().getFullYear() ? `, ${nextBriefing.getFullYear()}` : '')}
                    </div>
                    <div className="text-xl font-semibold mb-4">8:00 PM EST</div>
                    <div className="flex flex-col gap-3">
                      <Button asChild>
                        <a href={siteConfig.youtubeChannel} target="_blank" rel="noopener noreferrer">
                          <Youtube className="mr-2 h-4 w-4" />
                          Watch Live on YouTube
                        </a>
                      </Button>
                      <Button variant="outline" onClick={generateICSFile}>
                        <Calendar className="mr-2 h-4 w-4" />
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                )}
                <p className="text-sm text-muted-foreground text-center">
                  Kick-off: August 28th, 2025. Then every other Thursday. Set reminders below to never miss a session.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Youtube className="h-6 w-6 text-red-600 mr-3" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Unfiltered Teaching:</strong> Raw, Scripture-anchored instruction that cuts through cultural noise</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Accountability Check-ins:</strong> Real-time interaction and brotherhood connection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>BOARD Group Updates:</strong> Resources and guidance for local discipleship</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Live Q&A:</strong> Direct interaction and practical application</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Past Briefings</CardTitle>
                <CardDescription>
                  Catch up on previous sessions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All KOS Briefings are archived on our YouTube channel for ongoing discipleship and review.
                </p>
                <Button variant="outline" asChild>
                  <a href={siteConfig.youtubeChannel} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View All Briefings
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Reminder Form */}
          <div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-6 w-6 text-red-600 mr-3" />
                  Get Reminders
                </CardTitle>
                <CardDescription>
                  Never miss a KOS Briefing. Get email and optional SMS reminders 
                  before each live session.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name (Optional)</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                    />
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

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="smsOptIn"
                        checked={smsOptIn}
                        onCheckedChange={(checked) => setValue("smsOptIn", !!checked)}
                      />
                      <Label htmlFor="smsOptIn" className="text-sm">
                        Also send SMS reminders (optional)
                      </Label>
                    </div>

                    {smsOptIn && (
                      <div className="space-y-2 ml-6">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          {...register("phone")}
                          placeholder="(555) 123-4567"
                        />
                        <p className="text-xs text-muted-foreground">
                          Standard messaging rates may apply. You can opt out anytime.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">What You'll Receive:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Email reminder 24 hours before each briefing</li>
                      <li>• Email reminder 1 hour before going live</li>
                      {smsOptIn && <li>• SMS reminder 30 minutes before (if opted in)</li>}
                      <li>• Links to join the live stream</li>
                      <li>• Occasional updates about Gallantry events</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Setting Up Reminders..." : "Get KOS Reminders"}
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
        title="Reminders Set Up!"
        description="You'll receive email reminders before each KOS Briefing. Check your email for confirmation and add the calendar event to never miss a session."
      />
    </div>
  );
}