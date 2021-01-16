import "./Task.scss";

export default function Task(props) {
    const {
        index,
        id,
        title,
        saveTextarea,
        read,
        dis,
        defaultValue,
        currentTask,
        exit
    } = props;

    const isSelected = currentTask === id;

    return (
        <div
            className={`Task shadow-lg ${isSelected ? 'selectedTask container': ''}`} data-index={index}
            onClick={(event) => props.selectTask(event, id)}
        >
            <div className='Task-title'>
                <h2>{title}</h2>
            </div>
            <p
                className={`Task-exit ${isSelected ? '': 'none'}`}
                onClick={exit}
            >EXIT</p>
            <div className='Task-text'>
                <textarea
                    onChange={saveTextarea}
                    readOnly={read}
                    disabled={dis}
                    value={defaultValue}
                    cols='300'
                    rows='100'
                />
            </div>
        </div>
    );
}
