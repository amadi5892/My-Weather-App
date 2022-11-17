import './card.styles.css';

const Card = ({data}) => {
    const {name} = data;
    console.log(data)
    // 80&#8457;
    return(
        <div className='card-container' >
            <div className="card-weather-container">
                <h2 className='location'> {name} </h2>
                {data.main ?  <span className='temperature' > {Math.ceil((data.main.temp - 273.15)*(9/5)+32)}&#8457; </span> : null }
                {data.weather ? <h4 className='description' > {data.weather[0].description} </h4> : null}
                <div className='sub-container' >
                    <div>
                        {data.main ? <span className='sub-temperature' >{Math.ceil((data.main.temp_max - 273.15)*(9/5)+32)}&#8457;</span> : null }
                        <p className='sub-description' >High</p>
                    </div>
                    <div>
                    {data.main ? <span className='sub-temperature' >{Math.ceil((data.main.temp_min - 273.15)*(9/5)+32)}&#8457;</span> : null }
                        <p className='sub-description' >Low</p>
                    </div>
                    <div>
                        {data.main ?                         <span className='sub-temperature' > {data.main.humidity}% </span> : null}
                        <p className='sub-description' >Humidity</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;