import { ArrowRight } from "lucide-react";
import Link from "next/link";
import JobCard from "./JobCard";

const FEATURED_JOBS = [
  {
    id: "1",
    title: "Senior Learning Experience Designer",
    companyName: "TechLearn Solutions",
    companyLogo: "https://logo.clearbit.com/microsoft.com",
    location: "New York, NY",
    jobType: "full-time" as const,
    remote: true,
    compensation: "$120,000 - $150,000/year",
    postedDate: "2 days ago",
    description: "We're seeking an experienced Learning Experience Designer to create innovative training programs for our enterprise clients. The ideal candidate will have a strong background in instructional design and modern learning technologies.",
    requirements: ["Instructional Design", "LMS", "Content Development", "Project Management"]
  },
  {
    id: "2",
    title: "Corporate Training Consultant",
    companyName: "Global Learning Corp",
    companyLogo: "https://logo.clearbit.com/google.com",
    location: "London, UK",
    jobType: "contract" as const,
    remote: true,
    duration: "6 months",
    compensation: "$800 - $1,000/day",
    postedDate: "1 week ago",
    description: "Join our team as a Corporate Training Consultant to help deliver high-impact learning programs for our Fortune 500 clients. Focus on leadership development and organizational change.",
    requirements: ["Leadership Training", "Facilitation", "Change Management", "Needs Analysis"]
  }
];

export default function FeaturedJobs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured L&D Opportunities
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Discover the latest Learning & Development positions from top organizations worldwide.
            </p>
          </div>
          <Link 
            href="/jobs" 
            className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FEATURED_JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link 
            href="/jobs" 
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
          >
            View all
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 