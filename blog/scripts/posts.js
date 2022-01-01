import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import remarkUnwrapImages from 'remark-unwrap-images';

const postsDirectory = path.join(process.cwd(), "public/posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      params: {
        id: matterResult.data.title,
      },
    };
  });
}

export async function getPostData(id) {
  const fileNames = fs.readdirSync(postsDirectory);
  for (let i = 0; i < fileNames.length; i++) {
    const fileName = fileNames[i];
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const content = matterResult.content;
    if (matterResult.data.title == id) {
      const processedContent = await remark()
        .use(remarkUnwrapImages)
        .use(html)
        .process(matterResult.content);
      return {
        id,
        content,
        ...matterResult.data,
      };
    }
  }
}
