import { LegalPage, legalMetadata } from "@/components/legal/legal-page"; import { legalSiteConfig as config } from "@/config/legal";
export const metadata=legalMetadata("Trading and Educational Disclaimer","Important educational-purpose and trading-risk limitations for MaorTrades content.");
export default function DisclaimerPage(){return <LegalPage title="TRADING AND EDUCATIONAL DISCLAIMER" introduction="MaorTrades Books, Articles, Resources, examples, and related materials are general education and information." sections={[
 {title:"Not professional advice",paragraphs:["Nothing on the site is personalized financial, investment, legal, accounting, or tax advice. Using the website or buying a Book does not create an adviser, broker, fiduciary, portfolio-management, or client relationship."]},
 {title:"Trading risk",paragraphs:["Trading futures, securities, derivatives, and other financial instruments involves significant risk and can result in losses. Readers must assess information in light of their own circumstances and seek appropriately qualified advice when needed."]},
 {title:"No guarantee",paragraphs:["MaorTrades does not guarantee profitability, funded-account qualification, evaluation success, payouts, consistency, avoidance of losses, or future performance."]},
 {title:"Examples and third parties",paragraphs:["Charts, setups, and examples may be simplified for education. Historical examples do not guarantee future outcomes. References to prop firms, platforms, tools, or market terminology do not imply endorsement, partnership, or affiliation unless explicitly verified."]},
 {title:"Contact",paragraphs:[config.supportEmail?`Questions may be sent to ${config.supportEmail}.`:"A public support contact must be configured before launch."]}
]}/>}
