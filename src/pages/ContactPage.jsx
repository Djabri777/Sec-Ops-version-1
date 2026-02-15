import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null); // 'success', 'error', or null

  const serviceTypes = [
    'Web Application Pentesting',
    'Network Security Audit',
    'Red Team Operations',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceType: '',
        message: ''
      });
      setFormStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      title: "Office Location",
details: ["Djelfa, Algeria", "Available for remote consultations"]
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      details: ["contact@secops.dz", "Response within 24 hours"]
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: "Phone",
      details: ["+213 665 869 346", "24/7 support for Enterprise clients"]
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
              <Send className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">Get In Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-zinc-100"
            >
              Let's Secure Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Digital Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Ready to take the first step toward enterprise-grade security? 
              Reach out to our team and we'll schedule a free consultation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form + Sidebar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
                <h2 className="text-3xl font-bold mb-6 text-zinc-100">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Full Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Ahmed Benali"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="ahmed@startup.dz"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Your Startup Inc."
                    />
                  </div>
                  <div>
                      {/* Phone Number */}
  <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
    Mobile Phone <span className="text-blue-400">*</span>
  </label>
  <div className="relative">
    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
    <input
      type="tel"
      id="phone"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
      className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-400 transition-colors"
      placeholder="+213 XXX XXX XXX"
    />
  </div>
</div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-zinc-300 mb-2">
                      Service Interest <span className="text-blue-400">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-100 focus:outline-none focus:border-blue-400 transition-colors"
                    >
                      <option value="" className="bg-[#020617]">Select a service</option>
                      {serviceTypes.map((service, index) => (
                        <option key={index} value={service} className="bg-[#020617]">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                      placeholder="Tell us about your security needs and goals..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center space-x-2 text-zinc-100"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </button>

                  {/* Success/Error Messages */}
                  {formStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400">Message sent successfully! We'll be in touch soon.</span>
                    </motion.div>
                  )}
                  {/* Mobile Phone */}


                  {formStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 p-4 rounded-lg bg-red-500/10 border border-red-500/30"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400" />
                      <span className="text-red-400">Something went wrong. Please try again.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-zinc-100">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-blue-500/10">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-100 mb-1">{info.title}</h4>
                        {info.details.map((detail, dIndex) => (
                          <p key={dIndex} className="text-zinc-400 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

             

             
             
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-blue-950/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-100">
            Have Questions?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            We've compiled answers to common questions about our services, pricing, and engagement process.
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            <span>View FAQ</span>
            <CheckCircle className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
