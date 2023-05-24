import styled, { keyframes } from "styled-components";

import jazzBarMp4 from "/src/assets/videos/jazz-bar.mp4";
import jazzBarWebm from "/src/assets/videos/jazz-bar.webm";
import Drink from "./components/Drink";
import Shaker, { ShakerSvg } from "./components/Shaker";

import { useRandomDrink } from "./hooks/useCocktail";

function App() {
  const { execute, status, value, error } = useRandomDrink();

  if (status === "error") {
    throw new Error(error == null ? "Unknown Error" : error);
  }

  return (
    <Wrapper>
      <BgVideo>
        <video autoPlay loop muted playsInline>
          <source src={jazzBarMp4} type="video/mp4" />
          <source src={jazzBarWebm} type="video/webm" />
        </video>
      </BgVideo>
      <MaxWidthWrapper>
        <Header>
          <Logo href="/">Sip 'n' Shake</Logo>
          <RightActions>
            <ShakerWrapper>
              <Shaker
                status={status === "success" ? "show" : "hide"}
                handleClick={() => execute()}
              />
            </ShakerWrapper>
          </RightActions>
        </Header>
        <Main>
          {status === "success" && value !== null ? (
            <Drink data={value} />
          ) : (
            <LoadingWrapper>
              <ShakerSvg />
            </LoadingWrapper>
          )}
        </Main>
      </MaxWidthWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100%;
  position: relative;
  padding-bottom: 32px;
`;

const BgVideo = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--color-primary-1);

  & > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 20% 50%;
    opacity: 0.15;
  }
`;

const MaxWidthWrapper = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
  margin-bottom: 32px;
`;

const Logo = styled.a`
  color: var(--color-primary-11);
  font-size: calc(24rem / 16);
  font-weight: var(--weight-medium);
  text-decoration: none;
`;

const RightActions = styled.div``;

const ShakerWrapper = styled.div``;

const Main = styled.main``;

const shake = keyframes`
 0% {
   transform: rotate(0deg);
 }
 50% {
   transform: rotate(-15deg);
 }
 100% {
   transform: rotate(0deg);
 }
`;

const LoadingWrapper = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  inset: 0;
  margin: auto;

  transform-origin: -50% -50%;
  animation: ${shake} 300ms infinite alternate;
`;

export default App;
