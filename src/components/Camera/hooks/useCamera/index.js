import { useState, useEffect, useRef } from "react";

const useCamera = () => {
  let videoRef = useRef();
  let canvasRef = useRef();

  const [image, setImage] = useState("");

  useEffect(() => {
    startCamera();
  }, []);

  const startCamera = async () => {
    try {
      let stream = await navigator.mediaDevices.getUserMedia({
        video: true
      });

      videoRef.current.srcObject = stream;
    } catch (err) {
      console.log("Failed: To start the camera!", err);
    }
  };

  const stopCam = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => {
      track.stop();
    });
  };

  const takePicture = async () => {
    // Get the size of the video element.
    const width = videoRef?.current?.videoWidth;
    const height = videoRef?.current?.videoHeight;

    // get the context object of hidden canvas
    const ctx = canvasRef.current.getContext("2d");

    // set canvas dimensions as that of video
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    // draw the current frame from the video on the canvas.
    ctx.drawImage(videoRef?.current, 0, 0, width, height);

    // Get an image dataURL from the canvas.
    const imageDataURL = canvasRef?.current.toDataURL("image/png");
    stopCam();

    setImage(imageDataURL);
  };

  const retake = () => {
    setImage("");
    startCamera();
  };

  return { takePicture, retake, image, ref: { canvasRef, videoRef } };
};

export default useCamera;
