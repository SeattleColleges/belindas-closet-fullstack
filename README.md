# Belinda's Closet Fullstack Monorepo

This repository contains both the frontend and backend code for Belinda's Closet application in a monorepo structure.

## Repository Structure

```
belindas-closet-fullstack/
├── belindas-closet-nextjs/       # Frontend (Next.js)
└── belindas-closet-nestjs/       # Backend (Nest.js)
```

## Getting Started

### Prerequisites

- Node.js (v18+ for backend, v20+ for frontend)
- npm

### Installation

Install all dependencies for both projects from the root:

```bash
npm install
```

### Running the Applications

You need to run the frontend and backend in separate terminal windows or in a split terminal:

**Terminal 1 - Frontend (NextJS):**

```bash
# Change to frontend directory
cd belindas-closet-nextjs

# Start frontend server (runs on http://localhost:3000)
npm run dev
```

**Terminal 2 - Backend (NestJS):**

```bash
# Change to backend directory
cd belindas-closet-nestjs

# Start backend server (runs on http://localhost:3000)
npm run start:dev
```

### Building the Applications

Build both applications from root directory of the project:

```bash
npm run build
```

Or build them individually:

```bash
# Frontend only
cd belindas-closet-nesxjs
npm run build

# Backend only
cd belindas-closet-nestjs
npm run build
```

### Running Tests

Run tests for both applications from the root directory of the project:

```bash
npm run test
```

Or test them individually:

```bash
# Frontend only
cd belindas-closet-nesxjs
npm run test

# Backend only
cd belindas-closet-nestjs
npm run test
```

## Environment Variables

Each workspace has its own environment variables. Please refer to the individual workspace READMEs for details.

## Additional Information

For more specific information about each application, please refer to their respective README files:

- [Frontend (Next.js)](./belindas-closet-nextjs/README.md)
- [Backend (Nest.js)](./belindas-closet-nestjs/README.md)
