import './card.styles.css';

const Card = () => {
    return(
        <div className='card-container' >
            <div className="card-weather-container">
                <h2 className='location'>NYC</h2>
                <span className='temperature' >80&#8457;</span>
                <h4 className='description' >Description</h4>
                <div className='sub-container' >
                    <div>
                        <span className='sub-temperature' >85&#8457;</span>
                        <p className='sub-description' >High</p>
                    </div>
                    <div>
                        <span className='sub-temperature' >72&#8457;</span>
                        <p className='sub-description' >Low</p>
                    </div>
                    <div>
                        <span className='sub-temperature' >49%</span>
                        <p className='sub-description' >Humidity</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;