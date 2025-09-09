"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Users, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { SuccessDialog } from "@/components/ui/success-dialog";
import { tourRequestSchema, type TourRequest } from "@/lib/schemas";
import { toast } from "sonner";

export default function TourPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TourRequest>({
    resolver: zodResolver(tourRequestSchema)
  });

  const onSubmit = async (data: TourRequest) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/tour', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Failed to submit');

      reset();
      setShowSuccess(true);
      toast.success('Tour request submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit tour request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4">Bring Gallantry to You</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Request the <span className="text-red-600">Gallantry Tour</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A catalytic on-location experience designed to launch or strengthen men's discipleship 
          in your church or organization. We bring the teaching, training, and tools directly to you.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  How It Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Initial Consultation</h4>
                    <p className="text-sm text-muted-foreground">We discuss your needs, goals, and logistics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Customized Content</h4>
                    <p className="text-sm text-muted-foreground">Teaching tailored to your group's specific needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">On-Location Event</h4>
                    <p className="text-sm text-muted-foreground">Intensive discipleship training at your venue</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">BOARD Group Formation</h4>
                    <p className="text-sm text-muted-foreground">Help establish ongoing accountability groups</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Follow-Up Support</h4>
                    <p className="text-sm text-muted-foreground">Continued connection through YouTube Boardroom</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-red-600 mr-3" />
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gritty, Scripture-anchored teaching</li>
                  <li>• Practical discipleship tools and frameworks</li>
                  <li>• BOARD group formation and training</li>
                  <li>• Interactive sessions and accountability partnerships</li>
                  <li>• Resources for ongoing local discipleship</li>
                  <li>• Connection to the broader Gallantry network</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-red-600/5 to-black/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-6 w-6 text-red-600 mr-3" />
                  City Integration Goal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The ultimate goal isn't just a one-time event. We're building a network of discipled men 
                  who transform their families, churches, and communities. The Tour catalyzes this process 
                  and connects you to ongoing resources for sustained growth.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Form */}
          <div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Request Information</CardTitle>
                <CardDescription>
                  Fill out this form and we'll contact you within 48 hours to discuss bringing 
                  Gallantry to your location.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization/Church Name *</Label>
                      <Input
                        id="orgName"
                        {...register("orgName")}
                        placeholder="Your church or organization"
                      />
                      {errors.orgName && (
                        <p className="text-sm text-red-600">{errors.orgName.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        {...register("contactName")}
                        placeholder="Your full name"
                      />
                      {errors.contactName && (
                        <p className="text-sm text-red-600">{errors.contactName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        {...register("city")}
                        placeholder="Your city"
                      />
                      {errors.city && (
                        <p className="text-sm text-red-600">{errors.city.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State/Region *</Label>
                      <Input
                        id="state"
                        {...register("state")}
                        placeholder="State or region"
                      />
                      {errors.state && (
                        <p className="text-sm text-red-600">{errors.state.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="estAttendance">Estimated Attendance</Label>
                      <Input
                        id="estAttendance"
                        {...register("estAttendance")}
                        placeholder="How many men expected?"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="venue">Venue (if known)</Label>
                      <Input
                        id="venue"
                        {...register("venue")}
                        placeholder="Church, conference center, etc."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDates">Preferred Dates/Timeframe</Label>
                    <Input
                      id="preferredDates"
                      {...register("preferredDates")}
                      placeholder="Any specific dates or general timeframe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      {...register("notes")}
                      placeholder="Tell us about your group, specific needs, or any questions..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Tour Information"}
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
        title="Tour Request Submitted!"
        description="We've received your tour request and will contact you within 48 hours to discuss next steps. Check your email for confirmation."
      />
    </div>
  );
}