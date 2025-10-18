import { NextRequest, NextResponse } from 'next/server';
import { sendConfirmationEmail } from '@/lib/emailService';

// In a real implementation, you would:
// 1. Connect to a database (PostgreSQL, MongoDB, etc.)
// 2. Use an email service (SendGrid, Resend, etc.)
// 3. Add proper validation and rate limiting

interface WaitingListEntry {
  email: string;
  timestamp: Date;
  source?: string;
}

// Temporary in-memory storage (replace with database)
const waitingList: WaitingListEntry[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEntry = waitingList.find(entry => 
      entry.email.toLowerCase() === email.toLowerCase()
    );

    if (existingEntry) {
      return NextResponse.json(
        { message: 'This email is already on the waiting list' },
        { status: 409 }
      );
    }

    // Add to waiting list
    const newEntry: WaitingListEntry = {
      email: email.toLowerCase().trim(),
      timestamp: new Date(),
      source: 'website'
    };

    waitingList.push(newEntry);

    // Send confirmation email
    try {
      await sendConfirmationEmail(email, waitingList.length);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if email fails
    }

    console.log('New waiting list entry:', newEntry);
    console.log('Total entries:', waitingList.length);

    return NextResponse.json(
      { 
        message: 'Successfully added to waiting list',
        email: email,
        position: waitingList.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error adding to waiting list:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to view waiting list (for admin purposes)
export async function GET() {
  return NextResponse.json({
    count: waitingList.length,
    entries: waitingList.map(entry => ({
      email: entry.email,
      timestamp: entry.timestamp,
      source: entry.source
    }))
  });
}
