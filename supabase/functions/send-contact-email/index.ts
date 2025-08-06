import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  surname: string;
  email: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  message: string;
  type: 'contact' | 'reservation';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, surname, email, phone, checkIn, checkOut, guests, message, type }: ContactEmailRequest = await req.json();

    console.log("Received request:", { name, surname, email, type });

    const isReservation = type === 'reservation';
    const subject = isReservation ? "Zapytanie o rezerwację - Lazur Resort" : "Nowe zapytanie - Lazur Resort";
    
    // Email to the business - using verified domain
    const businessEmailResponse = await resend.emails.send({
      from: "Lazur Resort <onboarding@resend.dev>",
      to: ["plshadov@gmail.com"], // Tymczasowy adres - zmień na lazurresort@op.pl po weryfikacji domeny
      subject: subject,
      html: `
        <h2>${isReservation ? 'Nowe zapytanie o rezerwację' : 'Nowe zapytanie kontaktowe'}</h2>
        <p><strong>DOCELOWY ADRES:</strong> lazurresort@op.pl (mail przychodzi na adres tymczasowy)</p>
        <p><strong>Imię i nazwisko:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${checkIn ? `<p><strong>Data przyjazdu:</strong> ${checkIn}</p>` : ''}
        ${checkOut ? `<p><strong>Data wyjazdu:</strong> ${checkOut}</p>` : ''}
        ${guests ? `<p><strong>Liczba osób:</strong> ${guests}</p>` : ''}
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>To zapytanie zostało wysłane z formularza na stronie Lazur Resort.</em></p>
        <p><strong>Uwaga:</strong> Email wysyłany tymczasowo na adres testowy. Zweryfikuj domenę w Resend, aby wysyłać na lazurresort@op.pl</p>
      `,
    });

    // Confirmation email to the customer
    const customerEmailResponse = await resend.emails.send({
      from: "Lazur Resort <onboarding@resend.dev>",
      to: [email],
      subject: "Potwierdzenie otrzymania zapytania - Lazur Resort",
      html: `
        <h2>Dziękujemy za zapytanie!</h2>
        <p>Dzień dobry ${name},</p>
        <p>Dziękujemy za ${isReservation ? 'zapytanie o rezerwację' : 'kontakt'} w sprawie domków letniskowych Lazur Resort w Rogowie.</p>
        <p>Otrzymaliśmy Państwa wiadomość i skontaktujemy się w ciągu 24 godzin.</p>
        
        <h3>Podsumowanie zapytania:</h3>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Imię i nazwisko:</strong> ${name} ${surname}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
          ${checkIn ? `<p><strong>Data przyjazdu:</strong> ${checkIn}</p>` : ''}
          ${checkOut ? `<p><strong>Data wyjazdu:</strong> ${checkOut}</p>` : ''}
          ${guests ? `<p><strong>Liczba osób:</strong> ${guests}</p>` : ''}
          ${message ? `<p><strong>Państwa wiadomość:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
        </div>
        
        <h3>Dane kontaktowe:</h3>
        <p><strong>Telefon:</strong> +48 502 939 725</p>
        <p><strong>Email:</strong> lazurresort@op.pl</p>
        <p><strong>Adres:</strong> Makowa 6, 72-330 Rogowo</p>
        
        <p>Serdecznie pozdrawiamy,<br>
        Zespół Lazur Resort</p>
      `,
    });

    console.log("Business email sent:", businessEmailResponse);
    console.log("Customer email sent:", customerEmailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      businessEmail: businessEmailResponse,
      customerEmail: customerEmailResponse 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);