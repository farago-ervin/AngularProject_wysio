import { WeatherComponent } from "../components/weather/weather.component"

export interface Weather {
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }],

      "base": string,
      "main": {
        "temp":number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number,
      },

    "name": string
    "id": number


    }
