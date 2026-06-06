import Bold from "../bold";
import TechCard from "../tech-badge";

const FOCUS_SKILL = [
  "Customer Operations",
  "Problem Solving",
  "Google Sheets",
  "JavaScript",
  "AI-Assisted Development",
  "Automation",
  
];

export const Intro = {
  Sub: () => (
    <div className="text-sm text-muted-foreground font-mono tracking-wider">
      Administrative & Customer Support
    </div>
  ),

  Name: () => (
    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight">
      Aditya <span className="max-sm:hidden">👋</span>
      <br />
    </h1>
  ),

About: () => (
  <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
    I work in <Bold>operations and customer support</Bold>, where I enjoy
    finding practical solutions to everyday challenges.
    <br />
    <br />
    To make work faster and more efficient, I've built several{" "}
    <Bold>internal tools and small web applications</Bold> that started as
    personal projects and later helped improve team productivity.
    <br />
    <br />
    I'm continuously learning and exploring <Bold>technology</Bold>,
    using it as a way to solve real-world problems and streamline workflows.
  </p>
),

  Status: () => (
    <div className="flex flex-row items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        Open to opportunities
      </div>
      <div className="flex items-center gap-1">
        <span>📍</span>Indonesia
      </div>
    </div>
  ),

  CurrentJob: () => (
    <div className="space-y-2">
      <div className="text-foreground">Seeking New Opportunities</div>
      <div className="text-xs text-muted-foreground">
        Available for full-time roles
      </div>
    </div>
  ),

  Focus: () => (
    <div className="flex flex-wrap gap-2">
      {FOCUS_SKILL.map((skill) => (
        <TechCard tech={skill} key={skill} />
      ))}
    </div>
  ),
};
