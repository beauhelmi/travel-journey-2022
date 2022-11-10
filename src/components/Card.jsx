export default function Card(props){
    return(
        <div className="card">
            <div className="card-image-div">
                <img  src={props.imageUrl} className={props.class} alt={props.title} />
            </div>
            <div className="card-text-div">
                <div className="card-location">
                    <img src="../../public/pin.svg" className="card-pin" alt="pin-icon" />
                    <span className="location">Lokasi : {props.lokasi}</span>
                    <p className="grey">
                        <a href={props.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer">
                            Lihat di Google Map
                        </a>
                    </p>
                </div>
                <h2 className="card-title">{props.tajuk}</h2>
                <div className="card-date">
                    <span className="start-date">Tarikh Mula: {props.tarikhMula}</span>
                    <span className="dash">-</span>
                    <span className="end-date">Tarikh Habis: {props.tarikhHabis}</span>
                </div>
                <p className="card-description">{props.konteks}</p>
            </div>
        </div>
    )
}