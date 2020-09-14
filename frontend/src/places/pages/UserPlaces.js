import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'La Bodeguita del Medio',
        description: 'Lugar emblemático de la coctelería cubana preferido por Hemingway',
        imageUrl: 'https://blog.acubavoy.com/wp-content/uploads/2015/09/vat-2344808_960_720.jpg',
        location:{
            lat:23.1407749,
            lng:-82.3544621,
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title:'El Capitolio de La Habana',
        description: 'Magestuoso símbolo del capitalismo en La Habana',
        imageUrl: 'https://cdnmundo3.img.sputniknews.com/img/108185/58/1081855882_0:17:1920:1055_1000x541_80_0_0_646aec43ec03086f48be431d3000435b.jpg',
        address: 'La Habana',
        location:{
            lat:23.1354067,
            lng:-82.3611941,
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadPalces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadPalces}/>
}

export default UserPlaces
