import "./Projects.scss";
import img from "img/ImagesForCards/screenshot-1_kk.jpg";

import Card from "components/Feature/Card";

const Projects = (props) => {
  return (
    <div className="projects">
      <h2 className="projects__name">Projects</h2>
      <div className="projects__cards">
        <Card
          imgSrc={img}
          siteLink="https://kurkestutis.netlify.app"
          codeLink="https://github.com/KurKestutis/pig-dice-game"
        />
      </div>
    </div>
  );
};

export default Projects;
