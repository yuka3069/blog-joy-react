import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";
import { BLOG_DESCRIPTION, BLOG_TITLE } from "@/constants";

export const metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
};

async function Home() {
  const blogSummaries = await getBlogPostList();
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogSummaries.map((blog) => (
        <BlogSummaryCard
          slug={blog.slug}
          key={blog.slug}
          title={blog.title}
          abstract={blog.abstract}
          publishedOn={blog.publishedOn}
        />
      ))}
    </div>
  );
}

export default Home;
