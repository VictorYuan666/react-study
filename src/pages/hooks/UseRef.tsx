import { PageContainer } from '@ant-design/pro-layout';
import React, { useRef, useState, forwardRef, useEffect } from 'react';

const MyInput = forwardRef((props, ref: any) => {
  return (
    <div>
      <h1>这是自定义input组件</h1>
      <input type="text" ref={ref} {...props} />
    </div>
  );
});

const UseRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const myInputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<any>();
  const [count, setCount] = useState(0);

  const focusTextInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const focusMyInput = () => {
    if (myInputRef.current) {
      myInputRef.current.focus();
    }
  };

  useEffect(() => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <PageContainer>
      <input type="text" ref={inputRef} />
      <button onClick={focusTextInput}>获得input焦点</button>
      <br />
      <br />
      <MyInput ref={myInputRef} />
      <button onClick={focusMyInput}>获得myInput焦点</button>
      <br />
      <br />
      <h1>useRef也可以用作实例变量{count}</h1>
    </PageContainer>
  );
};

export default UseRef;
