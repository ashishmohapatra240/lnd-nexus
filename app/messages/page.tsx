"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  Search,
  Building,
  Send,
  ArrowLeft,
  MessageCircle,
  MoreVertical,
} from "lucide-react";

const mockContacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    userType: "professional",
    lastMessage:
      "Thanks for reaching out! I'd be happy to discuss the training program.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    unread: 2,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "TechCorp Solutions",
    userType: "company",
    lastMessage: "We're interested in your L&D consulting services.",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    unread: 0,
    avatar: "TC",
  },
  {
    id: 3,
    name: "Michael Chen",
    userType: "professional",
    lastMessage: "The workshop materials look great!",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    unread: 1,
    avatar: "MC",
  },
  {
    id: 4,
    name: "Innovation Labs",
    userType: "company",
    lastMessage: "Can we schedule a call for next week?",
    lastMessageTime: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    unread: 0,
    avatar: "IL",
  },
];

const mockMessages = [
  {
    id: 1,
    senderId: 1,
    receiverId: "current-user",
    content:
      "Hi! I saw your profile and I'm interested in learning more about your training programs.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    isOwn: false,
  },
  {
    id: 2,
    senderId: "current-user",
    receiverId: 1,
    content:
      "Hello Sarah! Thanks for reaching out. I'd be happy to discuss our programs with you.",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    isOwn: true,
  },
  {
    id: 3,
    senderId: 1,
    receiverId: "current-user",
    content:
      "That sounds great! Could you tell me more about your leadership development track?",
    timestamp: new Date(Date.now() - 1000 * 60 * 40),
    isOwn: false,
  },
  {
    id: 4,
    senderId: "current-user",
    receiverId: 1,
    content:
      "Absolutely! Our leadership development program is a 6-month comprehensive track that covers strategic thinking, team management, and communication skills.",
    timestamp: new Date(Date.now() - 1000 * 60 * 35),
    isOwn: true,
  },
  {
    id: 5,
    senderId: 1,
    receiverId: "current-user",
    content:
      "Thanks for reaching out! I'd be happy to discuss the training program.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    isOwn: false,
  },
];

export default function Messages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactId, setSelectedContactId] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);

  // Filter contacts by search term
  const filteredContacts = mockContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get selected contact
  const selectedContact = mockContacts.find(
    (contact) => contact.id === selectedContactId
  );

  // Get messages for selected contact
  const contactMessages = mockMessages.filter(
    (msg) =>
      msg.senderId === selectedContactId || msg.receiverId === selectedContactId
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // TODO: Add actual message sending logic here
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  const formatTime = (date: Date) => {
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      const minutes = Math.floor(diffInHours * 60);
      return `${minutes}m ago`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`;
    } else {
      const days = Math.floor(diffInHours / 24);
      return `${days}d ago`;
    }
  };

  const formatMessageTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-slate-50 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Messages</h1>
          <p className="text-slate-600">
            Communicate with professionals and companies
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          style={{ height: "70vh" }}
        >
          <div className="flex h-full">
            {/* Contacts Sidebar */}
            <div
              className={`w-full md:w-1/3 border-r border-slate-200 flex flex-col ${
                isMobileView && selectedContactId ? "hidden md:flex" : ""
              }`}
            >
              {/* Search Header */}
              <div className="p-4 border-b border-slate-200">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Contacts List */}
              <div className="flex-1 overflow-y-auto">
                {filteredContacts.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                    <MessageCircle className="h-12 w-12 text-slate-300 mb-4" />
                    <p className="text-slate-500 mb-2">
                      No conversations found
                    </p>
                    <p className="text-sm text-slate-400">
                      Start a conversation by visiting a professional&apos;s
                      profile
                    </p>
                  </div>
                ) : (
                  <div>
                    {filteredContacts.map((contact) => (
                      <div
                        key={contact.id}
                        className={`p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors ${
                          selectedContactId === contact.id
                            ? "bg-blue-50 border-blue-200"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedContactId(contact.id);
                          setIsMobileView(true);
                        }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                            {contact.userType === "company" ? (
                              <Building className="h-6 w-6" />
                            ) : (
                              contact.avatar
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="font-semibold text-slate-900 truncate">
                                {contact.name}
                              </h3>
                              <span className="text-xs text-slate-500 ml-2">
                                {formatTime(contact.lastMessageTime)}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 truncate">
                              {contact.lastMessage}
                            </p>
                            {contact.userType === "company" && (
                              <span className="inline-block mt-1 px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">
                                Company
                              </span>
                            )}
                          </div>
                          {contact.unread > 0 && (
                            <div className="w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                              {contact.unread}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Message Thread */}
            <div
              className={`flex-1 flex flex-col ${
                !selectedContactId || (isMobileView ? "" : "hidden md:flex")
              }`}
            >
              {selectedContact ? (
                <>
                  {/* Message Header */}
                  <div className="p-4 border-b border-slate-200 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Button
                          onClick={() => setIsMobileView(false)}
                          className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
                        >
                          <ArrowLeft className="h-5 w-5" />
                        </Button>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                          {selectedContact.userType === "company" ? (
                            <Building className="h-5 w-5" />
                          ) : (
                            selectedContact.avatar
                          )}
                        </div>
                        <div>
                          <h2 className="font-semibold text-slate-900">
                            {selectedContact.name}
                          </h2>
                          <p className="text-sm text-slate-500">
                            {selectedContact.userType === "company"
                              ? "Company"
                              : "Professional"}
                          </p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-slate-100 rounded-lg">
                        <MoreVertical className="h-5 w-5 text-slate-400" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {contactMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.isOwn ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                            message.isOwn
                              ? "bg-blue-600 text-white"
                              : "bg-slate-100 text-slate-900"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.isOwn ? "text-blue-100" : "text-slate-500"
                            }`}
                          >
                            {formatMessageTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <div className="p-4 border-t border-slate-200 bg-white">
                    <form
                      onSubmit={handleSendMessage}
                      className="flex space-x-3"
                    >
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700"
                        disabled={!newMessage.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </>
              ) : (
                /* Empty State */
                <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    Your Messages
                  </h3>
                  <p className="text-slate-500 mb-6 max-w-sm">
                    Select a conversation from the sidebar to start messaging,
                    or visit a professional&apos;s profile to start a new
                    conversation.
                  </p>
                  <Link href="/professionals">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Browse Professionals
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
