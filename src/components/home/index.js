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
  LargeEmoji,
  EmojiCard,
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
    activeEmoji: "380e6284-a454-11ec-b909-0242ac120002",
    activeDay: "",
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

  setActiveEmoji = (id) => {
    this.setState({ activeEmoji: id });
  };

  getMoodEmojis = () => {
    const { emojisList } = this.props;
    const { activeEmoji } = this.state;
    return (
      <EmojiConatiner>
        {emojisList.map((emoji) => (
          <EmojiCard>
            {emoji.emojiName}
            <LargeEmoji
              active={emoji.id === activeEmoji}
              src={emoji.emojiUrl}
              alt={emoji.emojiName}
              onClick={() => this.setActiveEmoji(emoji.id)}
            />
          </EmojiCard>
        ))}
      </EmojiConatiner>
    );
  };

  handleactiveEmoji = (e) => {
    const { emojisList } = this.props;
    const emoji = emojisList.filter(
      (emoji) => emoji.emojiName === e.target.value
    );
    this.setState({ activeEmoji: emoji[0].id });
  };

  handleDayChange = (e) => {
    const { daysList } = this.props;
    const day = daysList.filter((day) => day.day === e.target.value);
    this.setState({ activeDay: day[0].day });
  };

  getDropDowns = () => {
    const { emojisList, daysList } = this.props;
    return (
      <DayConatiner>
        <select onChange={this.handleactiveEmoji}>
          {emojisList.map((emoji) => (
            <option value={emoji.emojiName}>{emoji.emojiName}</option>
          ))}
        </select>

        <select onChange={this.handleDayChange}>
          {daysList.map((day) => (
            <option value={day.day}>{day.day}</option>
          ))}
        </select>
      </DayConatiner>
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
            {this.getMoodEmojis()}
            {this.getDropDowns()}
          </ChildContainer>
        </MainHomeConatiner>
      </>
    );
  }
}

export default Home;
