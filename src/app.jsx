import { useEffect, useState } from 'react';
import './App.css';
import useHasMounted from './hooks/useHasMounted';
import useWindowWidth from './hooks/useWindowWidth';

function App() {
  const width = useWindowWidth();
  const hasMountedFromHooks = useHasMounted();

  console.log(hasMountedFromHooks, 'hasMountedFromHooks')
  
  const [state, setState] = useState(0);
  console.log(state, 'state')
  const upCount = () => {
    setState(state + 1)
  }


  // 최초 랜더시 componentDidMount & componentDidUpdate by count 실행 된다.
  // 버튼 클릭시 useEffect()에서 return해주는 부분이 실행이 되고 'cleanup by count'
  // componentDidMount & componentDidUpdate by count가 실행된다.
  useEffect(() => {
    console.log('componentDidMount & componentDidUpdate by count', state)

    return () => {
      // cleanup
      console.log('cleanup by count', state)
    }
  }, [state]);

  return (
    <div>
      <p>{state}</p> 
      <button onClick={upCount}>click</button>
      <div>{width}</div>
    </div>
  );
}

export default App;
