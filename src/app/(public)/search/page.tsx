"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Filter, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Article {
  id: string;
  title: string;
  authors: string[];
  articleType: string;
  issue: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [filterIssue, setFilterIssue] = useState("");

  // Demo article data (replace with API later)
  const articles: Article[] = [
    {
      id: "001",
      title: "Decolonizing Legal Education in West Africa",
      authors: ["Afolabi O. Johnson", "Chinwe M. Okeke"],
      articleType: "Research Article",
      issue: "Vol 1, Issue 1",
    },
    {
      id: "002",
      title: "Book Review: 'African Literatures and the CIA'",
      authors: ["Obinna J. Okechukwu"],
      articleType: "Book Review",
      issue: "Vol 1, Issue 1",
    },
    {
      id: "003",
      title: "Ubuntu Philosophy and Contemporary African Ethics",
      authors: ["Chukwudi A. Mbah"],
      articleType: "Research Article",
      issue: "Vol 1, Issue 2",
    },
    {
      id: "004",
      title: "Reimagining Justice: Indigenous Dispute Resolution Systems",
      authors: ["Ngozi E. Chike", "Samuel B. Adeyemi"],
      articleType: "Research Article",
      issue: "Vol 1, Issue 2",
    },
    {
      id: "005",
      title: "Book Review: 'Postcolonial African Governance'",
      authors: ["Ifeanyi U. Okoro"],
      articleType: "Book Review",
      issue: "Vol 1, Issue 3",
    },
    {
      id: "006",
      title: "Gender and Customary Law in Nigeria: A Critical Perspective",
      authors: ["Ruth T. Nnaji"],
      articleType: "Research Article",
      issue: "Vol 1, Issue 3",
    },
    {
      id: "007",
      title: "African Environmental Ethics: Lessons from Indigenous Knowledge",
      authors: ["Chimamanda U. Nwosu"],
      articleType: "Research Article",
      issue: "Vol 1, Issue 4",
    },
    {
      id: "008",
      title: "Book Review: 'Law and Power in Postcolonial Africa'",
      authors: ["Michael O. Adebanjo"],
      articleType: "Book Review",
      issue: "Vol 1, Issue 4",
    },
    {
      id: "009",
      title: "Democracy and Development in African States: A Philosophical Inquiry",
      authors: ["Tunde K. Balogun"],
      articleType: "Research Article",
      issue: "Vol 2, Issue 1",
    },
    {
      id: "010",
      title: "The Role of Women in African Peacebuilding Traditions",
      authors: ["Amaka L. Eze"],
      articleType: "Research Article",
      issue: "Vol 2, Issue 1",
    },
    {
      id: "011",
      title: "Book Review: 'African Political Thought Revisited'",
      authors: ["Joseph I. Akintola"],
      articleType: "Book Review",
      issue: "Vol 2, Issue 2",
    },
    {
      id: "012",
      title: "The Evolution of Customary Law under Colonial Rule",
      authors: ["Kelechi N. Arinze"],
      articleType: "Research Article",
      issue: "Vol 2, Issue 2",
    },
  ];
  

  // 🔍 Enhanced Filtering Logic
 // ✅ Improved Filtering Logic
const filteredArticles =
query === "" && filterType === "" && filterAuthor === "" && filterIssue === ""
  ? articles // Show all when nothing is selected or typed
  : articles.filter((article) => {
      const matchesQuery =
        query === "" ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.authors.some((a) =>
          a.toLowerCase().includes(query.toLowerCase())
        );

      const matchesType =
        filterType === "" ||
        article.articleType.toLowerCase() === filterType.toLowerCase();

      const matchesAuthor =
        filterAuthor === "" ||
        article.authors.some((a) =>
          a.toLowerCase().includes(filterAuthor.toLowerCase())
        );

      const matchesIssue =
        filterIssue === "" ||
        article.issue.toLowerCase().includes(filterIssue.toLowerCase());

      return matchesQuery && matchesType && matchesAuthor && matchesIssue;
    });


  return (
    <div className="min-h-screen bg-[#FAF7F8]">
      <Header />

      {/* Search Section */}
      <section className="bg-[#071936] text-white py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Search Research Articles
          </h1>
          <p className="text-[#FFE9EE] text-lg mb-6">
            Discover knowledge from UNIBEN Journal
          </p>

          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col md:flex-row gap-3 items-stretch">
            <div className="flex items-center gap-2 flex-1 border-2 border-[#8690a0c2] rounded-lg px-3 py-2">
              <Search className="text-gray-500" />
              <input
                type="text"
                placeholder="Search by title or author..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 text-gray-800 outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-[#071936] px-4 py-2 rounded-lg hover:bg-white hover:text-[#8690a0c2] transition-all font-semibold"
            >
              <Filter className="h-5 w-5" />
              Advanced Filters
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 bg-white rounded-xl shadow-lg p-5 text-gray-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg text-[#071936] flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Advanced Filters
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 hover:text-[#071936]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Article Type */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Article Type
                  </label>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-[#8690a0c2] rounded-lg focus:ring-2 focus:ring-[#071936]"
                  >
                    <option value="">All</option>
                    <option value="Research Article">Research Article</option>
                    <option value="Book Review">Book Review</option>
                  </select>
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Author
                  </label>
                  <input
                    type="text"
                    placeholder="Enter author name"
                    value={filterAuthor}
                    onChange={(e) => setFilterAuthor(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-[#8690a0c2] rounded-lg focus:ring-2 focus:ring-[#071936]"
                  />
                </div>

                {/* Issue */}
                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Issue / Volume
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Vol 1, Issue 1"
                    value={filterIssue}
                    onChange={(e) => setFilterIssue(e.target.value)}
                    className="w-full px-3 py-2 border-2 border-[#8690a0c2] rounded-lg focus:ring-2 focus:ring-[#071936]"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-lg font-bold text-[#071936] mb-2">
            Search Results
          </h2>
          <p className="text-gray-600 mb-6">
            Found {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
          </p>

          <div className="space-y-5">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="block bg-white border-2 border-[#8690a0c2] rounded-xl p-5 hover:border-[#071936] hover:shadow-xl transition-all"
              >
                <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                  <span className="inline-flex px-3 py-1 bg-[#071936] text-white text-xs font-bold rounded-full">
                    {article.articleType}
                  </span>
                  <span className="text-sm text-gray-600">{article.issue}</span>
                </div>
                <h3 className="text-xl font-bold text-[#071936] mb-2 hover:underline">
                  {article.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {article.authors.join(", ")}
                </p>
              </Link>
            ))}

            {filteredArticles.length === 0 && (
              <p className="text-gray-600 italic">No matching results found.</p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
