import "./Project.scss";
import Task from "../Task/Task";

export default function Project(props) {
    let project = props.projects[props.currentProject];

    return (
        <div className='Project'>
            {project.tasks.map((task, index) => {
                const {title, text, id} = task;
                return (
                    <Task
                        id={id}
                        key={index}
                        title={title}
                        defaultValue={text}
                        selectedTask={props.selectedTask}
                        selectTask={props.selectTask}
                        index={index}
                        read={true}
                        dis={true}
                        saveTextarea={props.saveTextarea}
                        currentTask={props.currentTask}
                        exit={props.exit}
                    />
                );
            })}
        </div>
    );
}
