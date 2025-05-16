import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProfessionalCard from "./ProfessionalCard";

const FEATURED_PROFESSIONALS = [
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
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Learning Experience Designer",
    location: "San Francisco, CA",
    rating: 4.9,
    reviewCount: 93,
    expertise: [
      "Instructional Design",
      "Digital Learning",
      "Performance Consulting",
    ],
    certifications: ["CPTD", "Adobe Certified"],
    bio: "Passionate about creating innovative learning solutions that drive measurable business results.",
    ratePerHour: 135,
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Emma Davis",
    title: "Executive Coach & Trainer",
    location: "London, UK",
    rating: 4.7,
    reviewCount: 156,
    expertise: ["Executive Coaching", "Team Building", "Change Management"],
    certifications: ["ICF PCC", "CIPD Level 7"],
    bio: "Helping leaders and organizations navigate change and build high-performing teams.",
    ratePerHour: 175,
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop",
  },
];

export default function FeaturedProfessionals() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured L&D Professionals
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Connect with our top-rated Learning & Development experts who are
              ready to help transform your organization.
            </p>
          </div>
          <Link
            href="/professionals"
            className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROFESSIONALS.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
            />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/professionals"
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
