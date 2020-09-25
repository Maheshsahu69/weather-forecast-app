import React from "react";
import "./App.css";
import WeatherBody from "./components/WeatherBody";
import weather from "./api/Api";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: [],
      city: null,
      isLoaded: false,
    };
  }
  // componentDidUpdate() {
  //   WeatherBody.length(
  //     `hourly?city=${this.state.city}&key=3883f69ab25f46dc92cdf2b5d66a1517&hours`
  //   );
  // }
  searchCity = async (city) => {
    await weather
      .get(`daily?city=${city}&key=3883f69ab25f46dc92cdf2b5d66a1517`)
      .then((res) => {
        const temp = res.data.data;
        const city = res.data.city_name;

        this.setState({
          temp,
          city,
          isLoaded: true,
        });
      });
  };
  render() {
    // Method

    const minTemp = this.state.temp.map((el) => {
      return parseInt(el.low_temp);
    });
    const maxTemp = this.state.temp.map((el) => {
      return parseInt(el.max_temp);
    });

    const icon = this.state.temp.map((el) => {
      return el.weather.code;
    });

    const description = this.state.temp.map((el) => {
      return el.weather.description;
    });
    return (
      <div className="App">
        <React.Fragment>
          <SearchBar city={this.state.city} searchCity={this.searchCity} />
        </React.Fragment>
        <div className="weatherContainer pt-3  pb-3">
          <WeatherBody
            day={"Mon"}
            icon={icon[0]}
            minTemp={minTemp[0]}
            maxTemp={maxTemp[0]}
            description={description[0]}
          />
          <WeatherBody
            day={"Tue"}
            icon={icon[1]}
            minTemp={minTemp[1]}
            maxTemp={maxTemp[1]}
            description={description[1]}
          />
          <WeatherBody
            day={"Wed"}
            icon={icon[2]}
            minTemp={minTemp[2]}
            maxTemp={maxTemp[2]}
            description={description[2]}
          />
          <WeatherBody
            day={"Thu"}
            icon={icon[3]}
            minTemp={minTemp[3]}
            maxTemp={maxTemp[3]}
            description={description[3]}
          />
          <WeatherBody
            day={"Fri"}
            icon={icon[4]}
            minTemp={minTemp[4]}
            maxTemp={maxTemp[4]}
            description={description[4]}
          />
        </div>
      </div>
    );
  }
}

export default App;
