"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Users,
  Award,
  Globe,
  TrendingUp,
  Mail,
  ChevronRight,
  Shield,
  CheckCircle,
} from "lucide-react";
import Header from "@/components/Header"
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
     <Header/>

      {/* Hero Section */}
      <section className="relative bg-[#800080] to-[#5A0A1A] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/about-hero.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight font-serif">
              About the Journal
            </h1>
            <p className="text-xl text-[#fbefff] leading-relaxed">
              Advancing scholarship in the Science, Technology and Innovation with African and global
              perspectives
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Mission & Scope */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#fbefff] rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-[#800080]" />
                </div>
                <h2 className="text-3xl font-bold text-[#800080] font-serif">
                  Mission & Scope
                </h2>
              </div>

              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  The <strong>UNIBEN Journal of Science, Technology and Innovation</strong> publishes
                  peer-reviewed scholarship with African and global perspectives
                  in law & society, history, languages, culture, philosophy, arts,
                  and environmental Science, Technology and Innovation.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We welcome empirical, doctrinal, and decolonial approaches with
                  policy relevance, committed to advancing knowledge that serves
                  society and promotes justice, equity, and sustainable
                  development.
                </p>

                <div className="bg-[#FAF7F8] border-l-4 border-[#800080] p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-[#212121] mb-4">
                    Our Core Focus Areas
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#800080] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#212121]">
                          Law & Society
                        </strong>
                        <p className="text-sm text-gray-600">
                          Legal theory, human rights, constitutional law,
                          jurisprudence
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#800080] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#212121]">History</strong>
                        <p className="text-sm text-gray-600">
                          African history, global history, oral traditions,
                          archives
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#800080] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#212121]">
                          Languages & Literature
                        </strong>
                        <p className="text-sm text-gray-600">
                          Linguistics, creative writing, literary criticism,
                          translation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#800080] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#212121]">Culture & Arts</strong>
                        <p className="text-sm text-gray-600">
                          Cultural studies, performing arts, visual arts,
                          heritage
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#800080] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#212121]">Philosophy</strong>
                        <p className="text-sm text-gray-600">
                          African philosophy, ethics, epistemology, metaphysics
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#800080] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#212121]">
                          Environmental Humanities
                        </strong>
                        <p className="text-sm text-gray-600">
                          Climate justice, eco-criticism, sustainability studies
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Editorial Team Preview */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#fbefff] rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-[#800080]" />
                </div>
                <h2 className="text-3xl font-bold text-[#800080] font-serif">
                  Editorial Leadership
                </h2>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Our editorial board comprises distinguished scholars from Nigeria
                and around the world, bringing diverse expertise across Science, Technology and Innovation disciplines. They are committed to maintaining the highest
                standards of academic rigor while fostering inclusive,
                decolonized scholarship.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Editor-in-Chief */}
                <div className="bg-white border-2 border-[#800080] rounded-xl p-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mb-4">
                    <Image
                      src="/editor-chief.png"
                      alt="Editor in Chief"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm text-[#800080] font-bold mb-1">
                    EDITOR-IN-CHIEF
                  </p>
                  <h3 className="text-lg font-bold text-[#212121] mb-2">
                    Prof. Adebayo M. Ogunleye
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Department of History & International Studies
                    <br />
                    University of Benin
                  </p>
                  <p className="text-sm text-gray-700">
                    Specializes in African political history and decolonization
                    studies
                  </p>
                </div>

                {/* Managing Editor */}
                <div className="bg-white border-2 border-[#fbefff] rounded-xl p-6 hover:border-[#800080] transition-colors">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mb-4">
                    <Image
                      src="/managing-editor.png"
                      alt="Managing Editor"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-sm text-[#800080] font-bold mb-1">
                    MANAGING EDITOR
                  </p>
                  <h3 className="text-lg font-bold text-[#212121] mb-2">
                    Dr. Folake A. Williams
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Directorate of Research, Innovation & Development
                    <br />
                    University of Benin
                  </p>
                  <p className="text-sm text-gray-700">
                    Oversees submission workflow and editorial operations
                  </p>
                </div>
              </div>

              <Link
                href="/editorial-board"
                className="inline-flex items-center gap-2 text-[#800080] font-semibold hover:text-[#5A0A1A] text-lg"
              >
                View Full Editorial Board
                <ChevronRight className="h-5 w-5" />
              </Link>
            </section>

            {/* Peer Review Process */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#fbefff] rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-[#800080]" />
                </div>
                <h2 className="text-3xl font-bold text-[#800080] font-serif">
                  Peer Review Process
                </h2>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                We employ a <strong>double-anonymous (blind) peer review</strong>{" "}
                process to ensure fairness and objectivity. All manuscripts are
                reviewed by at least two independent experts in the field.
              </p>

              <div className="bg-white border-2 border-[#fbefff] rounded-xl p-8">
                <div className="relative">
                  {/* Flowchart-style process */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#800080] rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#212121] mb-1">
                          Initial Screening
                        </h3>
                        <p className="text-sm text-gray-700">
                          Editor-in-Chief assesses for scope and quality
                          (7-10 days)
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#800080] rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#212121] mb-1">
                          Reviewer Assignment
                        </h3>
                        <p className="text-sm text-gray-700">
                          Minimum of 2 external reviewers invited (within 21 days)
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#800080] rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#212121] mb-1">
                          Double-Anonymous Review
                        </h3>
                        <p className="text-sm text-gray-700">
                          Reviewers provide detailed feedback (3-6 weeks total)
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#800080] rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#212121] mb-1">
                          Editorial Decision
                        </h3>
                        <p className="text-sm text-gray-700">
                          Accept, revise, or reject based on reviewer reports
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        5
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#212121] mb-1">
                          Publication
                        </h3>
                        <p className="text-sm text-gray-700">
                          Continuous online publication with DOI assignment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>Third Reviewer:</strong> In cases of conflicting
                  reviews, the editor may request a third independent assessment
                  to ensure fair decision-making.
                </p>
              </div>
            </section>

            {/* Indexing & Metrics */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#fbefff] rounded-full flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#800080]" />
                </div>
                <h2 className="text-3xl font-bold text-[#800080] font-serif">
                  Indexing & Discoverability
                </h2>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                We are committed to maximizing the visibility and impact of
                published research through strategic indexing and preservation
                partnerships.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-[#fbefff] rounded-xl p-6">
                  <h3 className="font-bold text-[#212121] mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    Currently Indexed In
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#800080] rounded-full"></div>
                      Google Scholar
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#800080] rounded-full"></div>
                      Crossref (DOI Registration)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#800080] rounded-full"></div>
                      PKP Preservation Network
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-[#fbefff] rounded-xl p-6">
                  <h3 className="font-bold text-[#212121] mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Application Pending
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Directory of Open Access Journals (DOAJ)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      African Journals Online (AJOL)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      LOCKSS/CLOCKSS
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* History & Achievements */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#fbefff] rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-[#800080]" />
                </div>
                <h2 className="text-3xl font-bold text-[#800080] font-serif">
                  History & Achievements
                </h2>
              </div>

              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Launched in 2025 as part of the University of Benin&apos;s renewed
                  commitment to advancing research excellence, the UNIBEN Journal
                  of Science, Technology and Innovation builds on decades of scholarly tradition at one
                  of Nigeria&apos;s premier universities.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  The journal is supported by the <strong>Directorate of
                  Research, Innovation, and Development (DRID)</strong> and
                  funded through <strong>TETFund</strong>, reflecting Nigeria&apos;s
                  national investment in quality academic publishing.
                </p>

                <div className="bg-[#800080] text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-[#fbefff] leading-relaxed">
                    To become a leading platform for Science, Technology and Innovation scholarship that
                    centers African voices, challenges colonial epistemologies,
                    and contributes to global conversations on justice, culture,
                    and human flourishing.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="bg-[#FAF7F8] border-2 border-[#fbefff] rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#800080] rounded-full flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#800080] mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <strong className="text-[#212121]">Email:</strong>
                      <br />
                      <a
                        href="mailto:journalst@uniben.edu"
                        className="text-[#800080] hover:text-[#5A0A1A]"
                      >
                        journalst@uniben.edu
                      </a>
                    </div>
                    <div>
                      <strong className="text-[#212121]">Address:</strong>
                      <br />
                      <span className="text-gray-700">
                        University of Benin
                        <br />
                        Ugbowo Campus
                        <br />
                        PMB 1154, Benin City
                        <br />
                        Edo State, Nigeria
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Stats */}
              <div className="bg-[#800080] text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-6">At a Glance</h3>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-white/20">
                    <div className="text-3xl font-bold mb-1">Diamond OA</div>
                    <div className="text-sm text-[#fbefff]">
                      Open Access Model
                    </div>
                  </div>
                  <div className="pb-4 border-b border-white/20">
                    <div className="text-3xl font-bold mb-1">3-6 Weeks</div>
                    <div className="text-sm text-[#fbefff]">Review Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">CC BY 4.0</div>
                    <div className="text-sm text-[#fbefff]">License Type</div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-white border-2 border-[#fbefff] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#800080] mb-4">
                  Ready to Publish?
                </h3>
                <p className="text-sm text-gray-700 mb-6">
                  Join our community of scholars advancing Science, Technology and Innovation research
                </p>
                <Link
                  href="/submission"
                  className="block w-full bg-[#800080] text-white text-center px-6 py-3 rounded-lg font-bold hover:bg-[#5A0A1A] transition-colors"
                >
                  Submit Manuscript
                </Link>
              </div>

              {/* Quick Links */}
              <div className="bg-[#FAF7F8] border-2 border-[#fbefff] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#800080] mb-4">
                  Explore More
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/for-authors"
                      className="flex items-center gap-2 text-gray-700 hover:text-[#800080] transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                      Author Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/editorial-board"
                      className="flex items-center gap-2 text-gray-700 hover:text-[#800080] transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                      Editorial Board
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/policies"
                      className="flex items-center gap-2 text-gray-700 hover:text-[#800080] transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                      Editorial Policies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/current-issue"
                      className="flex items-center gap-2 text-gray-700 hover:text-[#800080] transition-colors"
                    >
                      <ChevronRight className="h-4 w-4" />
                      Current Issue
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
}