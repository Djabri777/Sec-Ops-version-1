import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full relative z-10"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 group">
            <Shield className="w-10 h-10 text-blue-400" strokeWidth={2} />
            <span className="text-2xl font-bold text-zinc-100">SecOps</span>
          </Link>
        </div>

        {/* Sign In Card */}
        <div className="p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-zinc-100 mb-2">Welcome Back</h1>
            <p className="text-zinc-400">Sign in to access your security dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 rounded border-white/10 bg-white/5 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-zinc-400">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:shadow-2xl hover:shadow-blue-500/30 flex items-center justify-center space-x-2 text-zinc-100"
            >
              <span>Sign In</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-zinc-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center text-sm text-zinc-500">
          <Lock className="w-4 h-4 inline-block mr-1" />
          Your connection is encrypted and secure
        </div>
      </motion.div>
    </div>
  );
};

export default SignInPage;
