
import "./Main.scss";
import Nav from "../Nav/Nav";
import ApearWin from "../ApearWin/ApearWin";
import Projects from "../Projects/Projects";

export default function Main (props){
    let apearWinCh = "";
    if (props.apearWinChekProj) {
      apearWinCh = (
        <ApearWin
          title='Введите название Проекта:'
          saveValueApearWin={props.saveValueApearWin}
          save={props.saveAddProject}
          chek={props.apearWinChekProj}
          closeApearWin={props.closeApearWin}
          saveBtn='Save'
          option=''
        />
      );
    } else if (props.apearWinChekTask && props.projects.length === 0) {
      apearWinCh = (
        <ApearWin
          title='Сначала нужно создать Проект'
          saveValueApearWin={props.saveValueApearWin}
          save={props.saveNewTask}
          chek={props.apearWinChekTask}
          closeApearWin={props.closeApearWin}
          saveBtn=''
          option='2'
        />
      );
    } else if (props.apearWinChekTask) {
      apearWinCh = (
        <ApearWin
          title='Введите название Задачи:'
          saveValueApearWin={props.saveValueApearWin}
          save={props.saveNewTask}
          chek={props.apearWinChekTask}
          closeApearWin={props.closeApearWin}
          saveBtn='Save'
          option=''
        />
      );
    }
    return (
      <div className='Main container p-0'>
        <Nav
          clickAddProj={props.addProject}
          nameProjects={props.nameProjects}
          switchProject={props.switchProject}
          currentProject={props.currentProject}
        />

        {apearWinCh}

        <Projects
          projects={props.projects}
          currentProject={props.currentProject}
          selectedTask={props.selectedTask}
          selectTask={props.selectTask}
          saveTextarea={props.saveTextarea}
          currentTask={props.currentTask}
          exit={props.exit}
        />
      </div>
    );
  }

