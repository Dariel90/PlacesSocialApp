import React, { useRef, useEffect } from 'react';
import './Map.css';

const Map = props => {
    const mapRef = useRef();

    //Se crea deconstructor para el objeto props almacenando las porpiedades
    // "zoom" y "center" para que una vez que estas se cambien el componente
    // del mapa vuelva a pintarse
    const { center, zoom} = props;

    //useEffect se ejecutas des pues del primer ciclo de dibujado del JSX
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current,{
            center: center,
            zoom: zoom,
        });
        new window.google.maps.Marker({position: center, map: map});
    }, [center, zoom]);

    return <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
}

export default Map
