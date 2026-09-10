import './FilterSelect.css'

function FilterSelect({
    id, label, options, value, onChange

}) {
    return (<div className="filterSelect" > <label htmlFor= {
            id
        }

        className="filterSelectLabel" > {
            label
        }

        </label> <select id= {
            id
        }

        className="filterSelectInput"

        value= {
            value
        }

        onChange= {
            (event)=> onChange(event.target.value)
        }

        > {
            options.map((option)=> (<option key= {
                        option.value
                    }

                    value= {
                        option.value
                    }

                    > {
                        option.label
                    }

                    </option>))
        }

        </select> </div>)
}

export default FilterSelect