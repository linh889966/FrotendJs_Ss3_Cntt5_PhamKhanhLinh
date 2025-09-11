import { Link } from "react-router-dom"
import { tasks } from "../data/tasks"

export default function TaskList() {
  return (
    <div>
      <h2>Danh sách công việc</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Link to={`/task/${task.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
