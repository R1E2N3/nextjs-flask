// pages/api/send-email.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, result } = req.body;

    // Ensure required fields exist
    if (!email || result === undefined) {
      return res.status(400).json({ error: 'Missing email or result' });
    }

    // For some versions, you must pass 'to' as an array
    const data = await resend.emails.send({
      from: 'on', // Must be verified in Resend
      to: [email], // Use an array
      subject: 'Your Autism Test Results',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; text-align: center;">Seu teste de autismo</h1>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 18px; text-align: center;">Seu resultado é:</p>
            <h2 style="color: #FF5722; text-align: center; font-size: 36px;">${result}%</h2>
          </div>
          
          <div style="margin-top: 20px; padding: 20px; border-top: 1px solid #eee;">
            <p style="color: #666;">Observação Importante:</p>
            <p style="color: #666; font-size: 14px;">
              Este resultado é apenas um indicador inicial e não substitui
              um diagnóstico profissional. Se necessário, consulte um especialista.
            </p>
          </div>
          
          <footer style="margin-top: 30px; text-align: center; color: #888; font-size: 12px;">
            <p>Este email foi enviado a seu pedido após concluir o teste de triagem de autismo.</p>
          </footer>
        </div>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
