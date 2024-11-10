import { BarChart, XAxis, YAxis, ResponsiveContainer, Bar } from "recharts";
import {
  ReportsMainContainer,
  OverallMood,
  MoodCard,
  MoodImg,
  MonthlyReports,
  MonthlyReportHeading,
} from "./styles";

const { Component } = require("react");

class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMonth: "January",
      data: [
        { mood: "Very Happy", count: 0 },
        { mood: "Happy", count: 0 },
        { mood: "Neutral", count: 0 },
        { mood: "Sad", count: 0 },
        { mood: "Very Sad", count: 0 },
      ],
    };
  }

  getMoodsStats = (updatedMonths, emojiName) => {
    const filterbyMood = updatedMonths?.flatMap((eachMonth) =>
      eachMonth.dates.filter((eachDate) => eachDate.emojiName === emojiName)
    );
    return filterbyMood?.length < 10
      ? `0${filterbyMood?.length}`
      : filterbyMood?.length;
  };

  handleMonth = (e) => {
    this.setState({ activeMonth: e.target.value }, this.getData);
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { activeMonth } = this.state;
    const updatedData = [
      { mood: "Very Happy", count: 0 },
      { mood: "Happy", count: 0 },
      { mood: "Neutral", count: 0 },
      { mood: "Sad", count: 0 },
      { mood: "Very Sad", count: 0 },
    ];

    const { updatedMonths } = this.props;
    const currentMonth = updatedMonths?.find(
      (eachMonth) => eachMonth.monthName === activeMonth
    );

    currentMonth?.dates.forEach((date) => {
      switch (date.emojiName) {
        case "Very Happy":
          updatedData[0].count += 1;
          break;
        case "Happy":
          updatedData[1].count += 1;
          break;
        case "Neutral":
          updatedData[2].count += 1;
          break;
        case "Sad":
          updatedData[3].count += 1;
          break;
        case "Very Sad":
          updatedData[4].count += 1;
          break;
        default:
          break;
      }
    });

    this.setState({ data: updatedData });
  };

  render() {
    const { emojisList, updatedMonths } = this.props;
    const { data } = this.state;

    return (
      <ReportsMainContainer>
        <p>Overall Emoji Report</p>
        <OverallMood>
          {emojisList.map((emoji, index) => (
            <MoodCard key={index}>
              {emoji.emojiName}
              <MoodImg src={emoji.emojiUrl} alt={emoji.emojiName} />
              {this.getMoodsStats(updatedMonths, emoji.emojiName)}
            </MoodCard>
          ))}
        </OverallMood>

        <MonthlyReports>
          <MonthlyReportHeading>
            <p>Monthly Reports</p>
            <select onChange={this.handleMonth} value={this.state.activeMonth}>
              {updatedMonths?.map((eachMonth, index) => (
                <option key={index} value={eachMonth.monthName}>
                  {eachMonth.monthName}
                </option>
              ))}
            </select>
          </MonthlyReportHeading>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              margin={{
                top: 5,
              }}
            >
              <XAxis
                dataKey="mood"
                tick={{
                  stroke: "gray",
                  strokeWidth: 1,
                }}
              />
              <YAxis
                tickFormatter={data[0].count}
                tick={{
                  stroke: "gray",
                  strokeWidth: 0,
                }}
              />
              <Bar
                dataKey="count"
                fill="#ffbe38"
                barSize={50}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </MonthlyReports>
      </ReportsMainContainer>
    );
  }
}

export default Reports;
