"use client";

import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { Search, Filter } from "lucide-react";
import JobCard from "../components/JobCard";

// Mock data
const MOCK_JOBS = [
  {
    id: "1",
    title: "Senior Learning Experience Designer",
    companyName: "TechEd Solutions",
    companyLogo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
    location: "New York, NY",
    jobType: "full-time" as const,
    remote: true,
    compensation: "$90,000 - $120,000",
    postedDate: "2 days ago",
    description: "Design and develop innovative learning experiences for enterprise clients...",
    requirements: [
      "5+ years L&D experience",
      "Instructional Design",
      "LMS Administration",
      "Project Management"
    ]
  },
  {
    id: "2",
    title: "Training Consultant",
    companyName: "Learning Partners Inc",
    companyLogo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
    location: "Chicago, IL",
    jobType: "contract" as const,
    remote: true,
    duration: "6 months",
    compensation: "$85/hour",
    postedDate: "1 week ago",
    description: "Lead training needs analysis and program development for Fortune 500 clients...",
    requirements: [
      "Corporate Training",
      "Needs Assessment",
      "Facilitation",
      "Content Development"
    ]
  },
  {
    id: "3",
    title: "E-Learning Developer",
    companyName: "Digital Learning Co",
    companyLogo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
    location: "Remote",
    jobType: "freelance" as const,
    remote: true,
    compensation: "Project-based",
    postedDate: "3 days ago",
    description: "Create engaging e-learning content using modern authoring tools...",
    requirements: [
      "Articulate Storyline",
      "Adobe Creative Suite",
      "HTML/CSS",
      "Video Editing"
    ]
  }
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("all");
  const [remoteOnly, setRemoteOnly] = useState(false);
  
  // Filter jobs based on search and filters
  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = !searchTerm || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.requirements.some(req => req.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = jobType === "all" || job.jobType === jobType;
    const matchesRemote = !remoteOnly || job.remote;
    
    return matchesSearch && matchesType && matchesRemote;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">L&D Job Opportunities</h1>
          <p className="text-gray-500">Find training and development projects</p>
        </div>
      </div>
      
      {/* Search and filter section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search box */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search jobs by title, skills, or location..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Job type filter */}
          <div>
            <Select value={jobType} onValueChange={setJobType}>
              <SelectTrigger className="w-full">
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Job type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Job Types</SelectItem>
                <SelectItem value="full-time">Full-time</SelectItem>
                <SelectItem value="part-time">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Remote checkbox */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="remote" 
                checked={remoteOnly}
                onCheckedChange={(checked: boolean) => setRemoteOnly(checked === true)}
              />
              <label
                htmlFor="remote"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remote only
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">
          {filteredJobs.length} jobs found
        </p>
      </div>
      
      {/* Job listings */}
      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <p className="text-gray-500 mb-4">
              No job listings found matching your criteria. Try adjusting your filters.
            </p>
            <Button onClick={() => {
              setSearchTerm("");
              setJobType("all");
              setRemoteOnly(false);
            }}>
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
      
      {/* Pagination */}
      {filteredJobs.length > 0 && (
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="mx-1">1</Button>
          <Button variant="outline" className="mx-1">2</Button>
          <Button variant="outline" className="mx-1">3</Button>
          <Button variant="outline" className="mx-1">Next</Button>
        </div>
      )}
    </div>
  );
} 