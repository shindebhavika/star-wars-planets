# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React Planets Explorer 🌌

Welcome to the React Planets Explorer, an application that lets you explore information about planets in the Star Wars universe! 🚀

## Project Overview

This project is built using React.js with Vite for fast development, Tailwind CSS and Bootstrap for styling, React Spinner for loading indicators, and React Router DOM for navigation. Context API is used for state management.

## How to Run Locally

Follow these simple steps to run the project locally:
1. **git clone
2. **Install Dependencies:**
    ```bash
    npm install
    ```

3. **Run the Development Server:**
    ```bash
    npm run dev
    ```
   The project will be live at http://localhost:5173/.

## Application Description

### Home Page

The Home page fetches data about planets from the SWAPI. It displays images and information about each planet. Pagination is implemented to fetch data for the next 10 planets and so on.

### Resident Cards Page

Clicking the "Know More" button on the Home page launches the Resident Cards page. The Resident Cards page displays detailed information about the residents of the selected planet.

## Project Structure

The project structure is organized for easy navigation and maintenance:

- **src/components:** Contains reusable React components.
- **src/data:** Manages data using Context API hooks.
- **src/pages:** Houses main application pages.
- **src/styles:** Holds styling files with Tailwind CSS and Bootstrap customization.

![Planets Explorer Logo]()


project looks like:

![home-page](https://github.com/shindebhavika/star-wars-planets/assets/103195075/ee02a454-d2d4-4826-85fa-4f5714b433fa)
![home-page2](https://github.com/shindebhavika/star-wars-planets/assets/103195075/fd8ee903-8fb3-44ea-a2d4-0c1e1c4a53a7)
![Planet-detail](https://github.com/shindebhavika/star-wars-planets/assets/103195075/6ca58be4-3753-4595-b356-6635bcfb9d17)
![Resident](https://github.com/shindebhavika/star-wars-planets/assets/103195075/7c0cc2bf-8487-40ce-b1e4-85e5fde76e8f)


src/components: Contains reusable React components.
src/data: Manages data using Context API hooks.
src/pages: Houses main application pages.
src/styles: Holds styling files with Tailwind CSS and Bootstrap customization.
Feel free to explore the codebase and contribute to the project!
