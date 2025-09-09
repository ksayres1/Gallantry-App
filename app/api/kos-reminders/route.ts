import { NextRequest, NextResponse } from 'next/server';
import { kosRemindersSchema } from '@/lib/schemas';
import { sendEmail, generateKOSRemindersEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = kosRemindersSchema.parse(body);

    // Send email notification
    await sendEmail({
      to: 'ken@overcomeworldwide.org',
      subject: 'New KOS Briefing Reminders Subscription',
      html: generateKOSRemindersEmail(data)
    });

    return NextResponse.json({ 
      success: true, 
      message: 'KOS reminders subscription successful' 
    });
  } catch (error) {
    console.error('Error processing KOS reminders:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe to KOS reminders' },
      { status: 400 }
    );
  }
}