import { Task } from '../interfaces/Task';
import AddModal from './AddModal';
import TaskCard from './TaskCard';

interface TaskContainerProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskContainer: React.FC<TaskContainerProps> = ({ tasks, setTasks }) => {
  const deleteTask = (id: number) => {
    console.log(id);
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  return (
    <div className="container w-2/4 mt-10 p-5 mx-auto rounded border">
      <h2 className="font-bold mb-1">What I'm working on...</h2>
      <hr className="mb-5" />
      <div className="flex-col content-center">
        {tasks.map((t) => (
          <TaskCard id={t.id} key={t.id} task={t} deleteTask={deleteTask} />
        ))}
      </div>
      <AddModal tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default TaskContainer;
