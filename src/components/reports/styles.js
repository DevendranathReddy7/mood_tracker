import styled from "styled-components";

export const ReportsMainContainer = styled.div`
  margin: 0px 16px;
`;

export const OverallMood = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const MoodCard = styled.div`
  background: linear-gradient(
    142.42deg,
    rgba(114, 104, 117, 0.21) 1.79%,
    rgba(117, 116, 117, 0) 100.42%
  );
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-width: 80px;
  margin-bottom: 10px;
`;

export const MoodImg = styled.img`
  width: 30px;
`;

export const MonthlyReports = styled.div``;

export const MonthlyReportHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
