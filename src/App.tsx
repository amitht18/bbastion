import { useAppSelector } from './app/hooks';
import HOC from './app/utils/hoc';
import PostsList from './features/posts/post-list';
import { selectIsLoading } from './features/posts/posts.selector';

const NF = HOC(PostsList);

function App() {
  const isLoading: boolean = useAppSelector(selectIsLoading)
  return (
    <NF {...isLoading} />
  );
}

export default App;
