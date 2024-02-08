/**
 * This script generates a CSV file containing the paths, descriptions, and content of all MDX files in a directory.
 * The CSV file can be used to create a search index.
 * The script is intended to be run in a Node.js environment.
 **/

const fs = require("fs");
const path = require("path");

/**
 * Removes Markdown syntax from a given string and extracts the description.
 * @param {string} markdown - The Markdown string to be processed.
 * @returns {Object} - An object containing the extracted description and the processed output.
 */
const removeMarkdown = (markdown) => {
  let output = markdown.trim();
  const regexImportStatements = /^import\s+[\s\S]+?from\s+['"][^'"]+['"];?/gm;
  const regexDescription = /---\s+description:\s+([\s\S]+?)\s+---/;

  // Remove import statements
  output = output.replace(regexImportStatements, "");

  // Extract description
  const descriptionMatch = output.match(regexDescription);
  const description = descriptionMatch ? descriptionMatch[1] : "";
  output = output.replace(regexDescription, "");

  // Remove horizontal rules, setext-style headers, atx-style headers, fenced code blocks
  output = output
    .replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "")
    .replace(/\n={2,}/g, "\n")
    .replace(/~{3}.*\n/g, "")
    .replace(/`{3}.*\n/g, "")
    .replace(/^[=\-]{2,}\s*$/g, "")
    .replace(/^(\n)?\s{0,}#{1,6}\s+|(\s{0,}#{1,6}\s+)?(\n)?\s{0,}$/gm, "");

  // Remove HTML tags
  output = output.replace(/<[^>]*>/g, "");

  // Remove list leaders
  output = output.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1");

  // Remove strikethrough, inline links, images, blockquotes
  output = output
    .replace(/~~/g, "")
    .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, "")
    .replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1")
    .replace(/^\s{0,3}>\s?/g, "")
    .replace(/(^|\n)\s{0,3}>\s?/g, "\n\n");

  // Remove emphasis, code blocks, inline code
  output = output
    .replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2")
    .replace(/(`{3,})(.*?)\1/gm, "$2")
    .replace(/`(.+?)`/g, "$1");

  // Remove extra spaces
  output = output.replace(/\s\s+/g, "");

  // Replace multiple newlines with exactly two and remove extra empty lines
  output = output.replace(/\n{2,}/g, "\n\n").replace(/\n{3,}/g, "\n\n");

  // Remove {" "} and {' '}
  output = output.replace(/\{" "\}/g, "").replace(/\{' '\}/g, "");

  output = output.replace(/\n+/g, " ");

  return { description, output };
};

/**
 * Recursively finds all MDX files in a directory.
 *
 * @param {string} dir - The directory to search in.
 * @param {string[]} mdxFiles - An array to store the paths of the found MDX files.
 * @returns {string[]} - An array containing the paths of all the found MDX files.
 */
const findAllMDXFiles = (dir, mdxFiles = []) => {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      if (file !== "node_modules") {
        findAllMDXFiles(filePath, mdxFiles);
      }
    } else if (file.endsWith(".mdx")) {
      if (file.includes("404")) return;
      mdxFiles.push(filePath);
    }
  });

  return mdxFiles;
};

/**
 * Process an array of MDX files and generate a CSV file with the specified output path.
 *
 * @param {string[]} mdxFiles - The array of MDX file paths to process.
 * @param {string} outputPath - The output path for the generated CSV file.
 * @returns {void}
 */
const processMDXFilesToCSV = (mdxFiles, outputPath) => {
  const header = "path,description,content\n";
  fs.writeFileSync(outputPath, header);

  mdxFiles.forEach((filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
    const { description, output } = removeMarkdown(content);

    const csvLine = `"${filePath}","${description}","${output.replace(
      /"/g,
      '""'
    )}"\n`; // Escape quotes and add to CSV
    fs.appendFileSync(outputPath, csvLine);
  });
};

const directoryPath = "./pages/";

const mdxFiles = findAllMDXFiles(directoryPath);

const outputPath = "./pages/api/search/db.csv";

processMDXFilesToCSV(mdxFiles, outputPath);

console.log(`Search CSV generation complete. Output file at: ${outputPath}`);
