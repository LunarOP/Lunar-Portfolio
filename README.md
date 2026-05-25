# My Project

This project is set up to use [Bun](https://bun.sh) as the package manager and runtime.

## Prerequisites

Install Bun (if you haven’t already):

**Windows (PowerShell):**
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

**macOS/Linux:**
```bash
curl -fsSL https://bun.sh/install | bash
```

## Run with Bun

```bash
# Install dependencies
bun install

# Start the dev server
bun run dev
```

Other scripts:
- `bun run build` — production build
- `bun run start` — run production server
- `bun run lint` — run ESLint
