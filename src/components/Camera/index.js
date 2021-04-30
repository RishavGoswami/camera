import React from "react";
import useCamera from "./hooks/useCamera";

import {
  Container,
  Button,
  Wrapper,
  Canvas,
  Image,
  Download,
  Title,
  Row,
} from "./styles.js";

const Camera = () => {
  const {
    takePicture,
    retake,
    image,
    ref: { canvasRef, videoRef },
  } = useCamera();

  const camera = (
    <Wrapper>
      <video width="100%" height="100%" autoPlay ref={videoRef} />
      <Button onClick={takePicture} disable={image}>
        take photo
      </Button>
    </Wrapper>
  );

  const imageClicked = image !== "" && (
    <Wrapper>
      <Image src={image} alt="webcam-shot" />
      <Row>
        <Button onClick={retake}>re-take</Button>
        <Download href={image} download="photo.png">
          download
        </Download>
      </Row>
    </Wrapper>
  );

  return (
    <Container>
      <Title>Take a picture and download it.</Title>
      <Row>
        {camera}
        <Canvas ref={canvasRef} />
        {imageClicked}
      </Row>
    </Container>
  );
};

export default Camera;
