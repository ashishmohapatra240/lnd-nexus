"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Menu,
  Home,
  Users,
  Briefcase,
  BookOpen,
  MessageSquare,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white font-bold text-xl p-2 rounded-lg mr-2">
                L&D
              </div>
              <span className="text-slate-800 font-bold text-2xl">Nexus</span>
            </Link>

            <nav className="hidden md:block ml-10">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/"
                    className="flex items-center px-3 py-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    <Home className="h-4 w-4 mr-1.5 text-slate-500" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/professionals"
                    className="flex items-center px-3 py-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    <Users className="h-4 w-4 mr-1.5 text-slate-500" />
                    Professionals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/jobs"
                    className="flex items-center px-3 py-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    <Briefcase className="h-4 w-4 mr-1.5 text-slate-500" />
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources"
                    className="flex items-center px-3 py-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    <BookOpen className="h-4 w-4 mr-1.5 text-slate-500" />
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/forum"
                    className="flex items-center px-3 py-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 mr-1.5 text-slate-500" />
                    Community
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-700 to-blue-600 text-white border-none shadow-sm hover:shadow-md hover:from-blue-800 hover:to-blue-700 transition-all"
                >
                  Register
                </Button>
              </Link>
            </div>

            <button
              className="md:hidden p-1.5 rounded-md text-slate-700 hover:bg-slate-100"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 px-2 bg-white border-t border-slate-100 rounded-b-lg shadow-lg">
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="flex items-center px-3 py-2.5 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                >
                  <Home className="h-5 w-5 mr-3 text-slate-500" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/professionals"
                  className="flex items-center px-3 py-2.5 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                >
                  <Users className="h-5 w-5 mr-3 text-slate-500" />
                  Find Professionals
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="flex items-center px-3 py-2.5 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                >
                  <Briefcase className="h-5 w-5 mr-3 text-slate-500" />
                  Job Board
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="flex items-center px-3 py-2.5 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                >
                  <BookOpen className="h-5 w-5 mr-3 text-slate-500" />
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/forum"
                  className="flex items-center px-3 py-2.5 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                >
                  <MessageSquare className="h-5 w-5 mr-3 text-slate-500" />
                  Community
                </Link>
              </li>

              <li className="pt-2 mt-2 border-t border-slate-100">
                <Link
                  href="/login"
                  className="flex items-center px-3 py-2.5 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                >
                  <Users className="h-5 w-5 mr-3 text-slate-500" />
                  Sign In
                </Link>
              </li>
              <li className="mt-3 px-3">
                <Link
                  href="/register"
                  className="block w-full text-center py-2.5 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white font-medium rounded-md shadow-sm"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
