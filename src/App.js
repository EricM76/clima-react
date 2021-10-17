import React, { Component } from "react";
import Card from './Card';
import "./App.css";
import Top from "./Top";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: {},
      forecast: [],
      location: {},
      isLoaded: false,
    }
  }

 

  async componentDidMount() {
    try {
      let response = await fetch(`

      https://api.weatherbit.io/v2.0/forecast/daily?country=argentina&lang=es&city=Buenos+Aires&key=85646c15983f476390bd69fe92455431&days=7
      
      `)
      let result = await response.json();
      console.log(result)
      const current = result.data.shift(); //el día actual
      const forecast = result.data; //los días siguientes (por defecto 6)

      const location = {
        city_name: result.city_name,
        country_code: result.country_code,
        state_code: result.state_code,
      }
      this.setState(
        {
          current,
          forecast,
          location,
          isLoaded: true
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  render() {

    const { current, forecast, location, isLoaded } = this.state;

    return isLoaded ? (
      <div className="App">
        <div className="container">
         <Top
          current = {current}
          location = {location}
         />
          <div className="bottom">
            {
              forecast.map((dia, i) => {
                return (
                  <Card
                    key={i}
                    fecha = {dia.valid_date}
                    tempMax = {parseInt(dia.max_temp)}
                    tempMin = {parseInt(dia.min_temp)}
                    icon = {dia.weather.icon}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    ) : (
      <div className="">
        Cargando...
      </div>
    )
  }
}

export default App;
