"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Download,
  FileText,
  CheckCircle,
  Clock,
  Shield,
  Globe,
  Mail,
  ExternalLink,
  ChevronRight,
  Award,
  Search,
} from "lucide-react";
import Header from "@/components/Header"
import Footer from "@/components/Footer";

export default function STIJournalHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="bg-[#071936] text-white shadow-lg sticky top-0 z-50">
        <Header/>

        {/* Secondary Navigation */}
        <div className="bg-white border-b border-[#071936]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between py-3">
      {!showSearch && (
        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/editorial-board"
            className="text-[#071936] hover:text-[#071936c2] font-medium transition-colors"
          >
            Editorial Board
          </Link>
          <Link
            href="/policies"
            className="text-[#071936] hover:text-[#071936c2] font-medium transition-colors"
          >
            Policies
          </Link>
          <Link
            href="/contact"
            className="text-[#071936] hover:text-[#071936c2] font-medium transition-colors"
          >
            Contact
          </Link>
        </div>
      )}
      <div className="flex items-center gap-2">
        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 px-4 py-2 pl-10 rounded-full border border-[#071936] focus:outline-none focus:ring-2 focus:ring-[#071936] text-black text-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="md:hidden">
          {!showSearch ? (
            <button
              onClick={() => setShowSearch(true)}
              className="p-2 text-[#071936]"
            >
              <Search className="h-5 w-5" />
            </button>
          ) : (
            <div className="flex items-center gap-2 w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-full border border-[#071936] focus:outline-none focus:ring-2 focus:ring-[#071936] text-black text-sm"
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <button
                onClick={() => setShowSearch(false)}
                className="p-2 text-[#071936]"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

      </header>

      {/* Hero Section */}
      <section className="relative bg-[#0b1f41] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          {/* Placeholder for subtle pattern/texture */}
          <Image
            src="/academic-pattern.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Award className="h-4 w-4" />
              <span className="text-sm font-semibold">
                Volume 1, Issue 1 (2025) — Now Open for Submissions
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-serif">
              Advancing African and Global Perspectives in the Science, Technology and Innovation
            </h2>
            <p className="text-xl mb-8 text-white leading-relaxed">
              Publishing peer-reviewed scholarship in law & society, history,
              languages, culture, philosophy, arts, and environmental
              humanities.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-300" />
                <span className="font-semibold">Diamond Open Access</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock className="h-5 w-5 text-blue-300" />
                <span className="font-semibold">3–6 Week Review</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Shield className="h-5 w-5 text-yellow-300" />
                <span className="font-semibold">Crossref DOIs</span>
              </div>
            </div>
            <div className="block md:flex  gap-4">
              <Link
                href="/submission"
                className="inline-flex mb-4 md:mb-0 items-center gap-2 text-sm md:text-md bg-white text-[#071936] px-4 py-4 md:px-8 md:py-4 rounded-full font-bold hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <FileText className="h-5 w-5" />
                Submit Your Manuscript
              </Link>
              <Link
                href="/current-issue"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#071936] transition-all"
              >
                <BookOpen className="h-5 w-5" />
                Browse Current Issue
              </Link>
            </div>
          </div>
        </div>
      </section>

     

      {/* Current Issue Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#071936] mb-2 font-serif">
                Current Issue
              </h2>
              <p className="text-gray-600">Volume 1, Issue 1 (2025)</p>
            </div>
            <Link
              href="/current-issue"
              className="text-[#071936] font-semibold hover:text-[#071936c2] flex items-center gap-2"
            >
              View Full Issue
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Article Card 1 */}
            <article className="bg-white border-2 border-[#071936] rounded-xl p-6 hover:shadow-xl hover:border-[#071936c2] transition-all group">
              <div className="flex gap-2 mb-4">
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-3 group-hover:text-[#071936c2] transition-colors font-serif">
                Decolonizing Legal Education in West Africa: A Critical
                Analysis of Pedagogical Approaches
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Afolabi O. Johnson, Chinwe M. Okeke
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This study examines the persistence of colonial frameworks in
                contemporary legal education across West African universities
                and proposes context-driven pedagogical reforms...
              </p>
            </article>

            {/* Article Card 2 */}
            <article className="bg-white border-2 border-[#071936] rounded-xl p-6 hover:shadow-xl hover:border-[#071936c2] transition-all group">
              <div className="flex gap-2 mb-4">
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-3 group-hover:text-[#071936c2] transition-colors font-serif">
                Environmental Humanities and Climate Justice: Perspectives from
                the Niger Delta
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Ngozi F. Adekunle, Emmanuel I. Okonkwo, Sarah T. Benson
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Drawing on interdisciplinary scholarship, this review explores
                the intersection of environmental degradation, cultural memory,
                and climate justice advocacy in Nigeria&apos;s Niger Delta...
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#FAF7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#071936] mb-6 font-serif">
                About the Journal
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The <strong>UNIBEN Journal of Science, Technology and Innovation</strong> publishes
                peer-reviewed scholarship with African and global perspectives
                in law & society, history, languages, culture, philosophy, arts,
                and environmental humanities.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We welcome empirical, doctrinal, and decolonial approaches with
                policy relevance, committed to advancing knowledge that serves
                society and promotes justice, equity, and sustainable
                development.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#071936] font-semibold hover:text-[#071936c2] text-lg"
              >
                Learn More About Our Mission
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for journal mission image */}
              <Image
                src="/humanities-research.png"
                alt="Humanities research and scholarship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Publish With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#071936] mb-4 font-serif">
              Why Publish With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join a growing community of scholars committed to rigorous,
              impactful, and accessible research
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8690a0c2] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-[#071936]" />
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">
                No APCs
              </h3>
              <p className="text-gray-600">
                Diamond Open Access — completely free for authors and readers
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8690a0c2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-10 w-10 text-[#071936]" />
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">
                Fast Review
              </h3>
              <p className="text-gray-600">
                Rigorous peer review with 3–6 week turnaround to first decision
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8690a0c2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-[#071936]" />
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Crossref DOIs, Google Scholar indexing, and wide distribution
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#8690a0c2] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-[#071936]" />
              </div>
              <h3 className="text-xl font-bold text-[#212121] mb-2">
                Preserved Forever
              </h3>
              <p className="text-gray-600">
                Long-term archiving via PKP PN ensures permanent accessibility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Board Preview */}
      <section className="py-16 bg-[#FAF7F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="block md:flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#071936] mb-2 font-serif">
                Editorial Leadership
              </h2>
              <p className="text-gray-600 mb-4">
                Distinguished scholars committed to excellence
              </p>
            </div>
            <Link
              href="/editorial-board"
              className="text-[#071936] font-semibold hover:text-[#071936c2] flex items-center gap-2"
            >
              View Full Board
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Editor-in-Chief Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#071936]">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Placeholder for editor photo */}
                <Image
                  src="/editor-1.png"
                  alt="Editor in Chief"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <div className="text-center">
                <p className="text-sm text-[#071936] font-bold mb-1">
                  EDITOR-IN-CHIEF
                </p>
                <h3 className="text-lg font-bold text-[#212121] mb-1">
                  Prof. Adebayo M. Ogunleye
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Department of History & International Studies
                  <br />
                  University of Benin
                </p>
                <div className="flex justify-center gap-2">
                  <a
                    href="#"
                    className="text-[#071936] hover:text-[#071936c2]"
                    aria-label="ORCID"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="text-[#071936] hover:text-[#071936c2]"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Associate Editor 1 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#071936] hover:border-[#071936] transition-colors">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                <Image
                  src="/editor-2.png"
                  alt="Associate Editor"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <div className="text-center">
                <p className="text-sm text-[#071936] font-bold mb-1">
                  ASSOCIATE EDITOR
                </p>
                <h3 className="text-lg font-bold text-[#212121] mb-1">
                  Dr. Chiamaka N. Eze
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Department of English & Literature
                  <br />
                  University of Benin
                </p>
                <div className="flex justify-center gap-2">
                  <a
                    href="#"
                    className="text-[#071936] hover:text-[#071936c2]"
                    aria-label="ORCID"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="text-[#071936] hover:text-[#071936c2]"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Associate Editor 2 */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#071936] hover:border-[#071936] transition-colors">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4">
                <Image
                  src="/editor-3.png"
                  alt="Associate Editor"
                  width={96}
                  height={96}
                  className="rounded-full"
                />
              </div>
              <div className="text-center">
                <p className="text-sm text-[#071936] font-bold mb-1">
                  ASSOCIATE EDITOR
                </p>
                <h3 className="text-lg font-bold text-[#212121] mb-1">
                  Prof. Ibrahim K. Suleiman
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Faculty of Law
                  <br />
                  University of Benin
                </p>
                <div className="flex justify-center gap-2">
                  <a
                    href="#"
                    className="text-[#071936] hover:text-[#071936c2]"
                    aria-label="ORCID"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="text-[#071936] hover:text-[#071936c2]"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indexing & Trust Indicators */}
      <section className="py-12 bg-white border-t-2 border-[#071936]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm text-gray-600 font-semibold mb-6">
            INDEXED & PRESERVED BY
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Google Scholar</span>
            </div>
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-500 font-semibold">Crossref</span>
            </div>
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-500 font-semibold">PKP PN</span>
            </div>
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-gray-500 font-semibold">DOAJ (pending)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
      
    </div>
  );
}