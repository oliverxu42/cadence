import { useState } from 'react';

import TaskContainer from './components/TaskContainer';
import { Task } from './interfaces/Task';

function App() {
  const data: Task[] = [
    { id: 0, title: 'Piano Concerto No. 2 in C minor, Op. 18', composer: 'Sergei Rachmaninoff' },
    { id: 1, title: 'Prelude in C# Minor, Op. 3 No 1.', composer: 'Sergei Rachmaninoff' },
    { id: 2, title: 'Nocturne in C# Minor', composer: 'Frederic Chopin' },
  ];

  const [tasks, setTasks] = useState<Task[]>(data);

  return <TaskContainer tasks={tasks} setTasks={setTasks} />;
}

export default App;
