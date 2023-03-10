import {
  QRCodeImage,
  DescriptionWrapper,
  Title,
  Description,
  QRCodeWrapper,
  Wrapper,
} from "./QRCode.styled";

export default function QRCode() {
  return (
    <>
      <Wrapper>
        <QRCodeWrapper>
          <QRCodeImage src="image-qr-code.png" />
          <DescriptionWrapper>
            <Title>Improve your front-end skills by building projects</Title>
            <Description>
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </Description>
          </DescriptionWrapper>
        </QRCodeWrapper>
      </Wrapper>
    </>
  );
}
