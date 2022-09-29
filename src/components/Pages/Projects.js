import "./Projects.scss";

import Card from "../Feature/Card";

const Projects = (props) => {
  return (
    <>
      <h2>Projects</h2>
      <Card
        siteLink="https://kurkestutis.netlify.app"
        codeLink="https://github.com/KurKestutis/pig-dice-game"
      />
    </>
  );
};

export default Projects;
