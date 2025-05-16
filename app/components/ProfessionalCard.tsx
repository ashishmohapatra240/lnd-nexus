import { Star, Calendar, Verified, User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
interface Professional {
  id: string;
  name: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  expertise: string[];
  certifications: string[];
  bio: string;
  ratePerHour: number;
  imageUrl?: string;
}

export default function ProfessionalCard({
  professional,
}: {
  professional: Professional;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group border border-gray-200">
      <div className="flex items-center p-6 border-b border-gray-100 bg-gradient-to-r from-white via-slate-50 to-white">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-800 via-slate-700 to-blue-700 flex items-center justify-center overflow-hidden shadow-lg transform group-hover:scale-105 transition-transform duration-300 border-2 border-slate-300">
          {professional.imageUrl ? (
            <Image
              src={professional.imageUrl}
              alt={professional.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-10 h-10 text-white" />
          )}
        </div>
        <div className="ml-5">
          <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors">
            {professional.name}
          </h3>
          <p className="text-slate-700/90 flex items-center mt-1">
            📍 {professional.location}
          </p>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${
                  i < professional.rating ? "text-amber-400" : "text-gray-300"
                } h-4 w-4`}
                fill={i < professional.rating ? "currentColor" : "none"}
              />
            ))}
            <span className="ml-1 text-sm text-slate-700 font-medium">
              {professional.rating.toFixed(1)} ({professional.reviewCount}{" "}
              reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mt-3">
            {professional.expertise.map((area, index) => (
              <span
                key={index}
                className="bg-slate-100 px-3 py-1 rounded-full text-slate-800 text-sm font-medium border border-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <div className="flex flex-wrap gap-2 mt-3">
            {professional.certifications.map((cert, index) => (
              <span
                key={index}
                className="flex items-center text-sm text-slate-800 bg-slate-100 px-3 py-1.5 rounded-md border border-slate-200"
              >
                <Verified className="text-blue-700 mr-1.5 h-4 w-4" />
                {cert}
              </span>
            ))}
          </div>
        </div>

        <p className="text-slate-900 mb-6 bg-slate-50 p-4 rounded-lg italic border-l-4 border-slate-400 shadow-md">
          &quot;{professional.bio}&quot;
        </p>

        <div className="flex items-center mb-5 text-slate-800 font-bold bg-slate-50 px-4 py-2.5 rounded-lg shadow-md border border-slate-200">
          <span className="text-md">
            Rate:{" "}
            <span className="text-blue-700">
              ${professional.ratePerHour}/hour
            </span>
          </span>
        </div>

        <div className="flex space-x-3">
          <Button
            className="flex-grow bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 shadow-md text-white"
            asChild
          >
            <Link href={`/professional-profile/${professional.id}`}>
              View Profile
            </Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white hover:bg-slate-100 border-slate-300 hover:border-slate-400 text-slate-700 transition-colors"
            asChild
          >
            <Link href={`/messages?professional=${professional.id}`}>
              <Calendar className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
