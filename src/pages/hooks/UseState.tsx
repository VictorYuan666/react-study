import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
// import useCount from '@/hooks/useCount';

const UseState: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  function decrease() {
    setCount(count - 1);
  }

  function increase() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  // const { count, increase, decrease, reset } = useCount();

  return (
    <PageContainer>
      <div>{count}</div>

      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
      <Button onClick={reset}>reset</Button>
    </PageContainer>
  );
};

export default UseState;
