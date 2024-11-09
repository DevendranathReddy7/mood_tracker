import { Component } from "react";
import {
  CalenderBody,
  CalenderConatiner,
  CalenderHeading,
  ChildContainer,
  DayConatiner,
  EmojiConatiner,
  MainHomeConatiner,
  Li,
  Day,
  SmallEmoji,
} from "./styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

class Home extends Component {
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  state = {
    currentMonth: "",
  };
  componentDidMount() {
    this.getCurMonth();
  }

  getCurMonth() {
    const date = new Date();
    const curMonth = date.getMonth();
    const currentMonth = this.months[curMonth];
    this.setState({ currentMonth });
  }

  prevMonth = () => {
    const { currentMonth } = this.state;
    const updateMonth = this.months.indexOf(currentMonth) - 1;
    if (updateMonth >= 0) {
      this.setState({ currentMonth: this.months[updateMonth] });
    }
  };

  nextMonth = () => {
    const { currentMonth } = this.state;
    const updateMonth = this.months.indexOf(currentMonth) + 1;
    if (updateMonth <= 11) {
      this.setState({ currentMonth: this.months[updateMonth] });
    }
  };

  getCalender = (currentMonth) => {
    const curMonthIndex = this.months.indexOf(currentMonth);
    const { daysList, initialMonthsList } = this.props;
    return (
      <CalenderConatiner>
        <CalenderHeading>
          <FaAngleLeft onClick={this.prevMonth}></FaAngleLeft>
          {currentMonth}
          <FaAngleRight onClick={this.nextMonth}></FaAngleRight>
        </CalenderHeading>

        <CalenderBody>
          {daysList.map((day) => (
            <Li key={day.id}>
              <Day role="none">{day.day}</Day>
            </Li>
          ))}

          {initialMonthsList[curMonthIndex]?.dates.map((date) => (
            <Li key={date.id}>
              <Day role="none" date>
                {date.date}
                {date.emojiUrl && (
                  <SmallEmoji src={date.emojiUrl} alt="emoji" />
                )}
              </Day>
            </Li>
          ))}
        </CalenderBody>
      </CalenderConatiner>
    );
  };

  render() {
    const { currentMonth } = this.state;
    return (
      <>
        <h1>Moods in a Month</h1>
        <MainHomeConatiner>
          {this.getCalender(currentMonth)}

          <ChildContainer>
            <EmojiConatiner></EmojiConatiner>
            <DayConatiner></DayConatiner>
          </ChildContainer>
        </MainHomeConatiner>
      </>
    );
  }
}

export default Home;
