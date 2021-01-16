import "./Projects.scss";
import Project from "../Project/Project";

export default function Projects(props) {
  let projects = props.projects;
  return (
    <div className='Projects-win'>
      <div
        className='Projects '
        style={{
          width: 100 * projects.length + "%",
          marginLeft: -100 * props.currentProject + "%",
        }}
      >
        {projects.map((elem, i) => {
          return (
            <Project
              key={i}
              projects={props.projects}
              currentProject={props.currentProject}
              selectTask={props.selectTask}
              selectedTask={props.selectedTask}
              saveTextarea={props.saveTextarea}
              currentTask={props.currentTask}
              exit={props.exit}
            />
          );
        })}
      </div>
    </div>
  );
}
