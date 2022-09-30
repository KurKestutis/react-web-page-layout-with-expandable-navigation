import "./Projects.scss";

import Card from "components/Feature/Card";
import db from "db.json";

const Projects = (props) => {
  const cards = db.map((record) => (
    <Card
      key={record.id}
      name={record.name}
      imgSrc={record.imgPath}
      siteLink={record.siteHttp}
      codeLink={record.codeHttp}
    />
  ));

  return (
    <div className="projects">
      <h2 className="projects__name">Projects</h2>
      <div className="projects__cards">{cards}</div>
    </div>
  );
};

export default Projects;
