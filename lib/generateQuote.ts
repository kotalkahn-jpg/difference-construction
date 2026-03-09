import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generateQuote(data: any) {
  const doc = new jsPDF();

  const pricePerUnit = 5000; // example price for demo
  const quantity = Number(data.quantity);
  const total = pricePerUnit * quantity;

  const quoteNumber = `QT-${Math.floor(Math.random() * 100000)}`;
  const today = new Date().toLocaleDateString();

  // LOGO
  doc.addImage("/logo.jpg", "JPEG", 10, 10, 40, 20);

  // COMPANY NAME
  doc.setFontSize(18);
  doc.text("Difference Construction (MW) Ltd", 60, 18);

  doc.setFontSize(10);
  doc.text("Lilongwe, Malawi", 60, 25);
  doc.text("Phone: +265 999 000 000", 60, 30);

  // QUOTATION TITLE
  doc.setFontSize(16);
  doc.text("QUOTATION", 10, 50);

  doc.setFontSize(10);
  doc.text(`Quote #: ${quoteNumber}`, 150, 45);
  doc.text(`Date: ${today}`, 150, 50);

  // CUSTOMER INFO
  doc.text(`Customer: ${data.name}`, 10, 65);
  doc.text(`Phone: ${data.phone}`, 10, 72);
  doc.text(`Company: ${data.company || "N/A"}`, 10, 79);

  // PRODUCT TABLE
  autoTable(doc, {
    startY: 95,
    head: [["Product", "Quantity", "Unit Price (MWK)", "Total (MWK)"]],
    body: [
      [
        data.product,
        quantity,
        pricePerUnit.toLocaleString(),
        total.toLocaleString(),
      ],
    ],
  });

  const finalY = (doc as any).lastAutoTable.finalY + 20;

  // TOTAL
  doc.setFontSize(12);
  doc.text(`TOTAL: MWK ${total.toLocaleString()}`, 140, finalY);

  // NOTES
  doc.setFontSize(10);
  doc.text(
    "Thank you for requesting a quotation from Difference Construction (MW) Ltd.",
    10,
    finalY + 20
  );

  doc.text(
    "Prices may vary depending on quantity, delivery location, and availability.",
    10,
    finalY + 28
  );

  // FOOTER
  doc.text(
    "Difference Construction (MW) Ltd | Reliable Construction Materials",
    10,
    280
  );

  doc.save(`Quotation-${data.name}.pdf`);
}