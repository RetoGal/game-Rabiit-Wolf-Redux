import styled from "styled-components"

export const DivСellСharacter = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ff6d419d;
  margin: 1px;
`

export const DivGameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #ffdafa;
  border-radius: 30px;
  padding: 20px;
  width: ${(props) => props.matrix.length * 70 + 20 + "px"};
`
