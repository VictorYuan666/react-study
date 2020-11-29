import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Spin, Typography } from 'antd';
import { useCountDown, useMount, useRequest, useSetState, useThrottleFn, useUnmount } from 'ahooks';
import Mock from 'mockjs';
import { createModel } from 'hox';

const { Title, Text } = Typography;

function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue ?? 0);
  const decrement = () => setCount(count - 1);
  const increment = () => setCount(count + 1);
  return {
    count,
    decrement,
    increment,
  };
}

const useCounterModel = createModel(useCounter);

interface State {
  name: string;
  [key: string]: any;
}

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 500);
  });
}

const UsefulExample: React.FC = () => {
  const [state, setState] = useSetState<State>({ name: '' });

  const [countdown, setTargetDate] = useCountDown();

  const { data, loading, refresh } = useRequest(getUsername);

  const [value, setValue] = useState(0);

  const { run } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    { wait: 500 },
  );

  useMount(() => {});
  useUnmount(() => {});

  const counter = useCounterModel();

  // @ts-ignore
  // @ts-ignore
  return (
    <PageContainer>
      <Card>
        <Title>useSetState</Title>
        <pre>{JSON.stringify(state, null, 2)}</pre>
        <Button onClick={() => setState({ name: 'jack ma' })}>设置名称</Button>
        <Button onClick={() => setState({ age: 1 })}>设置年龄</Button>
        {state.age && (
          <Button onClick={() => setState((prev) => ({ age: prev.age + 1 }))}>年龄+1</Button>
        )}
      </Card>

      <Card>
        <Title>useThrottleFn</Title>
        <Text style={{ marginTop: 16 }}> Clicked count: {value} </Text>
        <Button onClick={run}>Click fast!</Button>
      </Card>

      <Card>
        <Title>useRequest</Title>
        <Button onClick={refresh}>refresh</Button>
        {loading ? <Spin /> : <Text>username: {data}</Text>}
      </Card>
      <Card>
        <Title>useCountDown</Title>
        <Button disabled={!!countdown} onClick={() => setTargetDate(Date.now() + 5000)}>
          {countdown === 0 ? '获取验证码' : `${Math.round(countdown / 1000)}s后重试`}
        </Button>
      </Card>
      <Card>
        <Title> 下一代 React 状态管理器 hox</Title>
        <Text>{counter.count}</Text>
        <br />
        <Text>只读模式：{useCounterModel.data?.count}</Text>
        <br />
        <Button onClick={() => counter.increment()}>+</Button>
        <Button onClick={() => counter.decrement()}>-</Button>
      </Card>
    </PageContainer>
  );
};

export default UsefulExample;
