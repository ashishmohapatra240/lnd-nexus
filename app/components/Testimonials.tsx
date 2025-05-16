import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content: "As a corporate learning manager, finding qualified L&D specialists used to be a time-consuming process. L&D Nexus has streamlined our hiring process and helped us find perfect matches for our training initiatives.",
    name: "David Chen",
    position: "Learning Manager, Enterprise Solutions Inc.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 2,
    content: "The platform's focus on learning and development has connected me with clients who truly value my expertise. The resource hub has been invaluable for my professional development.",
    name: "Maria Rodriguez",
    position: "Independent L&D Consultant",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 3,
    content: "We've transformed our L&D initiatives through the exceptional professionals we've found on this platform. The quality of talent and the seamless collaboration tools are outstanding.",
    name: "Sarah Thompson",
    position: "Head of Training, Global Tech Corp",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800/40 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Hear from L&D professionals and organizations who have found success through our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/[0.15] transition-colors duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`${
                      i < testimonial.rating ? "text-amber-400" : "text-gray-500"
                    } h-4 w-4 fill-current`}
                  />
                ))}
              </div>
              
              <blockquote className="mb-6">
                <p className="text-blue-50 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </blockquote>
              
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <cite className="font-medium text-white not-italic">
                    {testimonial.name}
                  </cite>
                  <p className="text-blue-200 text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 