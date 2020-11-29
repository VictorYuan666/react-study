import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';

const UseEffect: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  // setInterval(() => {
  //   setCount(count + 1);
  // }, 1000);

  // setInterval(() => {
  //   setCount((c) => c + 1);
  // }, 1000);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    // 函数销毁执行
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <PageContainer>
      <div>{count}</div>
    </PageContainer>
  );
};

export default UseEffect;
