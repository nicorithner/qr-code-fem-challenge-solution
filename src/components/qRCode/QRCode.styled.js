import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: hsl(212, 45%, 89%);
  text-align: center;
  padding: 2rem;
`;

export const QRCodeTitle = styled.h1`
  color: hsl(218, 44%, 22%);
  font-weight: 800;
  font-size: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

export const QRCodeWrapper = styled.figure`
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
  border-radius: 20px;
  height: 497px;
  width: 320px;
  padding: 1rem 1rem 2.5rem 1rem;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
`;

export const QRCodeImage = styled.img`
  height: 288px;
  width: 288px;
  border-radius: 20px;
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  height: 129px;
  width: 288px;
  text-align: center;
  margin-top: 1.5rem;
`;

export const Title = styled.h2`
  color: hsl(218, 44%, 22%);
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
  text-align: center;
`;

export const Description = styled.p`
  color: hsl(220, 15%, 55%);
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.1875px;
  position: absolute;
  height: 57px;
  left: 5.56%;
  right: 5.56%;
  top: calc(50% - 57px / 2 + 36px);
`;
