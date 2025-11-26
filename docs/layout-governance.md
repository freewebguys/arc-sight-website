# Layout Governance Rules

### Width Management

| Context                          | Component / Pattern                                      |
|----------------------------------|----------------------------------------------------------|
| Narrative text                   | `<ContainerNarrow>` (max-w-[65ch])                      |
| Issued document / Registry       | `<Panel variant="document" \| "registry">` (max-w-[72rem]) |
| Full-width layout artifacts      | `<Panel variant="artifact">` (w-full within Section)    |
| Global content container         | `Section` inner wrapper (max-w-[var(--max-content,72rem)]) |

### Do NOT

- ⛔ Apply `max-w-*`, `mt-*`, `py-*`, `px-*` directly on `Section`  
- ⛔ Hard-code pixel spacing outside token-based utilities (`--pad-*`, rhythm tokens)  
- ⛔ Wrap `Panel` inside `ContainerNarrow` unless the artifact is intentionally narrative-bound  
- ⛔ Use `min-h-screen` or `min-h-[--min-height-screen]` on any section except `Hero`

### When to Use

- 🟢 **Section**: tone (variant), vertical rhythm, and scroll governance only. No width decisions.  
- 🟢 **ContainerNarrow**: narrative and institutional prose that should read like a document (65ch).  
- 🟢 **Panel**: issued records, artifacts, registry entries, and institutional evidence content. Use:
  - `variant="document"` for single artifacts (65–72rem width, depending on design)
  - `variant="registry"` for multi-entry institutional lists
  - `variant="artifact"` for full-breakout layouts within the governed container


