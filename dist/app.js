import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        choices: ["Angular", "React", "Vuejs", "Vanilla JavaScript"],
        message: chalk.green("Nextjs is a framework built on top of which library?"),
    },
    {
        name: "q2",
        type: "list",
        choices: [
            "Extensive built-in component library",
            " Automatic code splitting for improved performance",
            "Built-in state management solution for small applications",
            "Faster development process compared to server-side rendering from scratch",
        ],
        message: chalk.green("What is one of the primary benefits of using Nextjs for building web applications?  "),
    },
    {
        name: "q3",
        type: "list",
        choices: ["next/link ", "next/script", "       next/image", "next/head"],
        message: chalk.green("Which of the following Nextjs components helps optimize images in your application? "),
    },
    {
        name: "q4",
        type: "list",
        choices: ["True", "False"],
        message: chalk.green("True or False: Nextjs applications can be statically generated, meaning the HTML is pre-rendered at build time for faster initial page loads"),
    },
    {
        name: "q5",
        type: "list",
        choices: [
            "Manage state within a component",
            "Fetch data on the server at build time for static pages",
            "    Perform user-specific data manipulation before rendering",
            " Handle server-side rendering logic for every request",
        ],
        message: chalk.green("What is the purpose of the getStaticProps function in Nextjs?"),
    },
    {
        name: "q6",
        type: "list",
        choices: [
            "Static generation pre-renders all pages, while SSR renders on each request",
            " SSR provides faster initial load times, while static generation takes longer",
            " Static generation only works for dynamic content, while SSR is better for static content",
            "They are the same thing with different names",
        ],
        message: chalk.green("What is the difference between static generation and server-side rendering (SSR) in Nextjs? "),
    },
    {
        name: "q7",
        type: "list",
        choices: [
            "Required for all Nextjs projects to ensure type safety",
            " Improves developer experience with code completion and static typing",
            "   Disables some features of Nextjs for better performance",
            " Only works with specific libraries and frameworks",
        ],
        message: chalk.green("Which statement best describes the use of TypeScript with Nextjs?"),
    },
    {
        name: "q8",
        type: "list",
        choices: [
            "Creating a file named 404js in the root pages directory",
            "Using a custom error handler component",
            " Defining a route named error in the pages directory",
            "  Modifying the _appjs file to handle 404 errors",
        ],
        message: chalk.green("Which of the following is NOT a valid way to create a custom 404 page in Nextjs?    "),
    },
    {
        name: "q9",
        type: "list",
        choices: [
            "Defines the main application layout",
            "  Fetches data for every page on the server",
            "Used for client-side routing logic",
            " Not required in modern Nextjs projects",
        ],
        message: chalk.green("What is the use case for the _appjs file in Nextjs?"),
    },
    {
        name: "q10",
        type: "list",
        choices: [
            "Improved SEO and initial page load performance",
            " Requires less code for simple applications",
            " Offers a more complex development environment",
            "  Provides a complete framework that replaces React",
        ],
        message: chalk.green("What are some advantages of using Nextjs compared to vanilla React when building web applications?"),
    },
]);
