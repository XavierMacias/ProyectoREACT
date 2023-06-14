import "./InputFilter.css";

function InputFilter( {handleFilterName} ) {

    const handleChange = (event) => {
        handleFilterName(event.target.value)
    }
    
    return (
        <div>
            <label htmlFor="nameFilter"> </label>
            <input className="filter" type="text" id="nameFilter" placeholder="name..." onKeyUp={handleChange}/>
        </div>
    )
}

export default InputFilter;