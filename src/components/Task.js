const Task = ({ task }) => {
  return (
    <div claddName='task'>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      
    </div>
  )
}

export default Task
