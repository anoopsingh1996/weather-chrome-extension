const OPEN_WETHER_API_KEY = '8546afb4c7d7f34c35b4e92c346a3c51';

export interface OpenWeatherData {
    name: string
    main: {
        feels_like: number
        humidity:number
        pressure:number
        temp:number
        temp_max:number
        temp_min:number
    }
    weather: {
        description:string
        icon:string
        id:number
        main:string
    }[]
    wind: {
        deg:number
        speed:number
    }
}

export async function fetchOpenWeatherData(city: string): Promise<OpenWeatherData> {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WETHER_API_KEY}`)

    if(!res.ok) {
        throw new Error('City not found');
    }

    const data: OpenWeatherData = await res.json();
    return data;
}