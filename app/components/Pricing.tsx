"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";

type PricingPlan = {
  name: string;
  description: string;
  price: string;
  features: string[];
  disabledFeatures: string[];
  ctaText: string;
  ctaLink: string;
  popular?: boolean;
  borderColor: string;
};

const professionalPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "Get started with basic features",
    price: "$0",
    features: [
      "Basic profile",
      "5 job applications per month",
      "Access to community forum",
    ],
    disabledFeatures: [
      "Featured profile placement",
      "Video introduction",
    ],
    ctaText: "Get Started",
    ctaLink: "/register?type=professional&plan=free",
    borderColor: "border-slate-200",
  },
  {
    name: "Pro",
    description: "Everything you need to succeed",
    price: "$29",
    features: [
      "Enhanced profile with portfolio",
      "Unlimited job applications",
      "Video introduction",
      "Early access to job opportunities",
      "Profile analytics",
    ],
    disabledFeatures: [],
    ctaText: "Sign Up Now",
    ctaLink: "/register?type=professional&plan=pro",
    popular: true,
    borderColor: "border-blue-500",
  },
  {
    name: "Premium",
    description: "For established professionals",
    price: "$79",
    features: [
      "All Pro features",
      "Featured profile placement",
      "Direct consultation bookings",
      "Publish resources & articles",
      "Priority customer support",
    ],
    disabledFeatures: [],
    ctaText: "Get Premium",
    ctaLink: "/register?type=professional&plan=premium",
    borderColor: "border-slate-800",
  },
];

const companyPlans: PricingPlan[] = [
  {
    name: "Basic",
    description: "For small businesses",
    price: "$49",
    features: [
      "Company profile",
      "5 job postings per month",
      "Access to community forum",
      "Browse professional profiles",
    ],
    disabledFeatures: [
      "Featured job listings",
      "Advanced professional filtering",
    ],
    ctaText: "Get Started",
    ctaLink: "/register?type=company&plan=basic",
    borderColor: "border-slate-200",
  },
  {
    name: "Business",
    description: "For growing companies",
    price: "$149",
    features: [
      "Enhanced company profile",
      "20 job postings per month",
      "Featured job listings",
      "Advanced professional filtering",
      "Priority customer support",
    ],
    disabledFeatures: [],
    ctaText: "Sign Up Now",
    ctaLink: "/register?type=company&plan=business",
    popular: true,
    borderColor: "border-blue-500",
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "$349",
    features: [
      "All Business features",
      "Unlimited job postings",
      "Dedicated account manager",
      "Custom training solutions",
      "API access & integrations",
    ],
    disabledFeatures: [],
    ctaText: "Contact Sales",
    ctaLink: "/contact-sales",
    borderColor: "border-slate-800",
  },
];

export default function Pricing() {
  const [pricingType, setPricingType] = useState<"professional" | "company">("professional");
  const plans = pricingType === "professional" ? professionalPlans : companyPlans;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan for your L&D journey
          </p>
        </div>

        {/* Plan Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-slate-200 p-1 bg-white">
            <button
              onClick={() => setPricingType("professional")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                pricingType === "professional"
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              L&D Professionals
            </button>
            <button
              onClick={() => setPricingType("company")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                pricingType === "company"
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              Companies
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg border-t-4 ${plan.borderColor} hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-6 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-slate-600 mt-2">{plan.description}</p>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  <span className="text-slate-600">/month</span>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                  {plan.disabledFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-50">
                      <XCircle className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="text-slate-500">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-slate-800 to-blue-700 hover:from-slate-900 hover:to-blue-800 text-white shadow-md"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.ctaLink}>{plan.ctaText}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 