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
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/ui/image-with-fallback";
import {
  Search,
  FileText,
  BookOpen,
  Video,
  HeadphonesIcon,
  User,
  Eye,
  Tag,
} from "lucide-react";

// Mock data types
interface Resource {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  resourceType: string;
  categoryId: number;
  authorId: number;
  authorName: string;
  createdAt: string;
}

interface Category {
  id: number;
  name: string;
}

// Mock data
const MOCK_RESOURCES: Resource[] = [
  {
    id: 1,
    title: "Introduction to Learning Design",
    description:
      "A comprehensive guide to creating effective learning experiences. Learn the fundamentals of instructional design and how to create engaging content.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
    resourceType: "article",
    categoryId: 1,
    authorId: 1,
    authorName: "Sarah Johnson",
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: 2,
    title: "Training Needs Assessment Template",
    description:
      "Ready-to-use template for conducting thorough training needs assessments in your organization.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
    resourceType: "template",
    categoryId: 2,
    authorId: 2,
    authorName: "Michael Chen",
    createdAt: "2024-03-14T15:30:00Z",
  },
  {
    id: 3,
    title: "Effective Virtual Training Techniques",
    description:
      "Video tutorial on engaging remote learners and maintaining participation in virtual training sessions.",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
    resourceType: "video",
    categoryId: 3,
    authorId: 3,
    authorName: "Emily Rodriguez",
    createdAt: "2024-03-13T09:15:00Z",
  },
];

const MOCK_CATEGORIES: Category[] = [
  { id: 1, name: "Learning Design" },
  { id: 2, name: "Training Delivery" },
  { id: 3, name: "Assessment" },
  { id: 4, name: "E-Learning" },
  { id: 5, name: "Leadership Development" },
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [resourceType, setResourceType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  // Helper to get resource type icon
  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <BookOpen className="h-5 w-5" />;
      case "template":
        return <FileText className="h-5 w-5" />;
      case "video":
        return <Video className="h-5 w-5" />;
      case "webinar":
        return <HeadphonesIcon className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  // Filter resources based on search and filters
  const filteredResources = MOCK_RESOURCES.filter((resource) => {
    const matchesSearch =
      searchTerm === "" ||
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      resourceType === "all" || resource.resourceType === resourceType;
    const matchesCategory =
      !selectedCategory || resource.categoryId === selectedCategory;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Resource Hub</h1>
          <p className="text-gray-500">
            Access L&D materials, templates, and knowledge
          </p>
        </div>
      </div>

      <Tabs
        defaultValue={resourceType}
        onValueChange={setResourceType}
        className="mb-6"
      >
        <TabsList className="w-full md:w-auto grid grid-cols-5 md:inline-flex">
          <TabsTrigger value="all" className="flex items-center">
            All
          </TabsTrigger>
          <TabsTrigger value="article" className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" /> Articles
          </TabsTrigger>
          <TabsTrigger value="template" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" /> Templates
          </TabsTrigger>
          <TabsTrigger value="video" className="flex items-center">
            <Video className="mr-2 h-4 w-4" /> Videos
          </TabsTrigger>
          <TabsTrigger value="webinar" className="flex items-center">
            <HeadphonesIcon className="mr-2 h-4 w-4" /> Webinars
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Search and filter section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <div className="space-y-4">
          {/* Search input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search resources by title or description..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <Select
                value={selectedCategory?.toString() || "0"}
                onValueChange={(value) =>
                  setSelectedCategory(value === "0" ? null : parseInt(value))
                }
              >
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Filter by category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">All Categories</SelectItem>
                  {MOCK_CATEGORIES.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Reset filters button */}
            {(searchTerm || resourceType !== "all" || selectedCategory) && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setResourceType("all");
                  setSelectedCategory(null);
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500">
          {filteredResources.length} resources found
        </p>
      </div>

      {/* Resource listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <Card
            key={resource.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-48 overflow-hidden">
              <ImageWithFallback
                src={resource.imageUrl}
                alt={resource.title}
                className="w-full h-full object-cover"
                fallbackClassName="w-full h-48 flex items-center justify-center bg-gray-100"
                fallbackContent={getResourceTypeIcon(resource.resourceType)}
              />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="secondary" className="flex items-center">
                  {getResourceTypeIcon(resource.resourceType)}
                  <span className="ml-1">
                    {resource.resourceType.charAt(0).toUpperCase() +
                      resource.resourceType.slice(1)}
                  </span>
                </Badge>

                {resource.categoryId && (
                  <Badge variant="outline" className="flex items-center">
                    <Tag className="h-3 w-3 mr-1" />
                    <span>
                      {
                        MOCK_CATEGORIES.find(
                          (cat) => cat.id === resource.categoryId
                        )?.name
                      }
                    </span>
                  </Badge>
                )}
              </div>

              <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
              <p className="text-gray-700 mb-4 line-clamp-2">
                {resource.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    By {resource.authorName}
                  </span>
                </div>

                <Button variant="ghost" size="sm" className="text-primary">
                  <Eye className="mr-1 h-4 w-4" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
