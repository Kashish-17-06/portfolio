"use client";

import React, { useState } from "react";
import { content } from "@/data/content";
import {
  Mail,
  Send,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(content.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const endpoint = content.personal.formspreeEndpoint;

    // Check if user has set a real Formspree endpoint or is still on placeholder
    if (!endpoint || endpoint.includes("TODO_YOUR_ID")) {
      // Graceful fallback to client mailto
      setTimeout(() => {
        window.location.href = `mailto:${content.personal.email}?subject=${encodeURIComponent(
          formData.subject || "Internship / Opportunity for Kashish"
        )}&body=${encodeURIComponent(
          `Hi Kashish,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
        )}`;
        setStatus("success");
      }, 600);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please reach out directly via email!");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please email directly!");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-10">
        <span className="text-xs font-mono font-black text-[#C6FF3D] px-2.5 py-1 rounded bg-[#14141B] border border-[#242432]">
          10 //
        </span>
        <div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] uppercase tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xs sm:text-sm text-[#9E9EA8] mt-1">
            Let&apos;s build something impactful together. Inquiries welcome!
          </p>
        </div>
        <div className="h-px flex-1 bg-[#242432] ml-4 hidden sm:block" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Social Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#242432] light:border-black/15 neo-shadow-lime space-y-6">
            <div>
              <span className="text-xs font-black uppercase text-[#C6FF3D] tracking-wider block mb-1">
                Direct Communication
              </span>
              <h3 className="font-heading font-black text-2xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                Reach out anytime.
              </h3>
              <p className="text-xs sm:text-sm text-[#9E9EA8] dark:text-[#9E9EA8] light:text-[#5C5C68] mt-2 leading-relaxed">
                Whether you have an internship opening, want to discuss KrishiPath or Auronyx, or simply want to chat tech, my inbox is open.
              </p>
            </div>

            {/* Email Box */}
            <div className="p-4 rounded-2xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-xl bg-[#C6FF3D]/10 text-[#C6FF3D]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] uppercase font-bold text-[#9E9EA8] block">
                    Email Address
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] truncate block">
                    {content.personal.email}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-[#14141B] dark:bg-[#14141B] light:bg-white text-[#9E9EA8] hover:text-[#C6FF3D] border border-[#242432] transition-colors shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-[#C6FF3D]" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social Links Grid */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9E9EA8] block">
                Social Profiles &amp; Networks
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={content.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] hover:border-[#C6FF3D] transition-colors flex items-center gap-3 group"
                >
                  <GithubIcon className="w-5 h-5 text-[#9E9EA8] group-hover:text-[#C6FF3D] transition-colors" />
                  <div>
                    <span className="text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] block">
                      GitHub
                    </span>
                    <span className="text-[10px] text-[#9E9EA8]">@Kashish-17-06</span>
                  </div>
                </a>

                <div className="p-3 rounded-2xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] flex items-center gap-3 opacity-90">
                  <LinkedinIcon className="w-5 h-5 text-[#B8A1FF]" />
                  <div>
                    <span className="text-xs font-bold text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] block">
                      LinkedIn
                    </span>
                    <span className="text-[10px] text-yellow-400">TODO Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Working Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#14141B] dark:bg-[#14141B] light:bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#242432] light:border-black/15 neo-shadow-lavender">
            <h3 className="font-heading font-black text-xl sm:text-2xl text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] mb-6">
              Send a Message
            </h3>

            {status === "success" ? (
              <div className="p-6 rounded-2xl bg-[#C6FF3D]/10 border border-[#C6FF3D] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#C6FF3D] text-[#0B0B0F] flex items-center justify-center mx-auto font-bold text-xl">
                  ✓
                </div>
                <h4 className="font-heading font-bold text-lg text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F]">
                  Message Dispatched!
                </h4>
                <p className="text-xs sm:text-sm text-[#9E9EA8]">
                  Thank you for reaching out. Kashish will respond to your email as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-4 py-2 text-xs font-bold bg-[#0B0B0F] text-[#C6FF3D] border border-[#242432] rounded-xl hover:border-[#C6FF3D]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#9E9EA8] uppercase block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe / Recruiter"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] text-xs sm:text-sm focus:outline-none focus:border-[#C6FF3D] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#9E9EA8] uppercase block mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] text-xs sm:text-sm focus:outline-none focus:border-[#C6FF3D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#9E9EA8] uppercase block mb-1.5">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="SDE Internship / Coffee Chat"
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] text-xs sm:text-sm focus:outline-none focus:border-[#C6FF3D] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#9E9EA8] uppercase block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team or project..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0B0F] dark:bg-[#0B0B0F] light:bg-[#F4F4EE] border border-[#242432] text-[#F5F5F0] dark:text-[#F5F5F0] light:text-[#0B0B0F] text-xs sm:text-sm focus:outline-none focus:border-[#C6FF3D] transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-[#FF4D8D] flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 rounded-xl bg-[#C6FF3D] hover:bg-[#b0f224] text-[#0B0B0F] font-heading font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-[#0B0B0F] shadow-[4px_4px_0px_0px_#0B0B0F] transition-all hover:translate-x-0.5 hover:translate-y-0.5 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
