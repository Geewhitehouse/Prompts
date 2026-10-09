import fs from "fs";
import path from "path";
import matter from "gray-matter";

const promptsDir = path.join(process.cwd(), "prompts");

export function getPrompts() {
  const files = fs.readdirSync(promptsDir);
  return files.map((file) => {
    const fullPath = path.join(promptsDir, file);
    const content = fs.readFileSync(fullPath, "utf-8");
    const { data, content: body } = matter(content);
    return {
      ...data,
      body,
      slug: file.replace(".md", ""),
    };
  });
}
