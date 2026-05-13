import Markdown from "react-markdown";

const privacyContent = `
# Privacy Policy

At Luxe Collections, we value your privacy and are committed to protecting your personal information. We may collect personal information such as your name, email address, and phone number when you interact with our website or services.

## Use of Information

This information is used to:
- Process orders
- Send order confirmations and updates
- Provide customer support
- Send verification codes (OTP)
- Personalize your shopping experience using our AI Stylist

## Marketing Communication

We may also use your information to communicate marketing offers and promotions, but you can opt out at any time.

## Security

We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.

## Third-Party Services

We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
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
