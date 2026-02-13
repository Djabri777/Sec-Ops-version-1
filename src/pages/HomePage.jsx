import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Activity, FileCheck, ChevronRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const services = [
    {
      icon: <Activity className="w-8 h-8 text-blue-400" />,
      title: "Continuous Pentesting",
      description: "Managed security audits that move at the speed of your code. Stay protected as you ship features.",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-400" />,
      title: "Vulnerability Dashboard",
      description: "Real-time visibility into your security posture. Track, prioritize, and remediate threats efficiently.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <FileCheck className="w-8 h-8 text-blue-400" />,
      title: "Compliance Readiness",
      description: "Helping Algerian startups achieve global security standards. ISO 27001, SOC 2, and beyond.",
      gradient: "from-pink-500/10 to-blue-500/10"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "45,000",
      currency: "DZD",
      description: "Perfect for early-stage validation",
      features: [
        "One-time basic security scan",
        "Automated vulnerability detection",
        "Comprehensive PDF report",
        "Email support",
        
      ],
      cta: "Start Scan",
      highlighted: false
    },
    {
      name: "Growth",
      price: "120,000",
      currency: "DZD",
      description: "For startups serious about security",
      features: [
        "Full web application pentesting",
        "Manual expert security review",
        "OWASP Top 10 compliance",
        "Slack/Teams integration",
        "Quarterly re-testing included",
        "Security roadmap consultation"
      ],
      cta: "Launch Audit",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "400,000",
      currency: "DZD",
      description: "Large-scale infrastructures requiring advanced adversary simulation",
      features: [
        "Full infrastructure pentesting",
        " Advanced Adversary Simulation (Red Teaming)",
        "Comprehensive Incident Response Planning",
        "Remediation support included",
        "Incident response planning",
        "Unlimited pentesting credits"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-400">Your Gateway to Professional Pentesting</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-zinc-100"
            >
              Professional Security Audits for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Start-Ups and Small Enterprises
              </span>{' '}
              
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              A dedicated digital gateway designed to provide startups with accessible, professional security assessments. 
              We simplify the path to securing your digital assets through expert-led penetration testing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/signup"
                className="group px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:shadow-2xl hover:shadow-blue-500/30 flex items-center space-x-2 text-zinc-100"
              >
                <span>Launch Your First Audit</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-zinc-700 hover:border-blue-400 rounded-lg font-semibold transition-all hover:bg-blue-500/5 text-zinc-100"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Service Grid */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-100">
              Security That Scales With You
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Modern security tooling designed for the pace of startup innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="group relative p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative">
                  <div className="mb-4 inline-block p-3 rounded-xl bg-blue-500/10">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-zinc-100">{service.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
            >
              <span>View All Services</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-100">
              The Trust Tiers
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              Transparent pricing for Algerian startups. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all ${
                  tier.highlighted
                    ? 'bg-gradient-to-b from-blue-500/20 to-purple-500/20 border-2 border-blue-400 shadow-2xl shadow-blue-500/20 scale-105'
                    : 'bg-white/5 border border-white/10 hover:border-blue-400/30'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-sm font-semibold text-zinc-100">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-zinc-100">{tier.name}</h3>
                  <p className="text-zinc-400 text-sm">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-zinc-100">{tier.price}</span>
                    {tier.currency && <span className="text-zinc-400 ml-2">{tier.currency}</span>}
                  </div>
                </div>

                <Link
                  to="/signup"
                  className={`block w-full py-3 rounded-lg font-semibold mb-8 transition-all text-center ${
                    tier.highlighted
                      ? 'bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/25 text-zinc-100'
                      : 'bg-white/10 hover:bg-white/20 border border-white/20 text-zinc-100'
                  }`}
                >
                  {tier.cta}
                </Link>

                <ul className="space-y-4">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
