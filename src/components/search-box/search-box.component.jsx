import './search-box.styles.css';

const SearchBox = ({onChangeHanlder, onKeyPressHandler, value}) => {
    return(
        <div>
            <input className='search-box' type='search' placeholder='Search for a city' onChange={onChangeHanlder} onKeyPress={onKeyPressHandler} />
        </div>
    )
};

export default SearchBox;