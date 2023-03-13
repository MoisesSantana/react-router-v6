import styled from "styled-components";

export const PageContainer = styled.div`
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  height: 100%;

  h1 {
    padding-top: 2rem;
  }

  .home_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .page_content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    height: 100%;
    overflow-y: auto;
    width: 100%;
    padding: 4rem 0;
    margin-bottom: 4rem;
  }
`

export const Card = styled.section`
  min-height: 10rem;
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border: 1px solid #d400ff4d;
  box-shadow: 0px 0px 2px #d400ff;
  border-radius: 3px;
  cursor: pointer;
  gap: 1.2rem;

  span:first-child {
    font-weight: 900;
    text-shadow: 1px 1px 1px #000000;
  }
`