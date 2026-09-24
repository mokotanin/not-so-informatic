import { Fragment, useEffect, useMemo, useRef, useState } from "react"
import {
  Braces,
  ChevronDown,
  ChevronRight,
  Code2,
  File,
  FileCode2,
  FileText,
  Folder,
  FolderOpen,
  Home,
  Menu,
  Search,
  X,
} from "lucide-react"
import { AppleSwitch } from "@/components/AppleSwitch"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { flattenTree, fileTree } from "@/data/ghfillTree"

function getFileIcon(name) {
  const extension = name.split(".").pop()?.toLowerCase()
  if (["md", "txt", "pdf"].includes(extension)) return FileText
  if (["py", "js", "jsx", "html", "css", "sql", "json"].includes(extension)) return FileCode2
  return File
}

function includesTerm(node, term) {
  if (node.name.toLocaleLowerCase("fr").includes(term)) return true
  return node.type === "folder" && node.children.some((child) => includesTerm(child, term))
}

function HighlightedName({ name, term }) {
  if (!term) return name
  const start = name.toLocaleLowerCase("fr").indexOf(term)
  if (start < 0) return name

  return (
    <>
      {name.slice(0, start)}
      <mark className="rounded-sm bg-foreground/15 text-foreground">
        {name.slice(start, start + term.length)}
      </mark>
      {name.slice(start + term.length)}
    </>
  )
}

function FileTree({
  nodes,
  depth = 0,
  query,
  expanded,
  currentFolderPath,
  selectedPath,
  onFolderSelect,
  onFileSelect,
  onToggle,
}) {
  const visibleNodes = query ? nodes.filter((node) => includesTerm(node, query)) : nodes

  return visibleNodes.map((node) => {
    const isFolder = node.type === "folder"
    const isOpen =
      expanded.has(node.path) ||
      Boolean(query && isFolder && node.children.some((child) => includesTerm(child, query)))
    const isSelected = isFolder ? currentFolderPath === node.path : selectedPath === node.path
    const Icon = isFolder ? (isOpen ? FolderOpen : Folder) : getFileIcon(node.name)

    return (
      <div key={node.path}>
        {isFolder ? (
          <Collapsible open={isOpen} onOpenChange={() => onToggle(node.path)}>
            <div
              className={`tree-row group flex items-center gap-1 rounded-md pr-2 transition-colors ${isSelected ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"}`}
              style={{ paddingLeft: `${8 + depth * 14}px` }}
            >
              <CollapsibleTrigger
                aria-label={`${isOpen ? "Replier" : "Déplier"} ${node.name}`}
                className="flex size-6 shrink-0 items-center justify-center rounded text-muted-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
              >
                {isOpen ? (
                  <ChevronDown className="size-3.5" />
                ) : (
                  <ChevronRight className="size-3.5" />
                )}
              </CollapsibleTrigger>
              <Button
                type="button"
                variant="ghost"
                onClick={() => onFolderSelect(node)}
                className="h-7 min-w-0 flex-1 justify-start gap-2 rounded px-1.5 text-left text-xs font-normal text-current hover:bg-transparent hover:text-foreground"
              >
                <Icon className="size-3.5 shrink-0 text-muted-foreground" />
                <span className="truncate">
                  <HighlightedName name={node.name} term={query} />
                </span>
              </Button>
            </div>
            <CollapsibleContent>
              <FileTree
                nodes={node.children}
                depth={depth + 1}
                query={query}
                expanded={expanded}
                currentFolderPath={currentFolderPath}
                selectedPath={selectedPath}
                onFolderSelect={onFolderSelect}
                onFileSelect={onFileSelect}
                onToggle={onToggle}
              />
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <div
            className={`tree-row group flex items-center gap-1 rounded-md pr-2 transition-colors ${isSelected ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"}`}
            style={{ paddingLeft: `${8 + depth * 14}px` }}
          >
            <span className="w-6 shrink-0" />
            <Button
              type="button"
              variant="ghost"
              onClick={() => onFileSelect(node)}
              className="h-7 min-w-0 flex-1 justify-start gap-2 rounded px-1.5 text-left text-xs font-normal text-current hover:bg-transparent hover:text-foreground"
            >
              <Icon className="size-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate">
                <HighlightedName name={node.name} term={query} />
              </span>
            </Button>
          </div>
        )}
      </div>
    )
  })
}

function SidebarContents({
  query,
  expanded,
  currentFolderPath,
  selectedPath,
  onFolderSelect,
  onFileSelect,
  onToggle,
  onRootSelect,
  onClose,
}) {
  const allEntries = useMemo(() => flattenTree(fileTree), [])
  const fileCount = allEntries.filter((entry) => entry.type === "file").length

  return (
    <div className="flex h-full min-h-0 flex-col bg-background text-foreground">
      <div className="flex h-14.5 shrink-0 items-center justify-between border-b border-border px-4">
        <Button
          type="button"
          variant="ghost"
          onClick={onRootSelect}
          className="h-auto justify-start gap-2.5 p-0 text-left hover:bg-transparent"
        >
          <span className="flex size-7 items-center justify-center rounded-md border border-border bg-secondary text-[11px] font-semibold tracking-tight text-foreground">
            N
          </span>
          <span className="text-xs font-medium tracking-wide">
            NSI <span className="text-muted-foreground">/ explorer</span>
          </span>
        </Button>
        {onClose && (
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Fermer la navigation"
            className="text-muted-foreground"
          >
            <X />
          </Button>
        )}
      </div>

      <div className="flex items-center justify-between px-4 pb-2 pt-5">
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Explorateur
        </span>
        <span className="font-mono text-[10px] text-muted-foreground/70">{fileCount}</span>
      </div>
      <Button
        type="button"
        variant="ghost"
        onClick={onRootSelect}
        className={`mx-2 mb-2 h-8 w-auto justify-start gap-2 rounded-md px-2.5 text-xs ${currentFolderPath === "" && !selectedPath ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"}`}
      >
        <Home className="size-3.5" /> Accueil
      </Button>

      <ScrollArea className="min-h-0 flex-1 px-2 pb-4" viewportClassName="h-full">
        {query && !fileTree.some((node) => includesTerm(node, query)) ? (
          <p className="px-3 py-5 text-xs text-muted-foreground">
            Aucun fichier ou dossier trouvé.
          </p>
        ) : (
          <FileTree
            nodes={fileTree}
            query={query}
            expanded={expanded}
            currentFolderPath={currentFolderPath}
            selectedPath={selectedPath}
            onFolderSelect={onFolderSelect}
            onFileSelect={onFileSelect}
            onToggle={onToggle}
          />
        )}
      </ScrollArea>

      <div className="border-t border-border px-4 py-3">
        <p className="font-mono text-[10px] text-muted-foreground">
          Les prémices de la programmation{" "}
        </p>
      </div>
    </div>
  )
}

function ExplorerPage() {
  const [query, setQuery] = useState("")
  const [expanded, setExpanded] = useState(
    () => new Set(["Algorithmique", "Python", "Bases de données", "Réseaux"]),
  )
  const [currentFolderPath, setCurrentFolderPath] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [wrapLines, setWrapLines] = useState(false)
  const searchRef = useRef(null)
  const normalizedQuery = query.trim().toLocaleLowerCase("fr")
  const pathParts = selectedFile
    ? selectedFile.path.split("/")
    : currentFolderPath
      ? currentFolderPath.split("/")
      : []
  const lineCount = selectedFile?.content.split("\n").length ?? 0

  useEffect(() => {
    function handleShortcut(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        searchRef.current?.focus()
      }
      if (event.key === "Escape" && document.activeElement === searchRef.current) {
        setQuery("")
        searchRef.current?.blur()
      }
    }

    window.addEventListener("keydown", handleShortcut)
    return () => window.removeEventListener("keydown", handleShortcut)
  }, [])

  function selectFolder(path) {
    setCurrentFolderPath(path)
    setSelectedFile(null)
    setMobileSidebarOpen(false)
  }

  function selectFile(file) {
    setSelectedFile(file)
    setCurrentFolderPath(file.path.split("/").slice(0, -1).join("/"))
    setMobileSidebarOpen(false)
  }

  function toggleFolder(path) {
    setExpanded((previous) => {
      const next = new Set(previous)
      if (next.has(path)) next.delete(path)
      else next.add(path)
      return next
    })
  }

  function renderSidebar(onClose) {
    return (
      <SidebarContents
        query={normalizedQuery}
        expanded={expanded}
        currentFolderPath={currentFolderPath}
        selectedPath={selectedFile?.path}
        onFolderSelect={(folder) => {
          selectFolder(folder.path)
          setExpanded((previous) => new Set(previous).add(folder.path))
        }}
        onFileSelect={selectFile}
        onToggle={toggleFolder}
        onRootSelect={() => selectFolder("")}
        onClose={onClose}
      />
    )
  }

  return (
    <main className="explorer-shell flex h-dvh min-h-105 w-full overflow-hidden bg-background text-foreground">
      <aside className="hidden w-64.5 shrink-0 border-r border-border md:block">
        {renderSidebar()}
      </aside>

      <Sheet open={mobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
        <SheetContent
          side="left"
          showCloseButton={false}
          className="w-72.5 max-w-[85vw] gap-0 border-r border-border bg-background p-0 sm:max-w-72.5"
        >
          <SheetTitle className="sr-only">Explorateur de fichiers</SheetTitle>
          {renderSidebar(() => setMobileSidebarOpen(false))}
        </SheetContent>
      </Sheet>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex min-h-14.5 shrink-0 items-center gap-3 border-b border-border px-3 sm:px-5">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={() => setMobileSidebarOpen(true)}
            aria-label="Ouvrir la navigation"
            className="shrink-0 text-muted-foreground md:hidden"
          >
            <Menu />
          </Button>

          <Breadcrumb className="min-w-0 flex-1">
            <BreadcrumbList className="flex-nowrap gap-1 overflow-hidden text-xs">
              <BreadcrumbItem>
                <Button
                  type="button"
                  variant="ghost"
                  size="xs"
                  onClick={() => selectFolder("")}
                  className="h-7 gap-1.5 px-1.5 text-muted-foreground hover:text-foreground"
                >
                  <Home className="size-3.5" />
                  <span className="hidden sm:inline">Accueil</span>
                </Button>
              </BreadcrumbItem>
              {pathParts.map((part, index) => {
                const path = pathParts.slice(0, index + 1).join("/")
                const isCurrent = index === pathParts.length - 1

                return (
                  <Fragment key={path}>
                    <BreadcrumbSeparator className="text-muted-foreground/50" />
                    <BreadcrumbItem className="min-w-0">
                      {isCurrent ? (
                        <BreadcrumbPage className="max-w-[min(35vw,220px)] truncate text-xs">
                          {part}
                        </BreadcrumbPage>
                      ) : (
                        <Button
                          type="button"
                          variant="ghost"
                          size="xs"
                          onClick={() => selectFolder(path)}
                          className="h-7 max-w-[min(24vw,150px)] truncate px-1.5 text-muted-foreground hover:text-foreground"
                        >
                          {part}
                        </Button>
                      )}
                    </BreadcrumbItem>
                  </Fragment>
                )
              })}
            </BreadcrumbList>
          </Breadcrumb>

          <label className="relative ml-auto block w-[clamp(124px,34vw,270px)] shrink-0">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              ref={searchRef}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher dans le projet…"
              aria-label="Rechercher des fichiers et dossiers"
              className="h-8 rounded-md border-border bg-secondary/50 pl-8 pr-14 text-xs placeholder:text-muted-foreground/70 focus-visible:bg-background"
            />
            {query ? (
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                onClick={() => setQuery("")}
                aria-label="Effacer la recherche"
                className="absolute right-1 top-1/2 size-6 -translate-y-1/2 text-muted-foreground"
              >
                <X className="size-3" />
              </Button>
            ) : (
              <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rounded border border-border px-1 font-mono text-[9px] text-muted-foreground">
                ⌘ K
              </kbd>
            )}
          </label>
        </header>

        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex h-10 shrink-0 items-center justify-between border-b border-border bg-secondary/20 px-4 sm:px-6">
            <div className="flex min-w-0 items-center gap-2 text-xs text-muted-foreground">
              {selectedFile ? <Code2 className="size-3.5" /> : <Braces className="size-3.5" />}
              <span className="truncate">{selectedFile?.name ?? "Aperçu"}</span>
              {selectedFile && (
                <span className="hidden font-mono text-[10px] text-muted-foreground/60 sm:inline">
                  {selectedFile.language}
                </span>
              )}
            </div>
            {selectedFile && (
              <div className="flex items-center gap-2.5">
                <span className="hidden text-[10px] text-muted-foreground sm:inline">
                  Retour à la ligne
                </span>
                <AppleSwitch
                  checked={wrapLines}
                  onCheckedChange={setWrapLines}
                  label="Renvoyer les longues lignes à la ligne"
                  className="h-6 w-11"
                />
              </div>
            )}
          </div>

          {selectedFile ? (
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="flex shrink-0 items-center justify-between border-b border-border/70 px-4 py-2.5 sm:px-6">
                <div className="min-w-0">
                  <h1 className="truncate text-sm font-medium tracking-tight">
                    {selectedFile.name}
                  </h1>
                  <p className="mt-0.5 truncate font-mono text-[10px] text-muted-foreground">
                    {selectedFile.path}
                  </p>
                </div>
                <span className="ml-4 shrink-0 font-mono text-[10px] text-muted-foreground">
                  {lineCount} lignes
                </span>
              </div>
              <ScrollArea className="min-h-0 flex-1" viewportClassName="h-full">
                <div className="file-preview min-w-0 py-5 pr-6">
                  <pre
                    className={wrapLines ? "whitespace-pre-wrap wrap-break-word" : "whitespace-pre"}
                  >
                    <code>
                      {selectedFile.content.split("\n").map((line, index) => (
                        <span
                          className="code-line grid min-h-6 grid-cols-[3.25rem_minmax(0,1fr)]"
                          key={`${index}-${line}`}
                        >
                          <span
                            aria-hidden="true"
                            className="select-none pr-4 text-right text-muted-foreground/40"
                          >
                            {index + 1}
                          </span>
                          <span>{line || " "}</span>
                        </span>
                      ))}
                    </code>
                  </pre>
                </div>
              </ScrollArea>
              <footer className="flex h-7 shrink-0 items-center justify-between border-t border-border bg-secondary/20 px-3 font-mono text-[9px] text-muted-foreground sm:px-5">
                <span>{selectedFile.language}</span>
                <span>UTF-8</span>
              </footer>
            </div>
          ) : (
            <div className="flex min-h-0 flex-1 items-center justify-center px-6 text-center">
              <div className="max-w-sm">
                <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-xl border border-border bg-secondary/50 text-muted-foreground">
                  <FileCode2 className="size-5" />
                </div>
                <h1 className="text-sm font-medium">Sélectionne un fichier</h1>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  Choisis un fichier dans l’explorateur pour consulter son contenu.
                </p>
                <p className="mt-5 font-mono text-[10px] text-muted-foreground/60">
                  {flattenTree(fileTree).filter((entry) => entry.type === "file").length} fichiers ·
                  NSI
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export { ExplorerPage }
