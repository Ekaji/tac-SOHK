import { data } from './api/UNinternationalDays.js'

const InternationalDays = () => {
    // let now = new Date("November 14 2020").toLocaleDateString('en-us', { weekday:"long"});
    const dayName = (month, day) => {
       return new Date(`${month, day, new Date().getFullYear()}`).toLocaleDateString('en-us', { weekday:"long"});
    }

    return(
        <>
        {data.map(( {month, events}, i) => (
            <>
            <h2 key={month}>{month}</h2>
                <div>{ events.map(({event, date}, i) =>
                    ( 
                    <div key={event}>
                        <span key={date}>{date + '  '}</span> 
                        <span key={dayName(month, date)}>{new Date(month + ' ' + date ).toLocaleDateString('en-us', { weekday:"long"})}</span>
                        <span key={event}>
                            <ul key={event}>{
                                event.map((event) => (
                                    <li key={event}>{event}</li>
                                ))
                            }</ul>
                        </span>
                    </div> 
                    )
                    )}
                </div>
            </>
            ) )}
        </>
    )
}

export default InternationalDays;