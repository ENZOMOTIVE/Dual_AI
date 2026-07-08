# Dual AI

> Dual AI is a WhatsApp-based dual-agent AI experiment for exploring conversational automation.

## The Story

Dual AI starts with a simple goal: make model-driven behavior useful around wallets, tokens, contracts, or blockchain workflows. Its shape tells the same story: the product interface, the service layer, and the AI-assisted workflow live close enough together that a maintainer can see the project as a whole before diving into individual folders.

## Detailed Description

Dual AI is a WhatsApp-based dual-agent AI experiment for exploring conversational automation. This README is meant to explain the project like a handoff note: what the idea is, why the repository exists, and how someone can start working with it without opening every file first.

The interesting part of this project is the connection between agent behavior and on-chain or wallet-aware actions. A maintainer should be able to trace both sides: where the model-driven workflow begins, and where protocol, wallet, or transaction logic takes over.

At the top level, the most important entry points are `Sonic-Agent`, `frontend`, and `package.json`. Together they show the current boundary of the project and make it easier to separate product code, support files, documentation, and experiments.

The declared Node surfaces include `frontend` (scripts: `dev`, `build`, `lint`, `preview`) and the root package (no scripts declared). Those package files are the best starting points for understanding how the app runs, builds, or validates itself.

The visible stack currently points to `Next.js`, `React`, `Vite`, `Node.js`, `TypeScript`, `JavaScript`, `HTML`, and `CSS`. Keep this list honest as the project changes so the README remains useful as a first technical map.

## What It Includes

- A user-facing surface for the product, demo, dashboard, or static experience.
- A service layer for APIs, realtime behavior, bot logic, or server-side workflows.
- AI-assisted behavior through model providers, bot flows, or agent-oriented tooling.

## How It Is Put Together

| Path | Role |
| --- | --- |
| `.gitattributes` | project file or folder |
| `.gitignore` | ignored local, dependency, and build files |
| `Sonic-Agent` | service, bot, API, or realtime layer |
| `frontend` | frontend or dashboard application |
| `package-lock.json` | locked dependency versions |
| `package.json` | Node package scripts and dependencies |

## Local Development

```bash
git clone https://github.com/ENZOMOTIVE/Dual_AI.git
cd Dual_AI
```

```bash
cd frontend
npm install
npm run dev
```

```bash
npm install
```

## Command Surface

| Area | Commands |
| --- | --- |
| `frontend/package.json` | `dev`, `build`, `lint`, `preview` |

## Configuration

- Document API ports, database URLs, third-party credentials, and service endpoints in `.env.example` before deployment.
- Keep wallet private keys, RPC URLs, mnemonics, and contract secrets outside version control.
- Keep model provider keys such as OpenAI or AI SDK credentials in local environment files only.

## Quality Checks

- From `frontend`, run `npm run lint`.
- From `frontend`, run `npm run build`.

## Where To Take It Next

- Add screenshots or a short user flow so visitors can see the interface before running it.
- Document the main API routes, bot events, or service responsibilities with example inputs and outputs.
- Describe the model provider, prompt boundaries, and evaluation approach for the AI-assisted parts.
- Keep setup commands current whenever dependencies, scripts, or deployment targets change.
- Record important product decisions here so the repository keeps its story as the code evolves.

## Project Metadata

| Field | Details |
| --- | --- |
| Repository | `ENZOMOTIVE/Dual_AI` |
| Categories | `Agentic AI`, `Protocol` |
| Primary stack | Next.js, React, Vite, Node.js, TypeScript, JavaScript, HTML, CSS |


## License

No license file is currently committed. Add one before distributing this project publicly.
