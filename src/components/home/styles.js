import styled from "styled-components";

export const MainHomeConatiner = styled.div`
  display: flex;
  margin: 8px 24px;
`;

export const CalenderConatiner = styled.div`
  background-color: lightgrey;
  width: 60%;
  align-items: center;
  padding: 10px;
  border-radius: 3px;
`;

export const CalenderHeading = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const CalenderBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 8px 0px 0px 20px;
  gap: 10px;
`;

export const Li = styled.li`
  list-style-type: none;
  align-content: center;
`;

export const Day = styled.div`
  border: ${(props) => (props.date ? "1px solid black" : "1px solid black")};
  text-align: center;
  border-radius: 5px;
`;

export const SmallEmoji = styled.img`
  width: 15px;
`;
export const ChildContainer = styled.div``;

export const EmojiConatiner = styled.div``;

export const DayConatiner = styled.div``;
