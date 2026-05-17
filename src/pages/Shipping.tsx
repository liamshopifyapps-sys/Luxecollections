import Markdown from "react-markdown";

const shippingContent = `
# Shipping & Returns

We provide white-glove architectural delivery to ensure your pieces arrive with their structural integrity intact.

## 1. Shipping Policy
- **Complimentary Delivery:** All archive pieces include complimentary standard shipping.
- **Timeline:** Given the tailored nature of our essentials, please allow 7-14 business days for architectural inspection and transit.
- **Tracking:** You will receive a personalized archive update once your piece is in transit.

## 2. Returns & Exchanges
- **Archive Integrity:** To maintain the exclusivity of our pieces, returns are accepted within 30 days of delivery, provided the piece is in its original, unworn state with architectural tags attached.
- **Process:** Contact our concierge at support@luxecollections.com to initiate a return.
- **Refunds:** Once the piece is inspected and verified, a refund will be issued to your original method of payment.

## 3. Global Delivery
We ship internationally to most major regions. Custom duties and architectural import fees may apply depending on your location.
`;

export default function Shipping() {
  return (
    <div className="bg-luxe-paper py-32 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 rounded-[3rem] shadow-sm border border-luxe-ink/5">
        <div className="markdown-body">
          <Markdown>{shippingContent}</Markdown>
        </div>
      </div>
    </div>
  );
}
