import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  await resend.emails.send({
    from: "quotes@differenceconstruction.com",
    to: "rowlandbanda2003@gmail.com",
    subject: "New Construction Quote Request",
    html: `
      <h2>New Quote Request</h2>
      <p><b>Product:</b> ${data.product}</p>
      <p><b>Quantity:</b> ${data.quantity}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Company:</b> ${data.company}</p>
      <p><b>Details:</b> ${data.details}</p>
    `,
  });

  return Response.json({ success: true });
}