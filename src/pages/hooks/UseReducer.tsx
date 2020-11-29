import React, { Reducer, useReducer } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';

const UseReducer: React.FC = () => {
  // const [count, setCount] = useState<number>(0);
  const [count, dispatch] = useReducer<Reducer<number, string>>((state: number, action: string) => {
    switch (action) {
      case 'increase':
        return state + 1;
      case 'decrease':
        return state - 1;
      case 'reset':
        return 0;
      default:
        throw new Error('error');
    }
  }, 0);

  function decrease() {
    dispatch('decrease');
  }

  function increase() {
    dispatch('increase');
  }

  function reset() {
    dispatch('reset');
  }

  return (
    <PageContainer>
      <div>{count}</div>

      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
      <Button onClick={reset}>reset</Button>
    </PageContainer>
  );
};

export default UseReducer;
