import { JobCard } from "@/components/job-card";
import Image from "next/image";

const jobs = [
  {
    title: "Product Designer",
    experience: "0-2 years of experience",
    location: "Bengaluru",
    href: "#",
  },
  {
    title: "Product Designer",
    experience: "0-2 years of experience",
    location: "Bengaluru",
    href: "#",
  },
  {
    title: "Product Designer",
    experience: "0-2 years of experience",
    location: "Bengaluru",
    href: "#",
  },
  {
    title: "Product Designer",
    experience: "0-2 years of experience",
    location: "Bengaluru",
    href: "#",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-950/20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="relative">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Join Our Team to Shape the Future of Loyalty
            </h1>
          </div>
          <div className="absolute -right-4 top-0 h-32 w-32 animate-pulse lg:h-48 lg:w-48">
            <Image
              src="/placeholder.svg?height=192&width=192"
              alt="Monet Coin"
              width={192}
              height={192}
              className="rotate-12"
            />
          </div>
        </div>

        {/* Team Image */}
        <div className="mt-12">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/team/monet-team.jpeg"
              alt="Monet Team"
              width={1200}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Current Openings */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Current Openings
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                experience={job.experience}
                location={job.location}
                href={job.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
