import { NextRequest, NextResponse } from 'next/server';
import { roundtableJoinSchema } from '@/lib/schemas';
import { sendEmail, generateRoundtableEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = roundtableJoinSchema.parse(body);

    // Send email notification
    await sendEmail({
      to: 'ken@overcomeworldwide.org',
      subject: `New BOARD Group Hosting Inquiry - ${data.city}, ${data.state}`,
      html: generateRoundtableEmail(data),
      replyTo: data.email
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Roundtable request submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing roundtable request:', error);
    return NextResponse.json(
      { error: 'Failed to submit roundtable request' },
      { status: 400 }
    );
  }
}