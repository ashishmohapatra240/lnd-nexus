"use client";

import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

import {
  MessageSquare,
  ThumbsUp,
  User,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react";
import { Textarea } from "../ui/textarea";
// Mock data
const MOCK_POSTS = [
  {
    id: 1,
    title: "Best practices for virtual training",
    content:
      "I'm looking for advice on engaging remote learners effectively...",
    author: "Sarah Johnson",
    createdAt: new Date(2024, 2, 15),
    likes: 12,
    comments: [
      {
        id: 1,
        author: "Mike Smith",
        content: "I've found that interactive polls work great!",
        createdAt: new Date(2024, 2, 16),
      },
    ],
  },
  // Add more mock posts...
];

export default function ForumPosts() {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);
  const [commentInputs, setCommentInputs] = useState<Record<number, string>>(
    {}
  );

  const toggleExpandPost = (postId: number) => {
    setExpandedPosts(
      expandedPosts.includes(postId)
        ? expandedPosts.filter((id) => id !== postId)
        : [...expandedPosts, postId]
    );
  };

  return (
    <div className="space-y-6">
      {MOCK_POSTS.map((post) => {
        const isExpanded = expandedPosts.includes(post.id);

        return (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <div className="text-sm text-gray-500 mt-1">
                    Posted by {post.author} •{" "}
                    {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="whitespace-pre-line">{post.content}</p>
            </CardContent>

            <CardFooter className="flex justify-between border-t pt-4">
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-500">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  Like ({post.likes})
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500"
                  onClick={() => toggleExpandPost(post.id)}
                >
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {isExpanded ? "Hide Comments" : "Comments"}
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 ml-1" />
                  ) : (
                    <ChevronDown className="h-4 w-4 ml-1" />
                  )}
                </Button>
              </div>
              <div className="text-sm text-gray-500">
                {post.comments.length} comments
              </div>
            </CardFooter>

            {isExpanded && (
              <div className="px-6 pb-6 space-y-4">
                <div className="border-t pt-4 space-y-4">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <User className="h-4 w-4 text-gray-500" />
                      </div>
                      <div>
                        <div className="bg-gray-100 p-3 rounded-lg">
                          <p className="font-medium text-sm">
                            {comment.author}
                          </p>
                          <p className="text-gray-700 mt-1 text-sm">
                            {comment.content}
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDistanceToNow(comment.createdAt, {
                            addSuffix: true,
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Write a comment..."
                        className="min-h-0 h-10 py-2 resize-none flex-1"
                        value={commentInputs[post.id] || ""}
                        onChange={(e) =>
                          setCommentInputs({
                            ...commentInputs,
                            [post.id]: e.target.value,
                          })
                        }
                      />
                      <Button size="sm">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}
