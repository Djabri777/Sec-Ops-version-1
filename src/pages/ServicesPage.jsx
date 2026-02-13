import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Network, 
  Cloud, 
  Shield, 
  Search, 
  Bug, 
  FileText,
  CheckCircle,
  ArrowRight,
  Lock,
  Database,
  Server
} from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      title: "Web Application Pentesting",
      description: "Comprehensive security testing for web applications, APIs, and SaaS platforms.",
      features: [
        "OWASP Top 10 vulnerability assessment",
        "Authentication and authorization testing",
        "SQL injection and XSS detection",
        "Business logic flaw identification",
        "API security analysis",
        "Session management review"
      ],
      gradient: "from-blue-500/10 to-cyan-500/10",
      techStack: ["BURP Suite", "OWASP ZAP", "Nuclei", "SQLMap"]
    },
    {
      icon: <Network className="w-12 h-12 text-blue-400" />,
      title: "Network Security Audits",
      description: "Deep-dive infrastructure testing to identify network vulnerabilities and misconfigurations.",
      features: [
        "Internal and external network scanning",
        "Firewall configuration review",
        "Wireless security assessment",
        "Port and service enumeration",
        "Network segmentation analysis",
        "VPN and remote access testing"
      ],
      gradient: "from-purple-500/10 to-pink-500/10",
      techStack: ["Nmap", "Metasploit", "Wireshark", "Nessus"]
    },
   
    {
      icon: <Server className="w-12 h-12 text-blue-400" />,
      title: "Red Team Operations",
      description: "Advanced adversarial simulations to test your entire security program.",
      features: [
        "Full-scope attack simulation",
        "Social engineering campaigns",
        "Physical security testing",
        "Incident response validation",
        "Purple team collaboration",
        "Custom exploit development"
      ],
      gradient: "from-violet-500/10 to-blue-500/10",
      techStack: ["Cobalt Strike", "Empire", "Mimikatz", "BloodHound"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Scope",
      description: "Define targets, rules of engagement, and success criteria.",
      icon: <Search className="w-8 h-8 text-blue-400" />
    },
    {
      number: "02",
      title: "Scanning",
      description: "Automated and manual reconnaissance to map your attack surface.",
      icon: <Shield className="w-8 h-8 text-blue-400" />
    },
    {
      number: "03",
      title: "Exploitation",
      description: "Ethical hacking to validate vulnerabilities and assess real-world impact.",
      icon: <Bug className="w-8 h-8 text-blue-400" />
    },
    {
      number: "04",
      title: "Reporting",
      description: "Detailed findings with severity ratings, evidence, and remediation guidance.",
      icon: <FileText className="w-8 h-8 text-blue-400" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">Comprehensive Security Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-zinc-100"
            >
              Professional Pentesting for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Every Attack Vector
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              We are building a dedicated gateway to provide startups and SMEs with expert-led security assessments. Our team is currently specializing in the Hack The Box CPTS path to ensure all penetration testing services follow industry-standard methodologies for high-quality, actionable results.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index }}
                className="group relative p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative">
                  {/* Icon */}
                  <div className="mb-6 inline-block p-4 rounded-xl bg-blue-500/10">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-zinc-100">{service.title}</h3>
                  
                  {/* Description */}
                  <p className="text-zinc-300 mb-6 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="mb-6 space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                        <span className="text-sm text-zinc-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Tools Used</p>
                    <div className="flex flex-wrap gap-2">
                      {service.techStack.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-100">
              Our Testing Process
            </h2>
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              A proven methodology that delivers actionable security insights
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                )}

                <div className="relative p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-blue-500/25 text-zinc-100">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-4">
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">{step.title}</h3>
                  
                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-12 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-400/30 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
            
            <div className="relative text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-100">
                Ready to Secure Your Startup?
              </h2>
              <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our security experts and get a customized security roadmap.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:shadow-2xl hover:shadow-blue-500/30 text-zinc-100"
              >
                <span>Get Your Free Security Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
