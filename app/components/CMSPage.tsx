"use client";

import { useEffect, useState } from "react";
import { getCMSContentBySlug } from "@/lib/firestore";
import { FiLoader, FiAlertCircle } from "react-icons/fi";

interface CMSContent {
  id: string;
  content: string;
  slug: string;
  updatedAt: Date | null;
}

interface CMSPageProps {
  slug: string;
  title: string;
}

export default function CMSPage({ slug, title }: CMSPageProps) {
  const [content, setContent] = useState<CMSContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      const data = await getCMSContentBySlug(slug);
      setContent(null);
      setLoading(false);
    };
    fetchContent();
  }, [slug]);

  if (loading)
    return (
      <div className="flex flex-col h-[80vh] items-center justify-center py-20 space-y-4">
        <FiLoader className="animate-spin text-4xl text-amber-600" />
        <p className="text-lg text-gray-700">Loading content...</p>
      </div>
    );

  if (!content)
    return (
      <div className="flex flex-col h-[80vh] items-center justify-center py-20 space-y-4">
        <FiAlertCircle className="text-4xl text-red-500" />
        <p className="text-lg text-gray-700">Content not found.</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
      <div
        className="prose prose-lg text-gray-700"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
      {/* {content.updatedAt && (
        <p className="text-sm text-gray-500 mt-8">
          Last updated: {content.updatedAt.toLocaleDateString()}
        </p>
      )} */}
    </div>
  );
}
