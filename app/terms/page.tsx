import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Terms of Service - Gallantry",
  description: "Gallantry's terms of service and usage guidelines.",
};

export default function TermsPage() {
  return (
    <div className="container px-4 py-12">
      <div className="text-center mb-12">
        <Badge className="mb-4">Legal</Badge>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Terms of <span className="text-red-600">Service</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          These terms govern your use of the Gallantry website and participation 
          in our discipleship programs and events.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Use License</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Permission is granted to temporarily download one copy of the materials on 
              Gallantry's website for personal, non-commercial transitory viewing only.
            </p>
            <div>
              <h4 className="font-semibold mb-2">This license shall not allow you to:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for commercial purposes</li>
                <li>• Attempt to reverse engineer any software</li>
                <li>• Remove any copyright or proprietary notations</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Event Participation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Gallantry Unfiltered & Tours</h4>
              <p className="text-muted-foreground">
                Participation in Gallantry events is subject to availability and approval. 
                We reserve the right to refuse service or participation to anyone for any reason.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">BOARD Groups</h4>
              <p className="text-muted-foreground">
                BOARD group participation requires commitment to regular attendance, 
                accountability, and adherence to group guidelines. Hosts must be approved 
                and trained by Gallantry leadership.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Content Standards</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              All content shared through Gallantry platforms (including forms, comments, 
              and communications) must align with biblical values and our mission.
            </p>
            <div>
              <h4 className="font-semibold mb-2">Prohibited Content:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Content that contradicts biblical teaching</li>
                <li>• Harassment, threats, or inappropriate behavior</li>
                <li>• Spam or commercial solicitation</li>
                <li>• False or misleading information</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The materials on Gallantry's website are provided on an 'as is' basis. 
              Gallantry makes no warranties, expressed or implied, and hereby disclaims 
              all other warranties including, without limitation, implied warranties or 
              conditions of merchantability, fitness for a particular purpose, or 
              non-infringement of intellectual property.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Limitations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              In no event shall Gallantry or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or 
              due to business interruption) arising out of the use or inability to use 
              the materials on Gallantry's website.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Accuracy of Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The materials appearing on Gallantry's website could include technical, 
              typographical, or photographic errors. Gallantry does not warrant that 
              any of the materials on its website are accurate, complete, or current.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Modifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Gallantry may revise these terms of service at any time without notice. 
              By using this website, you are agreeing to be bound by the then current 
              version of these terms of service.
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us 
              at ken@overcomeworldwide.org.
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