
export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export type Filter = 'All' | 'active' | 'completed';

export type TaskList = Task[];