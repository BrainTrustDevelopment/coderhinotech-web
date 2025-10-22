"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from '@/lib/motion-wrapper';
import { Brain, Users, Lightbulb, Target, Rocket, Shield, TrendingUp, Zap, GraduationCap, Wrench, Cpu, HeartHandshake, Mail } from 'lucide-react';

const services = [
  {
    title: 'Company Workshops',
    description: 'Interactive training sessions to build team AI literacy and develop industry-specific application strategies.',
    icon: GraduationCap,
  },
  {
    title: 'Implementation and Training',
    description: 'Guidance for integrating existing AI tools into business workflows with team enablement.',
    icon: Wrench,
  },
  {
    title: 'Custom Solutions',
    description: 'Business audits identifying AI opportunities, followed by tailored tool development aligned with company objectives.',
    icon: Cpu,
  },
  {
    title: 'Fractional AI Officer',
    description: 'On-demand expert guidance providing continuous strategic support for AI initiatives.',
    icon: Target,
  },
];

const differentiators = [
  {
    title: 'Customized Solutions',
    description: 'Tailored strategies designed for your unique business needs, not one-size-fits-all approaches.',
    icon: Target,
  },
  {
    title: 'Real-World Focus',
    description: 'Practical implementation over theory - we focus on applications that drive real business value.',
    icon: Rocket,
  },
  {
    title: 'Ethical AI',
    description: 'Responsible AI implementation with transparency, privacy, and ethical considerations at the forefront.',
    icon: Shield,
  },
  {
    title: 'Long-Term Partnership',
    description: 'Ongoing support and adaptive strategies that evolve with technology and your business needs.',
    icon: HeartHandshake,
  },
  {
    title: 'Strategic Expertise',
    description: 'Deep AI knowledge combined with business acumen to align technology with your objectives.',
    icon: Lightbulb,
  },
  {
    title: 'Continuous Innovation',
    description: 'Stay ahead of the curve with adaptive strategies in the rapidly evolving AI landscape.',
    icon: TrendingUp,
  },
];

export default function BrainTrustPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center mb-6"
            >
              <div className="relative flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-2xl">
                <Brain className="w-10 h-10 text-purple-400" />
                <Zap className="absolute w-5 h-5 text-violet-400 animate-pulse top-0 right-0" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-600">BrainTrust</span> LLC
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-2xl md:text-3xl text-purple-300 mb-4 font-semibold"
            >
              The Tech Landscape is Moving WAY Too Fast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl mx-auto"
            >
              We help businesses navigate rapid technological change by developing customized AI strategies and solutions.
              Stay ahead with practical implementation, not just theoretical discussions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 relative">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Our AI Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              Comprehensive AI consulting services designed to transform your business through strategic implementation.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-purple-900/50 transition-all duration-300 h-full hover:translate-y-[-4px] group">
                  <CardHeader>
                    <div className="bg-purple-500/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 md:py-28 relative bg-slate-900/30">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Why Choose The BrainTrust
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              Our commitment to customized, ethical, and practical AI implementation sets us apart.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="bg-gradient-to-br from-slate-900/70 to-slate-900/30 border-slate-800 backdrop-blur-sm hover:border-purple-800/50 transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="bg-gradient-to-br from-purple-500/20 to-violet-500/10 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-3 group-hover:from-purple-500/30 group-hover:to-violet-500/20 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-white text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 text-sm">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-purple-800/30 rounded-2xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how The BrainTrust can help you navigate the rapidly evolving AI landscape and implement strategies that drive real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="mailto:info@thebraintrust.ai">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 text-white px-8"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <p className="text-slate-500 text-sm mb-2">Contact us directly</p>
                <a
                  href="mailto:info@thebraintrust.ai"
                  className="text-purple-400 hover:text-purple-300 transition-colors text-lg font-medium"
                >
                  info@thebraintrust.ai
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
