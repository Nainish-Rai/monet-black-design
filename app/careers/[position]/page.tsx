import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobApplicationForm } from "@/components/job-application-form";
import { Card } from "@/components/ui/card";

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
};

interface Params {
  slug: string;
}

export default async function CareerPositionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const slug = (await params).slug as keyof typeof positions;
  const position = positions[slug];

  if (!position) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-yellow-950/20">
      <div className="container mx-auto px-4 py-16">
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

                <p>{position.footer}</p>
              </div>
              <Card className="p-6 min-w-[300px] lg:min-w-[500px]">
                <JobApplicationForm position={position.title} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
