import {
  SearchIcon,
  BriefcaseIcon,
  StarIcon,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: SearchIcon,
    title: "For Companies",
    description: "Find the perfect L&D professionals for your organization",
    benefits: [
      "Access to verified L&D experts",
      "Custom-matched recommendations",
      "Streamlined hiring process",
    ],
  },
  {
    icon: BriefcaseIcon,
    title: "For L&D Professionals",
    description: "Showcase your expertise and find meaningful projects",
    benefits: [
      "Create detailed portfolios",
      "Connect with enterprise clients",
      "Flexible engagement models",
    ],
  },
  {
    icon: StarIcon,
    title: "Platform Benefits",
    description: "A specialized marketplace built for learning excellence",
    benefits: [
      "Secure payment protection",
      "Project management tools",
      "Dedicated support team",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            How L&D Nexus Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Connecting the right talent with the right opportunities through our
            specialized marketplace for Learning & Development professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-blue-500/20 rounded-2xl transform -rotate-1 scale-[1.02] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl">
                  <step.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {step.title}
                </h3>
                <p className="text-slate-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
