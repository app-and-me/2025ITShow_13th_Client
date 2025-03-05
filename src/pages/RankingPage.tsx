import { getUserRank } from '../util/api/user';
import { User } from '../util/types/UserType';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import backgroundImg from '/assets/imgs/rank_background.png';
import theme from '../styles/theme';

const Conatiner = styled.div`
  background-image: url(${backgroundImg}); 
  background-size: cover;
  background-repeat: no-repeat;
  
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding-top: 5%;
`;

const TitleDiv = styled.div`
  background: rgba(45, 45, 45, 0.50);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 0.8% 10%;
`;

const DataDiv = styled.div`
  background: rgba(254, 235, 243, 0.10);
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 0.8% 10%;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const Text = styled.span<{ color?: string, fontSize?: string }>`
  color: ${(props) => props.color || 'white'};
  text-align: center;

  font-family: 'Pretendard';
  font-size: ${(props) => props.fontSize || '1.5rem'};
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.072px;
`;

export const RankingPage = () => {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserRank = async () => {
      const userData = await getUserRank('DESC');
      setUser(userData);
    };

    fetchUserRank();
  }, []);

  return (
    <Conatiner>
      <TitleDiv>
        <DataContainer>
          <Text>순위</Text>
          <Text>닉네임</Text>
        </DataContainer>
        <DataContainer>
          <Text>업종</Text>
          <Text>점수</Text>
          <Text>시간</Text>
        </DataContainer>
      </TitleDiv>
      {user.map((user) => (
        <DataDiv key={user.nickname}>
          <DataContainer>
            <Text color={theme.gray.bg100} fontSize='1.75rem'>{user.nickname}</Text>
          </DataContainer>
          <DataContainer>
            <Text color={theme.gray.bg100}>{user.job}</Text>
            <Text color={theme.gray.bg100}>{user.score}</Text>
            <Text color={theme.gray.textDa500}>{user.time}</Text>
          </DataContainer>
        </DataDiv>
      ))}
    </Conatiner>
  );
}