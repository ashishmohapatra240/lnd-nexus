import {
  MapPin,
  Calendar,
  Clock,
  DollarSign,
  Building,
  Bookmark,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface Job {
  id: string;
  title: string;
  companyName: string;
  companyLogo?: string;
  location: string;
  jobType: "full-time" | "part-time" | "contract" | "freelance";
  remote: boolean;
  duration?: string;
  compensation: string;
  postedDate: string;
  description: string;
  requirements: string[];
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-slate-200">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-slate-100 p-2 border border-slate-200 flex items-center justify-center">
            {job.companyLogo ? (
              <Image
                src={job.companyLogo}
                alt={job.companyName}
                width={40}
                height={40}
                className="object-contain"
              />
            ) : (
              <Building className="w-6 h-6 text-slate-400" />
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
            <p className="text-blue-600 font-medium">{job.companyName}</p>
          </div>
        </div>
        <span
          className={`
          px-3 py-1 rounded-full text-sm font-medium
          ${job.jobType === "full-time" ? "bg-blue-100 text-blue-800" : ""}
          ${job.jobType === "part-time" ? "bg-purple-100 text-purple-800" : ""}
          ${job.jobType === "contract" ? "bg-amber-100 text-amber-800" : ""}
          ${
            job.jobType === "freelance" ? "bg-emerald-100 text-emerald-800" : ""
          }
        `}
        >
          {job.jobType
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-2 text-slate-600">
          <MapPin className="h-4 w-4" />
          <span>
            {job.location} {job.remote && "(Remote)"}
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Clock className="h-4 w-4" />
          <span>{job.duration || "Permanent"}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <DollarSign className="h-4 w-4" />
          <span className="font-medium">{job.compensation}</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <Calendar className="h-4 w-4" />
          <span>{job.postedDate}</span>
        </div>
      </div>

      <p className="text-slate-600 mb-6 line-clamp-2">{job.description}</p>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((skill, index) => (
            <span
              key={index}
              className="bg-slate-100 px-3 py-1 rounded-full text-slate-700 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          className="flex-grow bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white shadow-md"
          asChild
        >
          <Link href={`/job/${job.id}`}>View Details</Link>
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="border-slate-200 hover:bg-slate-100"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
