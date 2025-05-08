"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import SlideIn from "./transitions/slide-in";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission with a delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message couldn't be sent. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "kamaun629@gmail.com",
      link: "mailto:kamaun629@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+254 759 155 650",
      link: "tel:+254759155650",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nairobi, Kenya",
      link: "https://maps.google.com/?q=Nairobi,Kenya",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Fri, 9AM - 5PM EAT",
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/kamau-n", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/kamauharrison",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:kamaun629@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 dark:bg-emerald-950/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-50/50 dark:bg-emerald-950/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.02]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SlideIn direction="up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 text-sm font-medium text-emerald-700 dark:text-emerald-400 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display tracking-tight">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'm always open to new ideas and collaborations.
          </p>
        </SlideIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact info column */}
          <SlideIn direction="left" className="lg:col-span-5">
            <Card className="overflow-hidden border-none shadow-xl bg-white dark:bg-slate-900 rounded-2xl">
              <CardContent className="p-0">
                <div className="p-8 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Contact Information</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Feel free to reach out through any of these channels. I'm
                      available for freelance work, collaborations, or just a
                      friendly chat about technology.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                            {item.title}
                          </h4>
                          {item.link ? (
                            <a
                              href={item.link}
                              target={
                                item.link.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                item.link.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium flex items-center gap-1 group">
                              {item.value}
                              <ExternalLink className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                            </a>
                          ) : (
                            <span className="text-slate-900 dark:text-white font-medium">
                              {item.value}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                    <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
                      Connect with me
                    </h4>
                    <div className="flex items-center gap-3">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -4 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-400 transition-all duration-300"
                          aria-label={link.label}>
                          <link.icon className="h-5 w-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="h-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 relative overflow-hidden">
                  <svg
                    className="absolute bottom-0 left-0 right-0 text-white dark:text-slate-900"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path
                      fill="currentColor"
                      fillOpacity="1"
                      d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </SlideIn>

          {/* Contact form column */}
          <SlideIn direction="right" className="lg:col-span-7">
            <Card className="overflow-hidden border-none shadow-xl bg-white dark:bg-slate-900 rounded-2xl">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8">
                      Thank you for reaching out. I'll review your message and
                      get back to you as soon as possible.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">Send a Message</h3>
                      <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                        All fields required
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-slate-700 dark:text-slate-300">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus-visible:ring-emerald-500 dark:focus-visible:ring-emerald-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-slate-700 dark:text-slate-300">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus-visible:ring-emerald-500 dark:focus-visible:ring-emerald-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="subject"
                        className="text-slate-700 dark:text-slate-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus-visible:ring-emerald-500 dark:focus-visible:ring-emerald-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-slate-700 dark:text-slate-300">
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project, timeline, and budget..."
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 focus-visible:ring-emerald-500 dark:focus-visible:ring-emerald-400 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full py-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium transition-all group"
                        disabled={isSubmitting}>
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="h-5 w-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span>Sending message...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            <span>Send Message</span>
                          </div>
                        )}
                      </Button>
                    </div>

                    <div className="text-center text-xs text-slate-500 dark:text-slate-400">
                      By submitting this form, you agree to receive a response
                      via email.
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </SlideIn>

          {/* Call to action */}
          <SlideIn direction="up" delay={0.3} className="lg:col-span-12">
            <div className="mt-8 text-center">
              <p className="text-slate-600 dark:text-slate-400">
                Prefer to see my work first?{" "}
                <a
                  href="#projects"
                  className="text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}>
                  Check out my projects
                  <ArrowUpRight className="h-3 w-3 ml-1" />
                </a>
              </p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
