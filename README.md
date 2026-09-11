# Interactive Comments Section

A responsive and interactive comments application built with **React, TypeScript, Tailwind CSS, and Context API**.

<p align="center">
  <img src="./preview/preview-interactive-comments.gif" alt="Interactive Comments Section preview" width="100%" />
</p>

<p align="center">
  <a href="https://interactive-comments-section-main-beryl.vercel.app/">Live Demo</a>
  •
  <a href="https://github.com/israel-monteiro/interactive-comments-section">Repository</a>
  •
  <a href="https://www.frontendmentor.io/solutions/interactive-comments-section-with-react-and-typescript-ypMc9Vqa9L">Frontend Mentor Solution</a>
</p>

## About

Interactive Comments Section is a front-end application that allows users to create, reply to, edit, delete, and vote on comments.

The project focuses on **state management, reusable components, nested data manipulation, TypeScript interfaces, and browser persistence**.

It was originally developed from a Frontend Mentor challenge and expanded as a practical React and TypeScript project.

---

## ✨ Features

- Add new comments
- Reply to comments and replies
- Edit your own comments and replies
- Delete comments and replies with confirmation
- Upvote and downvote comments and replies
- Prevent scores from going below zero
- Nested replies
- Current user identification
- Persistent comments and scores with `localStorage`
- Responsive mobile and desktop layouts
- Keyboard focus states
- Accessible delete confirmation dialog

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **React** | Component-based user interface |
| **TypeScript** | Type safety and data modeling |
| **Tailwind CSS** | Styling and responsive design |
| **Context API** | Shared comments state and actions |
| **localStorage** | Browser persistence |
| **Vite** | Development and production build |
| **ESLint** | Code quality and linting |

---

## 🧠 Architecture

The application separates the interface into reusable components for comments, replies, forms, voting controls, and user actions.

Shared comment data and update functions are managed by `CommentProvider` and exposed through `CommentContext`.

Local component state is used for interface-specific behavior such as opening edit forms, reply forms, and the delete confirmation dialog.

This separation keeps shared application state centralized while UI-specific state remains close to the components that use it.

---

## 🔄 State Management

Comments and replies are updated using immutable state operations.

The application handles:

- Creating comments and replies
- Updating existing content
- Removing comments and nested replies
- Increasing and decreasing scores

Nested data is updated using methods such as `map`, `filter`, and spread syntax without directly mutating the existing state.

The application initializes comments from `localStorage` when available and falls back to the original JSON data.

Changes are automatically persisted using `useEffect`.

---

## 📁 Project Structure

```text
src/
├── assets/
├── components/
├── contexts/
├── data/
├── interfaces/
├── App.tsx
└── main.tsx
```

The project follows a component-based structure to keep responsibilities separated and make the interface easier to maintain.

---

## 📚 What I Learned

This project helped me improve my understanding of:

- React component composition
- TypeScript interfaces
- Context API
- Local vs. shared state
- Immutable state updates
- Nested arrays and objects
- `map` and `filter`
- `localStorage`
- `useEffect`
- Reusable components
- Responsive layouts with Tailwind CSS
- Basic accessibility

One of the main challenges was managing comments and nested replies while keeping state updates immutable.

It also helped me understand when state should remain local to a component and when it should be shared through Context.

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/israel-monteiro/interactive-comments-section.git
```

Enter the project directory:

```bash
cd interactive-comments-section
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

---

## 🎯 Challenge

This project is based on the
[Interactive Comments Section challenge](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9L)
from Frontend Mentor.

The original design assets and requirements were provided by Frontend Mentor, while the application architecture and implementation were developed as part of my front-end learning process.

---

## 👨‍💻 Author

Developed by **Israel Monteiro**.

[GitHub](https://github.com/israel-monteiro)