import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { lightTheme } from './components/theme';

import About from './components/About';
import Header from './components/Header';
import InfoPage from './components/InfoPage';
import Projects from './components/Projects';
import Resume from './components/Resume';
import TitlePage from './components/TitlePage';

function App() {
  const name = 'Yong Le He';
  const labels = ['About', 'Projects', 'CV'];
  const pages = [About, Projects, Resume];

  const projects = [
    {
      name: 'ChatApp',
      description: 'A cool app',
      link: 'https://github.com/yong1le/chatapp'
    },
    {
      name: 'Food Centre Website',
      description: '',
      link: ''
    },
    {
      name: 'Battery Prediction',
      description: '',
      link: ''
    }
  ]

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Header name={name} />
        <TitlePage name={name} />
        <InfoPage labels={labels} pages={pages} projects={projects} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
