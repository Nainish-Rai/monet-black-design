import { AdvisorCard } from "@/components/advisor-card";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TeamMemberCard } from "@/components/team-member-card";
import { advisors, teamMembers } from "@/constants/team";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="container px-4 pt-24">
        <section className="mb-20">
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <h1 className="text-5xl font-medium text-white">Our Team</h1>
            <p className="text-xl text-gray-400">
              Our diverse team combines expertise in loyalty programs,
              blockchain technology, and AI to revolutionize rewards systems.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <h2 className="text-5xl font-medium text-white">Our Advisors</h2>
            <p className="text-xl text-gray-400">
              The team has a cumulative experience of more than 50 years. More
              than 50 projects on AI and Blockchain executed.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advisors.map((advisor) => (
              <AdvisorCard key={advisor.name} advisor={advisor} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
