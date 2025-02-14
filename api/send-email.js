// pages/api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, result } = req.body;

    // Send the email
    const data = await resend.emails.send({
      from: 'Autism Test <onboarding@resend.dev>', // Must be a verified sender
      to: email,
      subject: 'Your Autism Test Results',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; text-align: center;">Your Autism Test Results</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 18px; text-align: center;">Your result score is:</p>
            <h2 style="color: #FF5722; text-align: center; font-size: 36px;">${result}%</h2>
          </div>
          
          <div style="margin-top: 20px; padding: 20px; border-top: 1px solid #eee;">
            <p style="color: #666;">Important Note:</p>
            <p style="color: #666; font-size: 14px;">
              This test result is a screening tool only and should not be considered a diagnosis. 
              For a proper evaluation, please consult a qualified healthcare professional.
            </p>
          </div>
          
          <footer style="margin-top: 30px; text-align: center; color: #888; font-size: 12px;">
            <p>This email was sent based on your request after completing the autism screening test.</p>
          </footer>
        </div>
      `,
    });

    // If we reach here, the email was sent successfully
    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
