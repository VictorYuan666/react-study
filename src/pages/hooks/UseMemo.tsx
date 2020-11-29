import React, { useMemo, useState } from 'react';
import { InputNumber } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const UseMemo: React.FC = () => {
  const [num, setNum] = useState(1);

  const factorialNum = useMemo(() => {
    return factorial(num);
  }, [num]);

  function factorial(n: number): number {
    if (!n) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  return (
    <PageContainer>
      <InputNumber
        autoFocus
        placeholder="请输入您要计算的数"
        min={1}
        step={1}
        value={num}
        onChange={(v) => setNum(v)}
      />
      <span>
        {num}的阶乘：{factorialNum}
      </span>
    </PageContainer>
  );
};

export default UseMemo;
