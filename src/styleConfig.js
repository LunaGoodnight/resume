import styled from "styled-components";

export const A4Wrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  background: #fff;
  padding: 3rem 6rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  font-size: 1.7rem;
`;

export const Body = styled.div`
  background: thistle;
  display: flex;
  justify-content: center;
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(3rem + 2vmin);
  color: teal;
`;

export const PersonInfoBlock = styled.div`
  display: flex;
  gap: 2rem;

  img {
    width: 100%;
  }
`;

export const PersonImage = styled.div`
  width: 16.9rem;
`;

export const Link = styled.a`
  color: dodgerblue;
  cursor: pointer;
`;

export const InfoDetail = styled.ul`
  text-align: left;
  list-style: none;
  font-size: calc(1rem + 1vmin);
  li {
    padding-bottom: 2rem;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

export const Title = styled.h3`
  color: teal;
  font-size: 2.2rem;
  padding-bottom: 1rem;
`;

export const List = styled.ul`
  list-style-position: inside;
`;

export const WorkDetailItem = styled.ul`
  list-style-position: inside;
`;

export const CompanyTitle = styled.h4`
  font-weight: bold;
`;

export const SkillList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 50%;
  }
`;

export const BookList = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  li {
    width: 13rem;
    height: 17rem;
    overflow: hidden;
    img {
      height: 100%;
    }
  }
`;
