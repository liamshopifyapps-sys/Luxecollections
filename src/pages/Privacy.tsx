import Markdown from "react-markdown";

const privacyContent = `
# Privacy Policy for Luxe Collection, LLC

*Last Updated: May 13, 2026*

At Luxe Collection, we value your privacy and are committed to protecting your personal information. As a USA-based company (Luxe Collection, LLC), we adhere to strict standards regarding data security and transparency.

## 1. Information We Collect
We may collect personal information such as your name, email address, mailing address, and phone number when you interact with our boutique or services. This is primarily for:
- **Order Fulfillment:** Processing transactions and shipments to your verified address.
- **Communication:** Sending confirmations, updates, and responding to inquiries.
- **Verification:** Security checks for account integrity and Twilio TFN compliance.

## 2. Use of Information
Luxe Collection uses your information to provide a refined shopping experience. We do not sell or trade your personal data to third parties.

## 3. Data Security
We implement industry-standard technology (SSL/HTTPS) to protect your information. All transactions occur via encrypted gateways to ensure PCI compliance and financial integrity.

## 4. Your Rights
Under US law, you have the right to request access to the information we hold about you and request its correction or deletion at any time.

## 5. Contact Information
For questions regarding this policy, please contact us at:
**Luxe Collection, LLC**
1209 MOUNTAIN ROAD PL NE STE R
Albuquerque, NM 87110
Email: support@luxecollection.online
`;

export default function Privacy() {
  return (
    <div className="bg-luxe-paper py-32 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 rounded-[3rem] shadow-sm border border-luxe-ink/5">
        <div className="markdown-body">
          <Markdown>{privacyContent}</Markdown>
        </div>
      </div>
    </div>
  );
}
