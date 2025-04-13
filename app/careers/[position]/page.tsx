import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobApplicationForm } from "@/components/job-application-form";
import { Card } from "@/components/ui/card";
import { Footer } from "@/components/footer";

const positions = {
  "product-designer": {
    title: "Product Designer",
    description:
      "As a Sales Development Representative (SDR), your primary responsibility is to generate and qualify leads for the sales team. You will be the first point of contact for potential customers, engaging them through phone calls, emails, and social media channels to understand their needs and introduce them to our products or services.",
    details:
      "Key responsibilities include prospecting new leads, conducting initial qualification calls, and scheduling meetings or demos for the sales team. You will collaborate closely with marketing and sales departments to optimize lead generation strategies and contribute to the overall growth of the company.",
    responsibilities: [
      "Prospect and qualify new leads through cold calling, email campaigns, and social selling.",
      "Identify decision-makers and key stakeholders within target organizations.",
      "Conduct thorough needs assessments and effectively communicate product or service benefits.",
      "Schedule appointments, demos, and meetings for the sales team.",
      "Collaborate with marketing on lead generation efforts and campaigns.",
      "Maintain accurate records of prospect interactions in the CRM system.",
      "Achieve or exceed monthly quotas of qualified opportunities.",
    ],
    qualifications: [
      "Proven experience in sales, lead generation, or customer service preferred.",
      "Excellent communication skills, both verbal and written.",
      "Ability to engage and build rapport with prospects over the phone and via email.",
      "Strong organizational and time management skills.",
      "Persistent, self-motivated, and results-oriented.",
      "Knowledge of CRM software (e.g., Salesforce) and sales automation tools is a plus.",
      "Bachelor's degree or equivalent work experience.",
    ],
    footer:
      "Join us as an SDR and play a crucial role in driving our company's growth by connecting with potential customers and setting the stage for successful sales interactions.",
  },
  "full-stack-software-developer": {
    title: "Full Stack Software Developer",
    description:
      "We’re building the future of loyalty — on-chain. Our startup is creating plug-and-play loyalty infrastructure that allows brands to easily launch rewards programs powered by blockchain. No crypto experience required for users, no engineering heavy-lifting for brands. As we scale, we’re looking for curious and motivated engineers to help us bring this vision to life.",
    details:
      "We’re looking for a Full Stack Software Developer who’s excited to work at the intersection of Web2 and Web3. You’ll be joining a fast-moving team where your work will directly impact the product and the users. From building sleek onboarding flows to integrating smart contracts and loyalty APIs, you’ll touch every layer of the stack and help shape our technical direction.",
    responsibilities: [
      "Build and Maintain Core Product Features",
      "Develop frontend interfaces (React/Next.js) that are intuitive, responsive, and user-friendly.",
      "Build and maintain backend services (Node.js/Express/TypeScript) powering our loyalty APIs and admin dashboards.",
      "Collaborate on integrations with smart contracts, blockchain APIs, and third-party services.",
      "Design, build, and deploy full-stack features with autonomy and ownership.",
      "Ensure performance, scalability, and security across all services.",
      "Set up and manage infrastructure, CI/CD pipelines, and deployment workflows.",
    ],
    qualifications: [
      "3+ years experience in full stack development (or impressive projects that show it).",
      "Strong grasp of JavaScript/TypeScript, React, and modern backend frameworks.",
      "Experience working with RESTful APIs, databases, and cloud deployment.",
      "Ability to work independently, take initiative, and deliver in a fast-paced environment.",
      "Bonus: interest or experience in Web3 (ethers.js, Solidity, wallet integration, etc.).",
    ],
  },
  "investor-relations-manager": {
    title: "Investor Relations Manager",
    description:
      "We’re building the future of loyalty — on-chain. Our startup is creating plug-and-play loyalty infrastructure that allows brands to easily launch rewards programs powered by blockchain. No crypto experience required for users, no engineering heavy-lifting for brands. As we scale, we’re looking for curious and motivated engineers to help us bring this vision to life.",
    details:
      "As our Investor Relations Manager, you’ll be the key liaison between our leadership team and existing/potential investors. You’ll craft our financial narrative, support fundraising processes, and ensure that our investors are informed, engaged, and aligned with our long-term vision. If you thrive in high-growth environments, understand the crypto space, and are an exceptional communicator — we’d love to meet you.",
    responsibilities: [
      "Create and maintain investor decks, quarterly updates, and company overviews tailored for VCs and strategic investors.",
      "Collaborate with the founders on fundraising materials, pitch preparation, and investor outreach.",
      "Manage the investor pipeline, track conversations, and follow up with diligence material when needed.",
      "Serve as the main point of contact for current investors.",
      "Proactively engage with potential investors, analyst communities, and ecosystem partners.",
      "Work closely with finance to understand company performance, KPIs, and market benchmarks.",
      "Stay up to date with trends in Web3, crypto loyalty solutions, and fintech investing.",
    ],
    qualifications: [
      "3–5+ years experience in investor relations, crypto/web3 projects, venture capital, investment banking, or strategic finance.",
      "Strong understanding of crypto fundamentals, tokenomics, and blockchain-based business models.",
      "Outstanding communication and presentation skills—able to simplify complex ideas and tell a powerful story.",
      "Highly organized with strong attention to detail and follow-through.",
      "Comfortable working in a fast-paced startup environment with shifting priorities.",
    ],
  },
};

interface Params {
  position: string;
}

type Props = {
  params: Params;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CareerPositionPage({ params }: Props) {
  const slug = params.position as keyof typeof positions;
  const position = positions[slug];

  if (!position) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[url('/images/background/careers-bg.webp')] bg-cover bg-center bg-no-repeat pt-16 lg:pt-32">
      <div className="container mx-auto px-4 py-0">
        <div className="mb-16">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <p className="text-sm text-neutral-400">{`You're applying for`}</p>
              <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
                {position.title}
              </h1>
            </div>
            <Button variant="outline" size="lg" className="gap-2">
              Share Link
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-8 text-neutral-300">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="max-w-2xl">
                <p>{position.description}</p>
                <p>{position.details}</p>

                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">
                    Key Responsibilities:
                  </h2>
                  <ul className="list-inside list-disc space-y-2">
                    {position.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-semibold text-white">
                    Skills and Qualifications:
                  </h2>
                  <ul className="list-inside list-disc space-y-2">
                    {position.qualifications.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Card className="p-6 min-w-[300px] lg:min-w-[500px]">
                <JobApplicationForm position={position.title} />
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
