export default function Card(props){
    return(
        <div>
            <div>
                <img  src={props.imageUrl} />
            </div>
            <div>
                <div>
                    <img src="../../public/pin.svg" />
                    <span>Lokasi : {props.lokasi}</span>
                    <p>
                        <a href={props.googleMapsUrl}
                        target="_blank"
                        rel="noreferrer">
                            Lihat di Google Map
                        </a>
                    </p>
                </div>
                <h2>{props.tajuk}</h2>
                <div>
                    <span>Tarikh Mula: {props.tarikhMula}</span>
                    <span>-</span>
                    <span>Tarikh Habis: {props.tarikhHabis}</span>
                </div>
                <p>{props.konteks}</p>
            </div>
        </div>
    )
}