import type { Project } from "@/types/project";

export default {
    languages: [
        ["Vue", 100],
        ["Angular", 80],
        ["Java", 75],
        ["Python", 90],
        ["Go", 100],
        ["JS/TS", 100],
        ["PHP", 55],
    ].sort((a, b) => Number(b[1]) - Number(a[1])),

    projects: [
        {
            title: "Minesweeper",
            tools: ["Java", "JavaFX"],
            description: "A simple Minesweeper clone with custom difficulties. Built using JavaFX.",
        },

        {
            title: "Personal Resume",
            tools: ["HTML", "CSS", "JS/TS"],
            description: "The bonus assignment from WEB110. A personal resume.",
        },

        {
            title: "Throwing Simulator",
            tools: ["Java", "JavaFX"],
            description: "An object throwing simulator built with JavaFX.",
        },

        {
            title: "Personal Website",
            tools: ["JS/TS", "HTML", "CSS"],
            description: "A personal website built with pure HTML and CSS.",
        },

        {
            title: "Vaultify",
            tools: ["Java", "JavaFX", "SQL"],
            description:
                "Vaultify is a Java based application designed to store and manage passwords securely.",
        },

        {
            title: "Personal Portfolio",
            tools: ["Vue", "PHP", "JS/TS"],
            description: "A simple Minesweeper clone with custom difficulties. Built using JavaFx.",
        },
    ] as Project[],
}
