# E-Commerce Project(React with Typescript)

Welcome to my E-Commerce project! Fuzz Records! This GitHub repository contains a web application built using React, React Router, and TypeScript to create an e-commerce website with features like a search bar, routing, form validation, and user authentication.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
  - [Search Bar](#search-bar)
  - [Routes](#routes)
  - [Form Validation](#form-validation)
  - [Hooks](#hooks)
  - [User Authentication](#user-authentication)
- [License](#license)

## Introduction

This e-commerce project is built using modern web development tools and libraries. It provides a simple yet effective foundation for creating an online shopping platform. The project's key features include a search bar, dynamic routing, form validation, and user authentication. React with Typescript and React Router are used for creating the user interface, and various dependencies are managed through [pnpm](https://pnpm.io/), a package manager.

## Getting Started

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/aaron25484/e-commerce.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce
   ```

3. Install the project dependencies using pnpm:

   ```bash
   pnpm install
   ```
Make sure to install the following dependencies explicitly:

    ```bash
    pnpm install react-hook-form tailwindcss react-responsive-carousel react-router-dom
    ```
4. Start the development server:

   ```bash
   pnpm run server
   pnpm run dev
   ```

The application should now be running, and you can access it by opening a web browser and navigating to `http://localhost:3000`.

## Project Structure

The project structure is organized as follows:

- `src/` - Contains the source code for the application.
- `src/components/` - Contains React components used to build the UI.
- `src/context/` - Contains context providers for managing global state.
- `src/assets/` - Holds static assets such as images and data.
- `src/utils/` - Little files which are useful through the app.
- `src/pages` - The main pages of which the app is made of.
- `src/App.tsx` - The entry point of the application.

## Key Features

### Search Bar

The search bar enables users to search for products by entering keywords. The search functionality provides a smooth shopping experience by quickly filtering the displayed products based on user input.

### Routes

React Router is used to manage the application's routes, ensuring that each page has its URL and content. This allows users to navigate between different sections of the website without a full page reload.

### Form Validation

Form validation is implemented using the `react-hook-form` library, ensuring that user inputs are valid before submitting forms, such as during the checkout process.

### Hooks

The project makes extensive use of React hooks, including `useEffect`, `useContext`, and `useState`, to manage component lifecycle, global state, and component-specific state.

### User Authentication

User authentication and private routes are an integral part of the e-commerce platform. Users can create accounts, log in, and access certain pages that require authentication.
