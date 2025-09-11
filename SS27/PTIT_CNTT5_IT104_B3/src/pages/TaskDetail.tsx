import { useParams, useNavigate } from "react-router-dom"
import { tasks } from "../data/tasks"

export default function TaskDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const task = tasks.find((t) => t.id === Number(id))

  if (!task) {
    return <h2>Công việc không tồn tại.</h2>
  }

  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  )
}
