"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import ForumPosts from "../components/forum/forum-posts";
import CreatePostForm from "../components/forum/create-post-form";

// // Mock user for demo
// const mockUser = {
//   id: 1,
//   name: "John Doe",
//   email: "john@example.com"
// };

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Forum</h1>
          <p className="text-gray-500">Connect with the L&D community</p>
        </div>
        
        {!showCreateForm && (
          <Button 
            onClick={() => setShowCreateForm(true)}
            className="mt-4 md:mt-0"
          >
            <Plus className="mr-2 h-4 w-4" /> New Discussion
          </Button>
        )}
      </div>
      
      {showCreateForm ? (
        <div className="mb-8">
          <CreatePostForm 
            onSuccess={() => setShowCreateForm(false)} 
            onCancel={() => setShowCreateForm(false)} 
          />
        </div>
      ) : (
        <>
          <Tabs 
            defaultValue={selectedCategory} 
            onValueChange={setSelectedCategory}
            className="mb-6"
          >
            <TabsList className="grid grid-cols-4 md:inline-flex">
              <TabsTrigger value="all">All Topics</TabsTrigger>
              <TabsTrigger value="discussion">Discussions</TabsTrigger>
              <TabsTrigger value="question">Questions</TabsTrigger>
              <TabsTrigger value="resource">Resources</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search discussions..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </>
      )}
      
      <ForumPosts />
      
      {!showCreateForm && (
        <div className="md:hidden fixed bottom-6 right-6">
          <Button 
            onClick={() => setShowCreateForm(true)}
            size="lg"
            className="rounded-full h-14 w-14 p-0 shadow-lg"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
} 