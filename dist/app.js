import inquirer from "inquirer";
import chalk from "chalk";
const questions = await inquirer.prompt([
    {
        name: "ans1",
        type: "list",
        choices: ["Angular", "React", "Vuejs", "Vanilla JavaScript"],
        message: chalk.green(`\nNext.js is a framework built on top of which library?`),
    },
    {
        name: "ans2",
        type: "list",
        choices: [
            "Extensive built-in component library",
            "Automatic code splitting for improved performance",
            "Built-in state management solution for small applications",
            "Faster development process compared to server-side rendering from scratch",
        ],
        message: chalk.green(`\nWhat is one of the primary benefits of using Next.js for building web applications?`),
    },
    {
        name: "ans3",
        type: "list",
        choices: ["next/link", "next/script", "next/image", "next/head"],
        message: chalk.green(`\nWhich of the following Next.js components helps optimize images in your application?`),
    },
    {
        name: "ans4",
        type: "list",
        choices: ["True", "False"],
        message: chalk.green(`\nNext.js applications can be statically generated, meaning the HTML is pre-rendered at build time for faster initial page loads`),
    },
    {
        name: "ans5",
        type: "list",
        choices: [
            "Manage state within a component",
            "Fetch data on the server at build time for static pages",
            "Perform user-specific data manipulation before rendering",
            "Handle server-side rendering logic for every request",
        ],
        message: chalk.green(`\nWhat is the purpose of the getStaticProps function in Nextj.s?`),
    },
    {
        name: "ans6",
        type: "list",
        choices: [
            "Static generation pre-renders all pages, while SSR renders on each request",
            "SSR provides faster initial load times, while static generation takes longer",
            "Static generation only works for dynamic content, while SSR is better for static content",
            "They are the same thing with different names",
        ],
        message: chalk.green(`\nWhat is the difference between static generation and server-side rendering (SSR) in Next.js?`),
    },
    {
        name: "ans7",
        type: "list",
        choices: [
            "Required for all Nextjs projects to ensure type safety",
            "Improves developer experience with code completion and static typing",
            "Disables some features of Next.js for better performance",
            "Only works with specific libraries and frameworks",
        ],
        message: chalk.green(`\nWhich statement best describes the use of TypeScript with Next.js?`),
    },
    {
        name: "ans8",
        type: "list",
        choices: [
            "Creating a file named 404js in the root pages directory",
            "Using a custom error handler component",
            "Defining a route named error in the pages directory",
            "Modifying the _appjs file to handle 404 errors",
        ],
        message: chalk.green(`\nWhich of the following is NOT a valid way to create a custom 404 page in Next.js?`),
    },
    {
        name: "ans9",
        type: "list",
        choices: [
            "Client-side Data Fetching (useEffect): Fetches data after the initial render in the browser, suitable for user-specific content updates",
            "Static Generation (getStaticProps): Fetches data at build time, making it ideal for frequently updating blog posts",
            "Server-side Rendering (getServerSideProps): Fetches data on the server for every request, offering the best performance for static content",
            "Incremental Static Regeneration (ISR): Revalidates statically generated pages at regular intervals, perfect for data feeds that change occasionally",
        ],
        message: chalk.green(`\nWhich of the following options accurately describes a data fetching strategy in Next.js and its ideal use case?`),
    },
    {
        name: "ans10",
        type: "list",
        choices: [
            "Improved SEO and initial page load performance",
            "Requires less code for simple applications",
            "Offers a more complex development environment",
            "Provides a complete framework that replaces React",
        ],
        message: chalk.green(`\nWhat are some advantages of using Next.js compared to vanilla React when building web applications?`),
    },
]);
const { ans1, ans2, ans3, ans4, ans5, ans6, ans7, ans8, ans9, ans10 } = questions;
if (ans1 === "React") {
    console.log("CORRECT");
}
else {
    console.log("WRONG");
}
