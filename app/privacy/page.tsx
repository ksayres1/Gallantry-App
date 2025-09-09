import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Privacy Policy - Gallantry",
  description: "Gallantry's privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4">Legal</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Privacy <span className="text-red-600">Policy</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, 
          use, and protect your personal information.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Personal Information</h4>
              <p className="text-muted-foreground">
                When you fill out forms on our website (tour requests, roundtable signups, contact forms), 
                we collect information such as your name, email address, phone number, and location to 
                respond to your inquiries and provide our services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Usage Information</h4>
              <p className="text-muted-foreground">
                We may collect information about how you use our website, including pages visited, 
                time spent on the site, and referral sources to improve our services.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Respond to your inquiries and requests</li>
              <li>• Coordinate tours, roundtables, and BOARD group activities</li>
              <li>• Send KOS Briefing reminders and event notifications</li>
              <li>• Improve our website and services</li>
              <li>• Communicate about Gallantry events and resources</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Information Sharing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy. We may share information with 
              trusted partners who assist us in operating our website and conducting our ministry, 
              provided they agree to keep this information confidential.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>SMS/Text Messaging</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              If you opt in to receive SMS reminders for KOS Briefings:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• You may receive periodic text messages related to Gallantry events</li>
              <li>• Message and data rates may apply</li>
              <li>• You can opt out at any time by replying STOP</li>
              <li>• We do not share your phone number with third parties</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Request access to your personal information</li>
              <li>• Request correction of inaccurate information</li>
              <li>• Request deletion of your personal information</li>
              <li>• Opt out of communications at any time</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              If you have questions about this privacy policy or our data practices, 
              please contact us at ken@overcomeworldwide.org.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Changes to This Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of any 
              changes by posting the new policy on this page with an updated effective date.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}