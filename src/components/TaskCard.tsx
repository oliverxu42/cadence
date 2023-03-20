import { useState } from 'react';
import { Task } from '../interfaces/Task';

interface TaskCardProps {
  id: number;
  task: Task;
  deleteTask: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, task, deleteTask }) => {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <>
      <div
        className="container rounded-xl border p-3 my-3 hover:bg-gray-100"
        onMouseEnter={() => setShowIcon(true)}
        onMouseLeave={() => setShowIcon(false)}
      >
        <div className="flex justify-between">
          <p className="font-bold">{task.title}</p>
          {showIcon && (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-red-500 hover:bg-red-100 rounded-full"
                role="button"
                onClick={() => deleteTask(id)}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          )}
        </div>

        <p className="italic">{task.composer}</p>
      </div>
    </>
  );
};

export default TaskCard;
