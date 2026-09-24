const repository = "mokotanin/nsi"
const branch = "main"
const modulePath = "/src/data/ghfillTree.js"
const apiHeaders = {
  Accept: "application/vnd.github+json",
  "User-Agent": "nsi-build",
}

const languageByExtension = {
  c: "C",
  cpp: "C++",
  css: "CSS",
  html: "HTML",
  java: "Java",
  js: "JavaScript",
  json: "JSON",
  jsx: "JavaScript JSX",
  md: "Markdown",
  php: "PHP",
  py: "Python",
  rs: "Rust",
  sh: "Shell",
  sql: "SQL",
  toml: "TOML",
  ts: "TypeScript",
  tsx: "TypeScript JSX",
  txt: "Text",
  vue: "Vue",
  xml: "XML",
  yaml: "YAML",
  yml: "YAML",
}

const binaryExtensions = new Set([
  "7z",
  "avi",
  "bin",
  "dll",
  "doc",
  "docx",
  "exe",
  "gif",
  "ico",
  "jpeg",
  "jpg",
  "mp3",
  "mp4",
  "ogg",
  "pdf",
  "png",
  "pyc",
  "rar",
  "svg",
  "tar",
  "ttf",
  "wav",
  "webp",
  "woff",
  "woff2",
  "xls",
  "xlsx",
  "zip",
])

function getLanguage(filePath) {
  const extension = filePath.split(".").pop()?.toLowerCase()
  return languageByExtension[extension] ?? "Text"
}

function isTextFile(filePath, size) {
  const extension = filePath.split(".").pop()?.toLowerCase()
  return !binaryExtensions.has(extension) && size <= 1_000_000
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: apiHeaders })
  if (!response.ok) {
    throw new Error(`GitHub API ${response.status}: ${url}`)
  }
  return response.json()
}

async function fetchFileContent(filePath) {
  const url = `https://raw.githubusercontent.com/${repository}/${branch}/${filePath
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`
  const response = await fetch(url, { headers: apiHeaders })
  if (!response.ok) {
    throw new Error(`GitHub raw ${response.status}: ${filePath}`)
  }
  return response.text()
}

function binaryFileContent(filePath, size) {
  const extension = filePath.split(".").pop()?.toLowerCase()
  const type = binaryExtensions.has(extension) ? "binaire" : "trop volumineux"
  return `[Fichier ${type} non affichable dans l'explorateur: ${filePath} (${size} octets)]`
}

function addFile(root, filePath, content) {
  const parts = filePath.split("/")
  const fileName = parts.pop()
  let current = root
  let currentPath = ""

  for (const folderName of parts) {
    currentPath = currentPath ? `${currentPath}/${folderName}` : folderName
    let folder = current.find((node) => node.type === "folder" && node.name === folderName)
    if (!folder) {
      folder = { type: "folder", name: folderName, path: currentPath, children: [] }
      current.push(folder)
    }
    current = folder.children
  }

  current.push({
    type: "file",
    name: fileName,
    path: filePath,
    language: getLanguage(filePath),
    content,
  })
}

function sortTree(nodes) {
  return nodes
    .map((node) =>
      node.type === "folder"
        ? { ...node, children: sortTree(node.children) }
        : node,
    )
    .sort((left, right) => {
      if (left.type !== right.type) return left.type === "folder" ? -1 : 1
      return left.name.localeCompare(right.name, "fr", {
        numeric: true,
        sensitivity: "base",
      })
    })
}

async function buildTree() {
  const tree = await fetchJson(
    `https://api.github.com/repos/${repository}/git/trees/${branch}?recursive=1`,
  )
  const files = tree.tree.filter((entry) => entry.type === "blob")
  const contents = await Promise.all(
    files.map((entry) =>
      isTextFile(entry.path, entry.size)
        ? fetchFileContent(entry.path)
        : binaryFileContent(entry.path, entry.size),
    ),
  )
  const root = []

  files.forEach((entry, index) => addFile(root, entry.path, contents[index]))
  return sortTree(root)
}

function generatedModule(tree) {
  return `const fileTree = ${JSON.stringify(tree)}

export { fileTree }
export const ghfillTree = fileTree

export function flattenTree(nodes, ancestors = []) {
  return nodes.flatMap((node) => {
    const entry = { ...node, ancestors }
    return node.type === "folder"
      ? [entry, ...flattenTree(node.children, [...ancestors, node])]
      : [entry]
  })
}
`
}

export function ghfillTreePlugin() {
  let generatedCode

  return {
    name: "ghfill-tree",
    enforce: "pre",
    async buildStart() {
      this.warn(`Chargement de ${repository}@${branch} pour ghfillTree.js...`)
      generatedCode = generatedModule(await buildTree())
    },
    load(id) {
      if (id.replaceAll("\\", "/").endsWith(modulePath) && generatedCode) {
        return generatedCode
      }
      return null
    },
  }
}

export const fileTree = []
export const ghfillTree = fileTree

export function flattenTree(nodes, ancestors = []) {
  return nodes.flatMap((node) => {
    const entry = { ...node, ancestors }
    return node.type === "folder"
      ? [entry, ...flattenTree(node.children, [...ancestors, node])]
      : [entry]
  })
}
