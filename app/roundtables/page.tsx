"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Users, MapPin, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { SuccessDialog } from "@/components/ui/success-dialog";
import { roundtableJoinSchema, type RoundtableJoin } from "@/lib/schemas";
import { toast } from "sonner";

export default function RoundtablesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<RoundtableJoin>({
    resolver: zodResolver(roundtableJoinSchema)
  });

  const preferInPerson = watch("preferInPerson");

  const onSubmit = async (data: RoundtableJoin) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/roundtables', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Failed to submit');

      reset();
      setShowSuccess(true);
      toast.success('Roundtable hosting inquiry submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4">BOARD Groups</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Host a <span className="text-red-600">Roundtable</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          BOARD Groups (Bereans Of Accountability, Reconciliation, and Discipleship) are the backbone 
          of ongoing discipleship. Ready to lead men in your city?
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Information */}
          <div className="space-y-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-6 w-6 text-red-600 mr-3" />
                  What Are BOARD Groups?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>B</strong>ereans <strong>O</strong>f <strong>A</strong>ccountability, <strong>R</strong>econciliation, 
                  and <strong>D</strong>iscipleship. Small groups of men committed to authentic brotherhood 
                  through Scripture study, accountability, and mutual discipleship.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Weekly/Bi-weekly Meetings</h4>
                      <p className="text-sm text-muted-foreground">Consistent gathering for growth</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Scripture-Centered Study</h4>
                      <p className="text-sm text-muted-foreground">Berean approach to God's Word</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Accountability Partnerships</h4>
                      <p className="text-sm text-muted-foreground">Iron sharpening iron</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Prayer & Spiritual Warfare</h4>
                      <p className="text-sm text-muted-foreground">Standing together in battle</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  Host Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Heart for men's discipleship and accountability</li>
                  <li>• Commitment to consistent meeting schedule</li>
                  <li>• Willingness to be trained and supported</li>
                  <li>• Access to meeting space (home, church, etc.)</li>
                  <li>• Connection to YouTube Boardroom teachings</li>
                  <li>• Alignment with Gallantry's 3 Pillars</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 bg-gradient-to-br from-red-600/5 to-black/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-6 w-6 text-red-600 mr-3" />
                  What We Provide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Initial host training and ongoing support</li>
                  <li>• Connection to YouTube Boardroom content</li>
                  <li>• Access to Gallantry resources and materials</li>
                  <li>• Network of other BOARD group hosts</li>
                  <li>• Guidance on group formation and leadership</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Form */}
          <div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Inquire About Hosting</CardTitle>
                <CardDescription>
                  Ready to lead men in discipleship? Fill out this form and we'll connect 
                  with you about hosting a BOARD group in your area.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        placeholder="(555) 123-4567"
                      />
                    </div>

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

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="preferInPerson"
                        checked={preferInPerson}
                        onCheckedChange={(checked) => setValue("preferInPerson", !!checked)}
                      />
                      <Label htmlFor="preferInPerson" className="text-sm">
                        I prefer to host in-person meetings
                      </Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability & Schedule *</Label>
                    <Textarea
                      id="availability"
                      {...register("availability")}
                      placeholder="When are you available to host? (e.g., Tuesday evenings, Saturday mornings, etc.)"
                      rows={3}
                    />
                    {errors.availability && (
                      <p className="text-sm text-red-600">{errors.availability.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Leadership/Discipleship Experience</Label>
                    <Textarea
                      id="experience"
                      {...register("experience")}
                      placeholder="Tell us about your experience in leadership, discipleship, or men's ministry..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="churchAffiliation">Church Affiliation</Label>
                    <Input
                      id="churchAffiliation"
                      {...register("churchAffiliation")}
                      placeholder="Your church or ministry affiliation (optional)"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Hosting Inquiry"}
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
        title="Hosting Inquiry Submitted!"
        description="We've received your inquiry about hosting a BOARD group and will contact you within 48 hours to discuss next steps and training."
      />
    </div>
  );
}