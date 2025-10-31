// src/app/current-issue/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Download,
  BookOpen,
  Share2,
  Mail,
  Calendar,
  Users,
  Filter,
  ExternalLink,
  Eye,
  Quote,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Article {
  id: string;
  title: string;
  authors: string[];
  affiliations: string[];
  abstract: string;
  keywords: string[];
  doi: string;
  pages: string;
  publishDate: string;
  articleType: string;
  views: number;
  downloads: number;
  coverPhoto?: string;
}

export default function CurrentIssuePage() {
  const [filterType, setFilterType] = useState<string>("all");

  const issueData = {
    volume: 1,
    issue: 1,
    year: 2025,
    publishDate: "March 2025",
    doi: "10.1234/ubjh.v1i1",
    coverImage: "/cover.png",
    totalArticles: 8,
    totalPages: 156,
  };

  const articles: Article[] = [
    {
      id: "001",
      title:
        "Decolonizing Legal Education in West Africa: A Critical Analysis of Pedagogical Approaches",
      authors: ["Afolabi O. Johnson", "Chinwe M. Okeke"],
      affiliations: ["University of Benin", "University of Lagos"],
      abstract:
        "This study examines the persistence of colonial frameworks in contemporary legal education across West African universities and proposes context-driven pedagogical reforms that center African jurisprudence, customary law, and indigenous legal systems. Through comparative analysis of curricula in Nigeria, Ghana, and Senegal, we demonstrate how Eurocentric approaches continue to marginalize local legal traditions.",
      keywords: [
        "decolonization",
        "legal education",
        "West Africa",
        "pedagogy",
        "jurisprudence",
      ],
      doi: "10.1234/ubjh.2025.0001",
      pages: "1-18",
      publishDate: "2025-03-15",
      articleType: "Research Article",
      views: 342,
      downloads: 89,
    },
    {
      id: "002",
      title:
        "Environmental Humanities and Climate Justice: Perspectives from the Niger Delta",
      authors: ["Ngozi F. Adekunle", "Emmanuel I. Okonkwo", "Sarah T. Benson"],
      affiliations: [
        "University of Benin",
        "University of Port Harcourt",
        "Delta State University",
      ],
      abstract:
        "Drawing on interdisciplinary scholarship, this review explores the intersection of environmental degradation, cultural memory, and climate justice advocacy in Nigeria's Niger Delta region. We analyze how local communities employ storytelling, visual arts, and cultural practices to document ecological harm and demand accountability from extractive industries.",
      keywords: [
        "environmental humanities",
        "climate justice",
        "Niger Delta",
        "cultural memory",
        "extractive industries",
      ],
      doi: "10.1234/ubjh.2025.0002",
      pages: "19-41",
      publishDate: "2025-03-15",
      articleType: "Review Article",
      views: 428,
      downloads: 112,
    },
    {
      id: "003",
      title:
        "Oral Traditions and Historical Memory in Edo Kingdom: Reassessing the Benin Expedition of 1897",
      authors: ["Osazuwa E. Omoregie"],
      affiliations: ["University of Benin"],
      abstract:
        "This article revisits the 1897 British punitive expedition against Benin Kingdom through the lens of oral traditions and indigenous historical narratives. By privileging Edo perspectives often marginalized in colonial historiography, we offer a counter-narrative that centers African agency, resistance, and cultural resilience in the face of imperial violence.",
      keywords: [
        "oral traditions",
        "Benin Kingdom",
        "colonial history",
        "memory studies",
        "decolonial history",
      ],
      doi: "10.1234/ubjh.2025.0003",
      pages: "42-63",
      publishDate: "2025-03-15",
      articleType: "Research Article",
      views: 567,
      downloads: 145,
      coverPhoto: "/benin-history.png",
    },
    {
      id: "004",
      title:
        "Language Politics and Identity Construction in Postcolonial Nigeria",
      authors: ["Amaka C. Nwankwo", "Ibrahim K. Suleiman"],
      affiliations: ["University of Benin", "Ahmadu Bello University"],
      abstract:
        "This study investigates how language policies in postcolonial Nigeria shape ethnic identity, political participation, and social inclusion. Through sociolinguistic analysis and ethnographic fieldwork, we examine tensions between English as lingua franca and indigenous language preservation efforts, proposing a multilingual framework for inclusive national development.",
      keywords: [
        "language politics",
        "postcolonial Nigeria",
        "identity",
        "multilingualism",
        "language policy",
      ],
      doi: "10.1234/ubjh.2025.0004",
      pages: "64-85",
      publishDate: "2025-03-15",
      articleType: "Research Article",
      views: 289,
      downloads: 76,
    },
    {
      id: "005",
      title:
        "Ubuntu Philosophy and Contemporary African Ethics: A Reconstructive Approach",
      authors: ["Chukwudi A. Mbah"],
      affiliations: ["University of Benin"],
      abstract:
        "This philosophical essay reconstructs Ubuntu philosophy as a foundation for contemporary African ethics. Moving beyond romanticized interpretations, we engage critically with Ubuntu's communitarian principles to address modern ethical dilemmas including human rights, environmental sustainability, and digital ethics in African contexts.",
      keywords: [
        "Ubuntu philosophy",
        "African ethics",
        "communitarianism",
        "moral philosophy",
        "African philosophy",
      ],
      doi: "10.1234/ubjh.2025.0005",
      pages: "86-104",
      publishDate: "2025-03-15",
      articleType: "Research Article",
      views: 412,
      downloads: 98,
    },
    {
      id: "006",
      title: "Performance Art and Social Protest in Contemporary Lagos",
      authors: ["Funmilayo R. Adeyemi"],
      affiliations: ["University of Lagos"],
      abstract:
        "This article examines how performance artists in Lagos deploy their craft as tools of social commentary and political protest. Through ethnographic observation and artist interviews conducted during the #EndSARS movement, we analyze how performance art creates counter-public spaces for youth activism and democratic expression.",
      keywords: [
        "performance art",
        "social protest",
        "Lagos",
        "EndSARS",
        "youth activism",
      ],
      doi: "10.1234/ubjh.2025.0006",
      pages: "105-126",
      publishDate: "2025-03-15",
      articleType: "Research Article",
      views: 623,
      downloads: 187,
    },
    {
      id: "007",
      title: "Gender and Land Rights in Customary Law: A Case Study of Edo State",
      authors: ["Blessing O. Igbinovia", "Grace N. Ekhator"],
      affiliations: ["University of Benin", "University of Benin"],
      abstract:
        "This study investigates how customary land tenure systems in Edo State, Nigeria, perpetuate gender inequalities in land ownership and inheritance. Through legal analysis and qualitative interviews with women farmers and traditional leaders, we document discriminatory practices and propose reform pathways that harmonize customary law with constitutional gender equality provisions.",
      keywords: [
        "gender",
        "land rights",
        "customary law",
        "Edo State",
        "women's rights",
      ],
      doi: "10.1234/ubjh.2025.0007",
      pages: "127-145",
      publishDate: "2025-03-15",
      articleType: "Research Article",
      views: 298,
      downloads: 84,
    },
    {
      id: "008",
      title: "Book Review: 'African Literatures and the CIA' by Caroline Davis",
      authors: ["Obinna J. Okechukwu"],
      affiliations: ["University of Ibadan"],
      abstract:
        "A critical review of Caroline Davis's groundbreaking study on Cold War cultural politics and African literary production. This review assesses Davis's archival research on covert U.S. influence in African publishing and discusses implications for understanding postcolonial African literary history.",
      keywords: [
        "book review",
        "African literature",
        "Cold War",
        "cultural politics",
        "publishing history",
      ],
      doi: "10.1234/ubjh.2025.0008",
      pages: "146-156",
      publishDate: "2025-03-15",
      articleType: "Book Review",
      views: 178,
      downloads: 42,
    },
  ];

  const filteredArticles =
    filterType === "all"
      ? articles
      : articles.filter((article) => article.articleType === filterType);

  const articleTypes = ["all", "Research Article", "Review Article", "Book Review"];

  const truncateAbstract = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    const partial = words.slice(0, wordLimit).join(" ");
    const rest = text.slice(partial.length);
    const periodIndex = rest.indexOf(".");
    if (periodIndex === -1) return partial + "...";
    return partial + rest.slice(0, periodIndex + 1);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <section className="bg-[#071936] text-white py-12">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src={issueData.coverImage}
                  alt="Volume 1, Issue 1 Cover"
                  width={400}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-semibold">Current Issue</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 font-serif">
                Volume {issueData.volume}, Issue {issueData.issue} ({issueData.year})
              </h1>
              <p className="text-xl text-[#FFE9EE] mb-6">
                Published: {issueData.publishDate}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">{issueData.totalArticles}</div>
                  <div className="text-sm text-[#FFE9EE]">Articles</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">{issueData.totalPages}</div>
                  <div className="text-sm text-[#FFE9EE]">Pages</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-[#FFE9EE]">Open Access</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold mb-1">
                    {articles.reduce((sum, a) => sum + a.views, 0)}
                  </div>
                  <div className="text-sm text-[#FFE9EE]">Total Views</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#071936] transition-all">
                  <Share2 className="h-5 w-5" />
                  Share Issue
                </button>
                <button className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#071936] transition-all">
                  <Quote className="h-5 w-5" />
                  Cite Issue
                </button>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-sm text-[#FFE9EE] mb-2">
                  <strong>Issue DOI:</strong> {issueData.doi}
                </p>
                <p className="text-sm text-[#FFE9EE]">
                  <strong>ISSN:</strong> eISSN: 2XXX-XXXX (Online)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAF7F8] border-b-2 border-[#8690a0c2] py-6">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-[#212121] mb-1">Table of Contents</h2>
              <p className="text-sm text-gray-600">
                Showing {filteredArticles.length} of {articles.length} articles
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-gray-600" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-4 py-2 border-2 border-[#8690a0c2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#071936] font-medium"
              >
                {articleTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === "all" ? "All Article Types" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {filteredArticles.map((article, index) => (
            <Link
              href={`/articles/${article.id}`}
              key={article.id}
              className="block bg-white border-2 border-[#8690a0c2] rounded-xl overflow-hidden hover:shadow-xl hover:border-[#071936] transition-all transform hover:scale-[1.02]"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-[#071936] border border-[#8690a0c2] text-[white] rounded-full text-xs font-bold uppercase">
                    {article.articleType}
                  </span>
                  <span className="text-sm text-gray-500">Pages {article.pages}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#212121] mb-4 group-hover:text-[#071936] transition-colors font-serif leading-tight">
                  {index + 1}. {article.title}
                </h3>
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <Users className="h-4 w-4" />
                    <span className="font-semibold">
                      {article.authors.join(", ")}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 ml-6">
                    {article.affiliations.join(" • ")}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#212121] mb-2">Abstract</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {truncateAbstract(article.abstract, 20)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className=" py-12 border-t-2 border-[#8690a0c2]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-[#8690a0c2] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#071936] mb-4 flex items-center gap-2">
                <Mail className="h-6 w-6" />
                Subscribe to Alerts
              </h3>
              <p className="text-gray-700 mb-4">Get notified when new issues are published</p>
              <div className="block md:flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 mb-2 w-full md:mb-0 px-4 py-2 border-2 border-[#8690a0c2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#071936]"
                />
                <button className="bg-[#071936] text-white px-6 py-2 rounded-lg hover:bg-[#8690a0c2] transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="bg-white border-2 border-[#8690a0c2] rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#071936] mb-4">Citation Information</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Journal Title:</strong> UNIBEN Journal of Science, Technology and Innovation
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Volume/Issue:</strong> {issueData.volume}({issueData.issue})
              </p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Year:</strong> {issueData.year}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Publisher:</strong> University of Benin
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/archives"
              className="inline-flex items-center gap-2 text-[#071936] hover:text-[#071936] font-semibold text-lg"
            >
              View All Past Issues
              <ExternalLink className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
