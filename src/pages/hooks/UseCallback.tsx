import React, { useState, memo, useCallback } from 'react';
import { Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const Expensive: React.FC<{ onClick: () => any; name: string }> = ({ onClick, name }) => {
  console.log('Expensive渲染');
  return <div onClick={onClick}>{name}</div>;
};

const MemoExpensive = memo(Expensive);

const Cheap: React.FC<{ onClick: () => any; name: string }> = ({ onClick, name }) => {
  console.log('cheap渲染');
  return <div onClick={onClick}>{name}</div>;
};

export default function Comp() {
  const [dataA, setDataA] = useState(0);
  const [dataB, setDataB] = useState(0);

  const onClickA = () => {
    setDataA((o) => o + 1);
  };

  const onClickB = useCallback(() => {
    setDataB((o) => o + 1);
  }, []);

  return (
    <PageContainer>
      <Cheap onClick={onClickA} name={`组件Cheap：${dataA}`} />
      <Button onClick={onClickA}>dataA + </Button>
      <MemoExpensive onClick={onClickB} name={`组件Expensive：${dataB}`} />
      <Button onClick={onClickB}>dataB + </Button>
    </PageContainer>
  );
}
