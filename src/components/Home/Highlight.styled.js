import styled from "react-emotion";
import t from "../../theme";

export const Container = styled("div")`
  margin-top: 0;
`;
export const Columns = styled("div")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${p => (p.reverse ? "column-reverse" : "column")};
  width: 100%;
  ${t.mq.x} {
    flex-direction: row;
  }
`;

export const ImageContainer = styled("div")`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: ${t.s(2)};
  ${t.mq.x} {
    width: 50%;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
  ${t.mq.l} {
    padding-top: 0;
  }
`;

export const ContentWrapper = styled("div")`
  width: 100%;
  padding: 0 50px;
  button {
    margin-top: 20px;
  }
  ${t.mq.x} {
    width: 50%;
  }
`;

export const Content = styled("div")`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  ${t.mq.x} {
    min-height: 600px;
  }
  ${t.mq.xx} {
    min-height: 700px;
    margin-top: 10%;
  }
`;

export const Title = styled("h1")`
  margin-bottom: 1rem;
  font-size: ${t.f(4)};
  ${t.mq.l} {
    font-size: ${t.f(6)};
  }
`;

export const Text = styled("p")`
  margin-bottom: 0.5rem;
  font-size: ${t.f(1)};
  ${t.mq.l} {
    font-size: ${t.f(1)};
  }
  line-height: ${t.s(1.6)};
`;
