import styled  from "styled-components";

const buttonStyles = `
  color: white;
  font-size: 16px;
  border-radius: 8px;
  letter-spacing: 0.1rem;
  :hover {
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.5);
  }
`;

const CenterAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled(CenterAlign)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled(CenterAlign)`
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  padding-bottom: 20px;
  margin-right: 20px;
  video {
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  width: 150px;
  margin-top: 20px;
  padding: 15px 0;
  border: 0;
  background: black;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  ${({ disable }) => {
    const cursor = disable ? "not-allowed" : "pointer";
    const background = disable ? "#e2e2e2" : "black";
    return `
        cursor:${cursor};
        background:${background};
      `;
  }}
  ${buttonStyles};
`;

export const Canvas = styled.canvas`
  display: none;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Title = styled.div`
  font-size: 24px;
  margin: 20px 0;
  letter-spacing: 0.1rem;
`;

export const Download = styled.a`
  text-decoration: none;
  padding: 15px 40px;
  margin-left: 20px;
  height: max-content;
  background: black;
  cursor: pointer;
  ${buttonStyles}
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-end;
`;
