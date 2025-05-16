import { ArrowRight, FileText, BookOpen, Video, MessageSquare } from "lucide-react";
import Link from "next/link";
import ResourceCard from "./ResourceCard";
import { Button } from "./ui/button";

const FEATURED_RESOURCES = [
  {
    id: "1",
    title: "Essential L&D Strategy Template for 2024",
    description: "A comprehensive template to help you plan and execute your learning and development initiatives.",
    type: "template" as const,
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    date: "Jan 15, 2024",
    readTime: "10 min"
  },
  {
    id: "2",
    title: "The Future of Corporate Learning: AI and Personalization",
    description: "Explore how artificial intelligence is transforming the landscape of corporate training and development.",
    type: "article" as const,
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
    date: "Jan 20, 2024",
    readTime: "15 min"
  },
  {
    id: "3",
    title: "Effective Remote Training Techniques",
    description: "Learn the best practices for delivering engaging virtual training sessions in a remote work environment.",
    type: "video" as const,
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    date: "Jan 25, 2024",
    readTime: "8 min"
  }
];

const RESOURCE_CATEGORIES = [
  {
    title: "Templates",
    icon: FileText,
    href: "/resources?type=templates",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Articles",
    icon: BookOpen,
    href: "/resources?type=articles",
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "Videos",
    icon: Video,
    href: "/resources?type=videos",
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Community",
    icon: MessageSquare,
    href: "/forum",
    color: "bg-purple-100 text-purple-600"
  }
];

export default function ResourceHub() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Resource Hub
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Access curated learning materials, templates, and articles from the L&D community.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {RESOURCE_CATEGORIES.map((category) => (
            <Link 
              key={category.title}
              href={category.href}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 group"
            >
              <div className={`${category.color} p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{category.title}</h3>
            </Link>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Featured Resources
            </h3>
            <Link 
              href="/resources" 
              className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View all
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_RESOURCES.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white"
            asChild
          >
            <Link href="/resources">
              Explore All Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 