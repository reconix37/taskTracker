import type { Filter } from '@/types/Types';
import { Button } from '../components/ui/button'

interface TaskFiltersProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export default function TaskFilters({ filter, setFilter }: TaskFiltersProps) {
  return (
    <div className='filter-buttons flex justify-center gap-4 mt-6'>
            <Button onClick={() => setFilter('All')} variant={filter === 'All' ? 'default' : 'outline'}>All</Button>
            <Button onClick={() => setFilter('active')} variant={filter === 'active' ? 'default' : 'outline'}>Active</Button>
            <Button onClick={() => setFilter('completed')} variant={filter === 'completed' ? 'default' : 'outline'}>Completed</Button>
    </div>
  )
}