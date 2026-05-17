import Markdown from "react-markdown";

const termsContent = `
# Terms and Conditions

Welcome to Luxe Collection. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.

## 1. Business Identity
Luxe Collection is a registered fashion business operated by **Luxe Collection, LLC**, based at 1209 MOUNTAIN ROAD PL NE STE R, Albuquerque, NM 87110.

## 2. Use of Site
The content of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.

## 3. Product Availability
All pieces in our archive are subject to availability. As we focus on elevated essentials and seasonal collections, some items may have limited release windows.

## 4. Payment Terms
We accept major credit cards and verified payment methods through our secure checkout. All prices are in USD.

## 5. Intellectual Property
All material on this website, including design, layout, look, appearance, and graphics, is owned by or licensed to Luxe Collection, LLC. Reproduction is prohibited other than in accordance with the copyright notice.

## 6. Governing Law
Your use of this website and any dispute arising out of such use is subject to the laws of the State of New Mexico, United States.
`;

export default function Terms() {
  return (
    <div className="bg-luxe-paper py-32 px-6">
      <div className="max-w-4xl mx-auto bg-white p-12 md:p-24 rounded-[3rem] shadow-sm border border-luxe-ink/5">
        <div className="markdown-body">
          <Markdown>{termsContent}</Markdown>
        </div>
      </div>
    </div>
  );
}
