import "./ExpenseDate.css"

function ExtenseDate(props) {

    const day = props.date.toLocaleString("pt-PT", {day: "numeric"});
    const month = props.date.toLocaleString("pt-PT", {month: "long"});
    const year = props.date.toLocaleString("pt-PT", {year: "numeric"});
    
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day"> {day}</div>
        </div>
    )
}

export default ExtenseDate;