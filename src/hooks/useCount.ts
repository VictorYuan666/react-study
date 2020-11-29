import { useState } from 'react';

function useCount() {
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

  return {
    count,
    increase,
    decrease,
    reset,
  };
}

export default useCount;
