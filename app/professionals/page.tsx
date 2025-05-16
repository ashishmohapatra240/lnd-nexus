"use client";
import { useState } from "react";

import { Search, Filter, ArrowUpDown, Star } from "lucide-react";
import ProfessionalCard from "../components/ProfessionalCard";
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

// Mock data for professionals
const MOCK_PROFESSIONALS = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "Senior L&D Consultant",
    location: "New York, NY",
    rating: 4.8,
    reviewCount: 127,
    expertise: ["Leadership Development", "Corporate Training", "E-Learning"],
    certifications: ["ATD Master Trainer", "SHRM-SCP"],
    bio: "Specialized in creating transformative learning experiences with over 10 years of enterprise training expertise.",
    ratePerHour: 150,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
    yearsExperience: 10,
  },
  // Add more mock professionals...
];

// // Mock data for expertise areas
// const MOCK_EXPERTISE = [
//   { id: "1", name: "Leadership Development" },
//   { id: "2", name: "Instructional Design" },
//   { id: "3", name: "Digital Learning" },
//   { id: "4", name: "Performance Management" },
//   { id: "5", name: "Change Management" },
// ];

export default function ProfessionalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("rating");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [rateRange, setRateRange] = useState([0, 500]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="relative overflow-hidden mb-10 rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-blue-800"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>

        <div className="relative p-10 md:p-16 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm text-blue-100 font-medium mb-6 border border-blue-500/40">
              <Star className="h-4 w-4 mr-2 text-blue-300" />
              <span>Search our curated network of L&D professionals</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Find{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                Expert L&D Professionals
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Connect with industry-leading trainers and specialists who can
              elevate your organization&apos;s learning and development
              initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="bg-blue-600/90 h-6 w-1 rounded-full"></span>
              Find Your Perfect Match
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Input - Fixed overlapping icon */}
              <div className="relative flex items-center">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by title, skills, or location..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchTerm(e.target.value)
                  }
                />
              </div>

              {/* Experience Level Filter */}
              <Select
                value={experienceLevel}
                onValueChange={setExperienceLevel}
              >
                <SelectTrigger className="w-full">
                  <Filter className="mr-2 h-4 w-4 text-gray-400 shrink-0" />
                  <SelectValue placeholder="Experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Experience Level</SelectItem>
                  <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                  <SelectItem value="mid-level">
                    Mid Level (2-5 years)
                  </SelectItem>
                  <SelectItem value="senior">Senior (5-8 years)</SelectItem>
                  <SelectItem value="expert">Expert (8+ years)</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort Options */}
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-full">
                  <ArrowUpDown className="mr-2 h-4 w-4 text-gray-400 shrink-0" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="ratePerHour">Hourly Rate</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rate Range Filter - Fixed slider layout */}
      <div className="mb-8">
        <Card>
          <CardContent className="p-6 sm:p-8">
            <label className="text-lg font-bold mb-6 text-slate-800 flex items-center gap-2">
              <span className="bg-slate-700/90 h-6 w-1 rounded-full"></span>
              Hourly Rate Range ($)
            </label>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="relative flex-1 w-full">
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={rateRange[0]}
                    onChange={(e) =>
                      setRateRange([parseInt(e.target.value), rateRange[1]])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={rateRange[1]}
                    onChange={(e) =>
                      setRateRange([rateRange[0], parseInt(e.target.value)])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
              <div className="text-md font-medium bg-gradient-to-r from-slate-800 to-blue-700 text-white px-6 py-2 rounded-md min-w-[140px] text-center shadow-md whitespace-nowrap">
                ${rateRange[0]} - ${rateRange[1]}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PROFESSIONALS.map((professional) => (
          <ProfessionalCard key={professional.id} professional={professional} />
        ))}
      </div>

      {/* Pagination */}
      <div className="relative mt-10">
        <Card className="relative">
          <CardContent className="p-6 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline">Previous</Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
