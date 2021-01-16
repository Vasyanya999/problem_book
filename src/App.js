import "./App.scss";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            nameProjects: [],
            apearWinChekProj: false,
            apearWinValue: "",
            currentProject: 0,
            currentTaskIndex: 0,
            apearWinChekTask: false,
            chekSelectTask: false,
            textareaValue: "",
            currentTask: '',
        };
    }

    addProject = () => {
        this.setState({apearWinChekProj: true});
    };
    closeApearWin = () => {
        this.setState({
            apearWinChekProj: false,
            apearWinChekTask: false,
            apearWinValue: "",
        });
    };
    saveAddProject = () => {
        if (this.state.apearWinValue.trim() !== "") {
            let nameProjects = this.state.nameProjects.concat();
            let name = this.state.apearWinValue;
            nameProjects.push(name);
            let projects = this.state.projects.concat();
            projects.push({
                tasks: [],
                projectName: name,
                id: Date.now()
            });
            this.setState({nameProjects});
            this.setState({projects});
            this.closeApearWin();
        } else {
            this.closeApearWin();
        }
    };
    saveValueApearWin = (e) => {
        this.setState({apearWinValue: e.target.value});
    };
    switchProject = (i) => {
        this.setState({currentProject: i});
    };
    addTask = () => {
        this.setState({apearWinChekTask: true});
    };
    saveNewTask = () => {
        if (this.state.apearWinValue.trim() !== "") {
            let task = {
                id: Date.now(),
                title: this.state.apearWinValue,
                text: ""
            };

            let projects = this.state.projects.concat();
            projects[this.state.currentProject].tasks.push(task);

            this.setState({projects});
            this.closeApearWin();
        } else {
            this.closeApearWin();
        }
    };
    saveTextarea = (e) => {
        this.setState({textareaValue: e.target.value});

    };
    selectTask = (event, taskId) => {
        event.stopPropagation();
        this.setState({
            currentTask: taskId
        });
    }
    selectedTask = (e) => {
        if (!this.state.chekSelectTask) {
            // this.setState({currentTask: e})
            // this.setState({chekSelectTask: true});
            // let index = e.target.parentNode.parentNode.dataset.index;
            // let textarea = e.target.parentNode.parentNode.children[2].children[0];
            // e.target.parentNode.parentNode.children[1].classList.remove('none');
            // textarea.removeAttribute('disabled');
            // textarea.removeAttribute('readOnly');
            // e.target.parentNode.parentNode.classList.add('selectedTask');
            // e.target.parentNode.parentNode.classList.add('container');
            // document.body.classList.add('overflowHidden')
            // this.setState({currentTaskIndex: index});
        }
        if (e.target.className === 'Task-exit') {
            // let textarea = e.target.parentNode.children[2].children[0];
            // e.target.parentNode.children[1].classList.add('none');
            // textarea.setAttribute('disabled', true);
            // textarea.setAttribute('readOnly', true);
            // e.target.parentNode.classList.remove('selectedTask');
            // e.target.parentNode.classList.remove('container');
            // document.body.classList.remove('overflowHidden')
            // this.exit()
        }

    };
    exit = (event) => {
        event.stopPropagation();
        this.setState({
            currentTask: null
        });
        // if (this.state.textareaValue !== "") {
        //     let projects = this.state.projects.concat();
        //     let currentTask = projects[this.state.currentProject].tasks[this.state.currentTaskIndex];
        //     currentTask.text = this.state.textareaValue;
        //     this.setState({projects});
        //     this.setState({textareaValue: ""});
        // }
        // this.setState({chekSelectTask: false});
    };
    delTask = () => {
        // let projects = this.state.projects.concat()
        // let tasks = projects[this.state.currentProject].tasks
        //
        // tasks.splice(this.state.currentTaskIndex, 1)
        //
        // this.setState({
        //     projects,
        //     chekSelectTask: false,
        //     textareaValue: "",
        // });
        //
        // let e = this.state.currentTask
        // let textarea = e.target.parentNode.parentNode.children[2].children[0];
        // // textarea.value=''
        // e.target.parentNode.parentNode.children[1].classList.add('none');
        // textarea.setAttribute('disabled', true);
        // textarea.setAttribute('readOnly', true);
        // e.target.parentNode.parentNode.classList.remove('selectedTask');
        // e.target.parentNode.parentNode.classList.remove('container');
        // document.body.classList.remove('overflowHidden');
    }
    delProject = () => {
        let projects = this.state.projects.concat()
        projects.splice([this.state.currentProject], 1)
        let nameProjects = this.state.nameProjects.concat()
        nameProjects.splice([this.state.currentProject], 1)

        this.setState({
            projects,
            nameProjects,
        })
        if (this.state.currentProject > 0) {
            this.setState({currentProject: this.state.currentProject - 1})
        }

    }

    render() {
        console.log(this.state);
        return (
            <div className='App'>
                <Header addTask={this.addTask} chekSelectTask={this.state.chekSelectTask} delTask={this.delTask}/>
                <Main
                    projects={this.state.projects}
                    nameProjects={this.state.nameProjects}
                    apearWinChekProj={this.state.apearWinChekProj}
                    apearWinChekTask={this.state.apearWinChekTask}
                    apearWinValue={this.state.apearWinValue}
                    currentProject={this.state.currentProject}
                    currentTask={this.state.currentTask}
                    addProject={this.addProject}
                    closeApearWin={this.closeApearWin}
                    saveAddProject={this.saveAddProject}
                    saveValueApearWin={this.saveValueApearWin}
                    switchProject={this.switchProject}
                    saveNewTask={this.saveNewTask}
                    selectedTask={this.selectedTask}
                    selectTask={this.selectTask}
                    saveTextarea={this.saveTextarea}
                    exit={this.exit}
                />
                <Footer delProject={this.delProject} projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
