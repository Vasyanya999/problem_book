import "./Header.scss";

export default function Header(props) {
  let header = "";
  if (props.chekSelectTask) {
    header = (
      <header className='Header container p-3'>
        <div className='Header-name'>
          <h1 className='Header-name-text'>Problem Book</h1>
          <i
            className='Header-name-icon fa fa-line-chart'
            aria-hidden='true'
          />
        </div>
        <div className='Header-delTask' onClick={props.delTask}>
          <p className='Header-delTask-textP'>Delete Task </p>
          <i className="Header-delTask-icon fa fa-trash" aria-hidden="true" />
        </div>
      </header>
    );
  } else {
    header = (
      <header className='Header container p-3'>
        <div className='Header-name'>
          <h1 className='Header-name-text'>Problem Book</h1>
          <i
            className='Header-name-icon fa fa-line-chart'
            aria-hidden='true'
          />
        </div>
        <div className='Header-newTask' onClick={props.addTask}>
          <p className='Header-newTask-textP'>New Task </p>
          <i
            className='Header-newTask-icon fa fa-file-text-o'
            aria-hidden='true'
          />
        </div>
      </header>
    );
  }
  return (
    <>
    {header}
    </>
  );
}
