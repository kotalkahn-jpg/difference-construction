import { Resend } from "resend";

export async function POST(req: Request) {

  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await req.json();

  const { name, product, quantity, phone, company, details } = body;

  await resend.emails.send({
    from: "Quotes <quotes@yourdomain.com>",
    to: ["your@email.com"],
    subject: "New Quote Request",
    html: `
      <h2>New Quote Request</h2>
      <p>Name: ${name}</p>
      <p>Product: ${product}</p>
      <p>Quantity: ${quantity}</p>
      <p>Phone: ${phone}</p>
      <p>Company: ${company}</p>
      <p>Details: ${details}</p>
    `,
  });

  return Response.json({ success: true });
}