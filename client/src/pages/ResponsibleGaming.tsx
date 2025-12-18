import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Calendar, Clock, Users, Brain, Shield, AlertTriangle, Phone, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ResponsibleGaming() {
  const lastUpdated = "December 18, 2024";

  const guidelines = [
    { icon: Clock, title: "Set Time Limits", description: "Decide how much time you'll spend and stick to it" },
    { icon: Brain, title: "Play for Fun", description: "Fantasy cricket is entertainment, not stress" },
    { icon: Users, title: "Maintain Balance", description: "Keep healthy balance with other activities" },
    { icon: Shield, title: "Stay Informed", description: "Understand the rules and make better decisions" }
  ];

  const warningSignsPersonal = [
    "Spending more time than intended on fantasy cricket",
    "Neglecting work, studies, or personal responsibilities",
    "Feeling restless or irritable when not playing",
    "Lying to others about time spent on the platform",
    "Using fantasy cricket to escape problems"
  ];

  const healthyHabits = [
    "Set a daily or weekly time limit",
    "Take a break every hour when playing",
    "Don't play when tired, stressed, or emotional",
    "Keep fantasy cricket as one of many hobbies",
    "Talk to friends and family about your gaming habits"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm text-white/80">Your Wellbeing Matters</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Responsible Gaming
            </h1>
            <p className="text-lg text-white/70 mb-6">
              Play smart, stay balanced, and enjoy fantasy cricket responsibly
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-white/60">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free to Play Notice */}
      <section className="py-6 bg-green-50 border-b border-green-200">
        <div className="container">
          <div className="max-w-4xl mx-auto flex items-center justify-center space-x-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="font-bold text-green-800">100% Free to Play - No Real Money</h3>
              <p className="text-sm text-green-700">Our platform involves no financial risk - play purely for entertainment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Guidelines for Healthy Gaming</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guidelines.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="p-5 bg-gray-50 rounded-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warning Signs & Healthy Habits */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Warning Signs */}
              <motion.div 
                className="bg-white rounded-2xl border border-amber-200 overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-amber-50 px-6 py-4 border-b border-amber-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-bold text-amber-800">Warning Signs</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {warningSignsPersonal.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Healthy Habits */}
              <motion.div 
                className="bg-white rounded-2xl border border-green-200 overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Heart className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold text-green-800">Healthy Habits</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {healthyHabits.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Support Resources */}
            <motion.div 
              className="mt-10 bg-white rounded-2xl border border-blue-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-800">Support Resources</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">If you or someone you know needs support:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-1">iCall - TISS</h4>
                    <p className="text-blue-600 font-medium mb-1">9152987821</p>
                    <p className="text-sm text-gray-500">Free psychological counseling</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-1">Vandrevala Foundation</h4>
                    <p className="text-blue-600 font-medium mb-1">1860-2662-345</p>
                    <p className="text-sm text-gray-500">24/7 mental health helpline</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Age Restriction */}
            <motion.div 
              className="mt-10 bg-red-50 border border-red-200 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-xl">18+</span>
                </div>
                <div>
                  <h3 className="font-bold text-red-800 mb-1">Age Restriction</h3>
                  <p className="text-red-700 text-sm">
                    Kaveramma Fantasy Cricket is strictly for users aged 18 and above. We verify age during registration.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Need Help CTA */}
            <motion.div 
              className="mt-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Heart className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">Need Help?</h3>
              <p className="text-white/80 max-w-xl mx-auto mb-6">
                If you have questions about responsible gaming or need support, our team is here to help.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90">
                  Contact Support
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
