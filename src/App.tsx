import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RankingPage } from './pages/RankingPage';

const AppContainer = styled.div``;

function App() {

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rank" element={<RankingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
