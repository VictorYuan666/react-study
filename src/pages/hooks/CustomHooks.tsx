import React, { useState, useEffect } from 'react';
import { request } from 'umi';
import { Button } from 'antd';
import Mock from 'mockjs';
import { PageContainer } from '@ant-design/pro-layout';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Mock.mock({
          // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          'list|10': [
            {
              'id|+1': 1,
              // 属性 id 是一个自增数，起始值为 1，每次增 1
              name: '@name',
            },
          ],
        }),
      );
    }, 500);
  });
}

function useList(initialUrl: string, initialParams: any) {
  const [list, setList] = useState();
  const [params, setParams] = useState(initialParams);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      if (!loading) {
        return;
      }

      try {
        const result = await getUsername();

        setList(result.list);
      } catch (error) {
        setIsError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, [params, initialUrl, loading]);

  return {
    list,
    loading,
    setLoading,
    isError,
    setParams,
  };
}

const CustomHooks: React.FC = () => {
  // 逻辑与视图的分离更有利于复用
  const { list, loading, setLoading } = useList('http://douban.uieee.com/v2/movie/new_movies', {});

  return (
    <PageContainer>
      <Button loading={loading} onClick={() => setLoading(true)}>
        刷新
      </Button>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <ul>
          {list &&
            list.map((item: any) => {
              return <li key={item.id}>{item.name}</li>;
            })}
        </ul>
      )}
    </PageContainer>
  );
};

export default CustomHooks;
