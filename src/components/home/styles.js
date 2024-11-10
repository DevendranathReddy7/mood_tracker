import styled from "styled-components";

export const Heading = styled.h1`
  color: #ffbe38;
  text-align: center;
`;

export const MainHomeConatiner = styled.div`
  display: flex;
  margin: 8px 24px;
`;

export const CalenderConatiner = styled.div`
  background: linear-gradient(
    142.42deg,
    rgba(114, 104, 117, 0.21) 1.79%,
    rgba(117, 116, 117, 0) 100.42%
  );
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
  text-align: center;
  border-radius: 5px;
  background-color: #1c1a28;
  padding: 3px 0px;
  align-items: center;
`;

export const SmallEmoji = styled.img`
  width: 15px;
`;

export const ChildContainer = styled.div`
  width: 30%;
  margin-left: 50px;
`;

export const EmojiConatiner = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: linear-gradient(
    142.42deg,
    rgba(114, 104, 117, 0.21) 1.79%,
    rgba(117, 116, 117, 0) 100.42%
  );
  align-items: center;
  padding: 30px 10px;
  border-radius: 3px;
`;

export const EmojiCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const LargeEmoji = styled.img`
  width: ${(props) => (props.active ? "30px" : "20px")};
`;

export const DayConatiner = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  background: linear-gradient(
    142.42deg,
    rgba(114, 104, 117, 0.21) 1.79%,
    rgba(117, 116, 117, 0) 100.42%
  );
  padding: 10px 10px 42px 10px;
  border-radius: 3px;
  margin-top: 8px;
`;

export const SelectDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const H1 = styled.h1`
  text-align: center;
`;
