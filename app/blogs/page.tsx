import { PageHeader } from "@/app/components/PageHeader";
import { constructMetadata } from "@/utils/seo";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Blogs",
  description: "Explore our latest articles, insights, and industry news on web development, AI, digital marketing, and more.",
});

const blogs = [
  {
    slug: "why-nextjs-is-the-future-of-web-development",
    title: "Why Next.js is the Future of Web Development",
    excerpt: "Explore how Next.js with App Router is reshaping the way developers build modern, high-performance web applications.",
    category: "Web Development",
    date: "March 1, 2026",
    readTime: "5 min read",
  },
  {
    slug: "top-ai-trends-shaping-2026",
    title: "Top AI Trends Shaping 2026",
    excerpt: "From generative AI to computer vision, discover the key artificial intelligence trends every business should watch this year.",
    category: "AI Development",
    date: "February 22, 2026",
    readTime: "7 min read",
  },
  {
    slug: "seo-strategies-that-actually-work",
    title: "SEO Strategies That Actually Work in 2026",
    excerpt: "Cut through the noise — here are actionable SEO strategies that are driving real organic traffic growth for businesses today.",
    category: "Digital Marketing",
    date: "February 15, 2026",
    readTime: "6 min read",
  },
  {
    slug: "shopify-vs-woocommerce-which-is-right-for-you",
    title: "Shopify vs WooCommerce: Which is Right for You?",
    excerpt: "We break down the pros, cons, and ideal use cases for Shopify and WooCommerce so you can make the best eCommerce choice.",
    category: "Web Development",
    date: "February 10, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-to-build-a-custom-ai-chatbot",
    title: "How to Build a Custom AI Chatbot for Your Business",
    excerpt: "A step-by-step guide to building a custom AI chatbot using the latest LLM APIs and integrating it into your website.",
    category: "AI Development",
    date: "February 5, 2026",
    readTime: "10 min read",
  },
  {
    slug: "ui-ux-design-principles-for-2026",
    title: "UI/UX Design Principles Every Designer Should Follow in 2026",
    excerpt: "Modern users expect more. Learn the latest UI/UX design principles that lead to higher engagement and better conversion rates.",
    category: "UI/UX Design",
    date: "January 28, 2026",
    readTime: "6 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Web Development": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI Development": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Digital Marketing": "bg-green-500/10 text-green-400 border-green-500/20",
  "UI/UX Design": "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export default function BlogsPage() {
  return (
    <div>
      <PageHeader title="Blogs" />
      <div className="container mx-auto px-4 md:px-6 pb-24">
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Insights, tutorials, and industry news from the CGS team — crafted to help you stay ahead.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-primary/5 bg-primary/3 hover:bg-primary/6 hover:border-primary/10 p-6 transition-all duration-300"
            >
              {/* Category Badge */}
              <span
                className={`inline-flex w-fit items-center rounded-full border px-3 py-0.5 text-xs font-semibold mb-4 ${categoryColors[post.category] ?? "bg-gray-500/10 text-gray-400 border-gray-500/20"
                  }`}
              >
                {post.category}
              </span>

              {/* Title */}
              <h2 className="text-primary font-heading text-lg font-bold mb-3 leading-snug group-hover:text-[#ed1d24] transition-colors duration-300">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
