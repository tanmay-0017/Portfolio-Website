import img1 from "../images/frontend-icon.png"
import img2 from "../images/backend-icon.png"
import img3 from "../images/tools-icon.png"
import img4 from "../images/softskills-icon.png"

export const SKILLS = [
    {
        title: "Frontend",
        icon: img1, 
        skills: [
            { skill: "HTML5", percentage: "90%" }, 
            { skill: "CSS3 (Sass/SCSS)", percentage: "80%" }, 
            { skill: "JavaScript", percentage: "75%" }, 
            { skill: "React.js", percentage: "80%" },
        ],
    },
    {
        title: "Backend",
        icon: img2,
        skills: [
            { skill: "Node.js", percentage: "70%" },
            { skill: "C++", percentage: "95%" },
            { skill: "Python", percentage: "80%" },
            // { skill: "Express.js", percentage: "65%" },
        ],
    },
    {
        title: "Tools", 
        icon: img3, 
        skills: [
            { skill: "Git & GitHub", percentage: "85%" }, 
            { skill: "Visual Studio Code", percentage: "75%" },  
            // { skill: "Webpack", percentage: "60%" }, 
            { skill: "Responsive Design", percentage: "70%" }, 
            { skill: "MySQL Workbench", percentage: "90%" }, 
        ],
    },
    {
        title: "Soft Skills",
        icon: img4, 
        skills: [
            { skill: "Problem-solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "85%" }, 
            { skill: "Attention to Detail", percentage: "75%" }, 
            { skill: "Leadership and TeamWork", percentage: "85%" }, 
        ]
    }
];
