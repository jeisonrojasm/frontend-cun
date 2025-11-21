# CUN Frontend

This project implements a simple frontend interface for a fullstack evaluation management system. It consumes a REST API built with NestJS, TypeScript, Prisma, and PostgreSQL. The frontend allows users to browse courses, view lessons, and take evaluations interactively.

> ⚠️ **Note: The frontend requires the [*backend-cun*](https://github.com/jeisonrojasm/backend-cun) application to be running in order to make API requests.**

## 🛠️ Built with

- React + Vite
- Context API
- Typescript

## ✅ Prerequisites

Before getting started, make sure you have the following installed:

- ✅ [*Git*](https://git-scm.com/)

## 📥 Get the project

Clone the repository:

```bash
#Clone the repository:
git clone https://github.com/jeisonrojasm/frontend-cun.git
cd frontend-cun
```

## 📁 Project Structure

This frontend is built with React and follows a modular and scalable structure. Vite is used as the bundler, along with best practices to facilitate maintenance, testing, and component reuse.

```bash
frontend-cun/
├── public/                  # Public files (favicon, index.html)
├── src/                     # Frontend source code
│   ├── components/          # Reusable UI components
│   │   └── Button/          # Example of an atomic component
│   │       ├── Button.tsx
│   │       ├── Button.css
│   ├── context/             # Global contexts (e.g., authentication, user state)
│   │   ├── DataContext.tsx
│   ├── hooks/               # Reusable custom hooks
│   │   └── useModal.ts
│   ├── utils/               # Utility functions
│   │   ├── functions.ts
│   │   ├── queries.ts        # Functions that consume the backend API
│   ├── views/                # Page views (grouped by route or flow)
│   │   └── SignIn/
│   │       ├── SignIn.tsx
│   │       ├── SignIn.css
│   │       ├── SignInFunctions.ts
│   ├── App.tsx              # Root component of the app
│   ├── App.css              # Global app styles
│   ├── main.tsx             # Main entry point
│   └── index.css            # Base/global styles
├── .env                     # Environment variables for development
├── .gitignore               # Files and folders ignored by Git
├── index.html               # Base HTML file (used by Vite)
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

### 🧱 Conventions per module

Each module in `views/` and `components/` follows a file-separation pattern to maintain a clean and scalable architecture:

| File              | Purpose                                                       |
|-------------------|---------------------------------------------------------------|
| `*.tsx`           | Main component (view or reusable UI)                          |
| `*.css`           | Component- or view-specific styles                            |
| `*Functions.ts`   | Module-specific helper functions                              |

## 🚀 Run

You only need to have Node.js installed (version 18 or higher recommended).

### 1. **Install the dependencies**

```bash
npm install
```

### 2. **`.env` file required**

Normally, the `.env` file **should not be included** in a public repository, as it may contain sensitive configuration values.
However, for demonstration and evaluation purposes —and because this is not a production project— the `.env` file is included in the repository so anyone can run the project without additional setup.

You will find the `.env` file already placed in the root of the project.

### 3. Start the application

```bash
npm run dev
```

## ✅ Application ready to use

You will be able to see the application running.

> 🧪 You can access `http://localhost:5173/` from your browser and start interacting with the interface.

## 👨‍💻 Author

Developed by **Jeison Rojas Mora** - *Fullstack Developer*

- [https://github.com/jeisonrojasm](https://github.com/jeisonrojasm)
- [https://www.linkedin.com/in/jeison-rojas-mora/](https://www.linkedin.com/in/jeison-rojas-mora/)
