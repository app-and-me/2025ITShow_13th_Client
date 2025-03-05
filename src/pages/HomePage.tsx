import { styled } from "styled-components";
import backgroundImg from "/assets/imgs/background.png";
import theme from "../styles/theme";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-image: url(${backgroundImg}); 
  background-size: cover;
  background-repeat: no-repeat;
  
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  padding-bottom: 10%;
  padding-top: 10%;
`;

const Title = styled.img`
  width: 60%;
  height: auto;
`;

const Button = styled.button`
  color: ${theme.gray.bg100};
  text-align: center;

  font-family: 'Pretendard';
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  letter-spacing: -0.0053rem;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 0 10%;

  gap: 3.125rem
`

export const HomePage = () => {
  console.log(theme.gray.bg100);
  const navigate = useNavigate();

  return (
    <Container>
      <Title src="/assets/imgs/title.png" />
      <ButtonContainer>
        <Button onClick={() => navigate('/rank')}>랭킹 보기</Button>
        <Button>클릭해서 시작하기</Button>
      </ButtonContainer>
    </Container>
  );
}