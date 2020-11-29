import React, { useContext, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button } from 'antd';
// import useCount from '@/hooks/useCount';
const themes = {
  light: {
    foreground: '#000000',
    background: 'grey',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext(themes.light);

const SubComponent: React.FC = () => {
  const theme = useContext(ThemeContext);
  return <div style={{ width: 100, height: 100, backgroundColor: theme.background }} />;
};

const UseContext: React.FC = () => {
  const [cTheme, setTheme] = useState(themes.dark);
  return (
    <PageContainer>
      <ThemeContext.Provider value={cTheme}>
        <Button onClick={() => setTheme(themes.dark)}>dark</Button>
        <Button onClick={() => setTheme(themes.light)}>light</Button>
        <SubComponent />
      </ThemeContext.Provider>
    </PageContainer>
  );
};

export default UseContext;
