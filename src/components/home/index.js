import { Component } from "react";
import {
  Heading,
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
  SelectDiv,
  H1,
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
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: "",
      activeEmoji: "380e6284-a454-11ec-b909-0242ac120002",
      activeDate: "",
      activeFilterEmoji: "Very Happy",
      activeFilterDay: "Sun",
      initialMonthsList: props.initialMonthsList,
      count: 0,
    };
  }

  componentDidMount() {
    this.getCurMonth();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.activeFilterEmoji !== this.state.activeFilterEmoji ||
      prevState.activeFilterDay !== this.state.activeFilterDay ||
      prevState.initialMonthsList !== this.state.initialMonthsList
    ) {
      this.showCount();
    }
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

  handleActiveDate = (day) => {
    const { emojisList } = this.props;
    const { activeEmoji, currentMonth, initialMonthsList } = this.state;

    const emojiObj = emojisList.find((emoji) => emoji.id === activeEmoji);

    const selectedMonth = initialMonthsList.filter(
      (monthsList) => monthsList.monthName === currentMonth
    );

    const selectedDate = selectedMonth[0].dates.find(
      (date) => date.date === day.date
    );
    selectedDate.emojiUrl = emojiObj.emojiUrl;
    selectedDate.emojiName = emojiObj.emojiName;

    this.setState({ activeDate: day.date });
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
              <Day
                role="none"
                date
                onClick={(e) => this.handleActiveDate(date)}
              >
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

  showCount = () => {
    const { activeFilterEmoji, activeFilterDay, initialMonthsList } =
      this.state;
    const { daysList } = this.props;
    console.log(activeFilterDay, activeFilterEmoji);

    const filterbyMood = initialMonthsList.flatMap((eachMonth) =>
      eachMonth.dates.filter(
        (eachDate) => eachDate.emojiName === activeFilterEmoji
      )
    );

    this.setState({ count: filterbyMood.length });
  };

  handleActiveEmoji = (e) => {
    const { emojisList } = this.props;
    const emoji = emojisList.filter(
      (emoji) => emoji.emojiName === e.target.value
    );
    this.setState({ activeFilterEmoji: emoji[0].emojiName });
  };

  handleDayChange = (e) => {
    const { daysList } = this.props;
    const day = daysList.filter((day) => day.day === e.target.value);
    this.setState({ activeFilterDay: day[0].day });
  };

  getDropDowns = () => {
    const { emojisList, daysList } = this.props;
    const { count } = this.state;
    return (
      <DayConatiner>
        <SelectDiv>
          <select onChange={this.handleActiveEmoji}>
            {emojisList.map((emoji) => (
              <option value={emoji.emojiName}>{emoji.emojiName}</option>
            ))}
          </select>

          <select onChange={this.handleDayChange}>
            {daysList.map((day) => (
              <option value={day.day}>{day.day}</option>
            ))}
          </select>
        </SelectDiv>
        <H1>{count < 10 ? `0${count}` : count}</H1>
      </DayConatiner>
    );
  };

  render() {
    const { currentMonth } = this.state;
    return (
      <>
        <Heading>Moods in a Month</Heading>
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
