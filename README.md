# UI Prototype Builder

This project allows you to create advanced UI prototypes effortlessly using GitHub Copilot in VS Code's Agent mode. Built with Wired Elements via `wired-elements-react`, React, and Next.js, you can develop sophisticated interfaces without the need for complex prompts.

## Getting Started

1. Clone this repository to get the template React project.

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Run an example prompt. Turn on "Agent mode" in Copilot Chat and prompt with an example:

```bash
Make a dashboard with mock data. it has 3 columns, with the middle one as the main one, left is nav, and right is for supplementary / smaller information. it should have various modules, and small charts showcasing some simulated scenario. it should be clear and have interactive elements.
```

**Optional:** Enable 'auto approve' in Copilot settings to automatically apply agent-written changes to the codebase. You'll still be able to review and choose whether to keep or discard changes from the entire session. This setting can be found in VS Code settings > Chat > Tools > Auto Approve.

## Features

- Next.js boilerplate application
- wired-elements-react components
- Tailwind styling
- lucide-react icons
