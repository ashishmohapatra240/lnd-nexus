import Link from "next/link";
import { ArrowRight, Award, Users, Sparkles } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-blue-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/60 backdrop-blur-sm text-blue-200 text-sm font-medium mb-6 border border-blue-700/50">
              The Premier L&D Marketplace
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-white leading-[1]">
              Connect With Learning & Development Professionals
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl">
              Find expert trainers, post your L&D projects, or showcase your
              professional expertise - all in one powerful platform built for
              enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="font-medium bg-white text-black hover:bg-blue-800 hover:text-white border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
                asChild
              >
                <Link href="/get-started">
                  My Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 opacity-50 blur-sm"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Hero image"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

              {/* Feature badges */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-wrap gap-3 justify-center">
                <div className="bg-blue-900/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center text-sm text-blue-100 border border-blue-700/50">
                  <Sparkles className="h-4 w-4 mr-2 text-blue-400" />
                  Modern Stack
                </div>
                <div className="bg-blue-900/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center text-sm text-blue-100 border border-blue-700/50">
                  <Users className="h-4 w-4 mr-2 text-blue-400" />
                  Community Driven
                </div>
                <div className="bg-blue-900/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center text-sm text-blue-100 border border-blue-700/50">
                  <Award className="h-4 w-4 mr-2 text-blue-400" />
                  Production Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
