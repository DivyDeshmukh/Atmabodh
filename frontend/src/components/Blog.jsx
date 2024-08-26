import React from "react";

function BlogPage() {
  const articles = [
    {
      title: "Guided Meditation Practices",
      description:
        "Explore the latest trends and technologies shaping the future of web development.",
      link: "/articles/future-of-web-development",
    },
    {
      title: "Know Yourself",
      description:
        "Learn how to create websites that look great on any device.",
      link: "/articles/responsive-websites",
    },
    {
      title: "Learn about Yourself",
      description:
        "A deep dive into one of JavaScript's most powerful features.",
      link: "/articles/javascript-closures",
    },
    {
      title: "Who AM I?",
      description:
        "A comparison between CSS Grid and Flexbox, and when to use each.",
      link: "/articles/css-grid-vs-flexbox",
    },
    {
      title: "Find Your Purpose?",
      description:
        "Maximize the efficiency and maintainability of your Tailwind CSS projects.",
      link: "/articles/tailwind-css-best-practices",
    },
  ];

  return (
    <div className="bg-[#F8F9FB] p-16 mt-12">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-[#FFE0C3] rounded-lg shadow-md p-6 flex flex-col justify-between"
          >
            <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
            <p className="text-gray-600 mb-6">{article.description}</p>
            <a
              href={article.link}
              className="self-start px-4 py-2 bg-[#1B181F] font-semibold text-white rounded hover:bg-[#FFE0C3] hover:text-black hover:border-2 hover:border-[#1B181F]"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
