import { FileText, BookOpen, Video, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

interface Resource {
  id: string;
  title: string;
  description: string;
  type: "template" | "article" | "video";
  imageUrl: string;
  date: string;
  readTime?: string;
}

const typeIcons = {
  template: FileText,
  article: BookOpen,
  video: Video,
};

const typeColors = {
  template: "text-blue-600 bg-blue-100",
  article: "text-teal-600 bg-teal-100",
  video: "text-amber-600 bg-amber-100",
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = typeIcons[resource.type];
  const colorClass = typeColors[resource.type];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={resource.imageUrl}
          alt={resource.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 left-4 ${colorClass} p-2 rounded-lg`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-slate-600 text-sm mb-3">
          <Calendar className="h-4 w-4" />
          <span>{resource.date}</span>
          {resource.readTime && (
            <>
              <span className="text-slate-300">•</span>
              <span>{resource.readTime} read</span>
            </>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
          {resource.title}
        </h3>
        <p className="text-slate-600 mb-6 line-clamp-2">
          {resource.description}
        </p>
        
        <Button
          className="w-full bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white"
          asChild
        >
          <Link href={`/resources/${resource.id}`}>
            Read More
          </Link>
        </Button>
      </div>
    </div>
  );
} 