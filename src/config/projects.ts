import type { Project } from "@/types/project";

import deploy from "./deploy";

export default {
    languages: [
        ["Vue", 100, "progress-success"],
        ["Angular", 85, "progress-error"],
        ["Java", 75, "progress-warning"],
        ["Go", 100, "progress-info"],
        ["JS/TS", 100, "progress-accent"],
        ["PHP", 80, "progress-primary"],
    ].sort((a, b) => Number(b[1]) - Number(a[1])),

    projects: [
        {
            title: "Minesweeper",
            tools: ["Java", "JavaFX"],
            description: "A simple Minesweeper clone with custom difficulties. Built using JavaFX.",
            image: `${deploy.dir}/assets/projects/minesweeper.png`,
        },

        {
            title: "Personal Resume",
            tools: ["HTML", "CSS", "JS/TS"],
            description: "This is a personal resume style website built with pure HTML and CSS.",
            url: "https://mseip.scweb.ca/WEB110/bonus/",
            image: `${deploy.dir}/assets/projects/resume.png`,
        },

        {
            title: "Throwing Simulator",
            tools: ["Java", "JavaFX"],
            description: "An object throwing simulator built with JavaFX.",
            image: `${deploy.dir}/assets/projects/throwing.png`,
        },

        {
            title: "Personal Website",
            tools: ["JS/TS", "HTML", "CSS"],
            description: "A simple personal website built with pure HTML and CSS.",
            url: "https://mseip.scweb.ca/WEB210/micah-seip-portfolio/",
            image: `${deploy.dir}/assets/projects/personal.png`,
        },

        {
            title: "Vaultify",
            tools: ["Java", "JavaFX", "SQL"],
            description:
                "Vaultify is a Java based application designed to store and manage passwords securely.",
            image: `${deploy.dir}/assets/projects/vaultify.png`,
            vcs: "https://github.com/AnandOtivCode/Vaultify"
        },

        {
            title: "Personal Portfolio",
            tools: ["Vue", "PHP", "JS/TS"],
            description: "A portfolio built with Vue and Typescript. You are currently here :)",
            image: `${deploy.dir}/assets/projects/portfolio.png`,
            url: deploy.url,
            vcs: "https://github.com/mseip/Portfolio",
        },
    ] as Project[],
}
