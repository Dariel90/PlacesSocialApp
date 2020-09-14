import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook'

import './PlaceForm.css'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'La Bodeguita del Medio',
    description:
      'Lugar emblemático de la coctelería cubana preferido por Hemingway',
    imageUrl:
      'https://blog.acubavoy.com/wp-content/uploads/2015/09/vat-2344808_960_720.jpg',
    location: {
      lat: 23.1407749,
      lng: -82.3544621,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'El Capitolio de La Habana',
    description: 'Magestuoso símbolo del capitalismo en La Habana',
    imageUrl:
      'https://cdnmundo3.img.sputniknews.com/img/108185/58/1081855882_0:17:1920:1055_1000x541_80_0_0_646aec43ec03086f48be431d3000435b.jpg',
    address: 'La Habana',
    location: {
      lat: 23.1354067,
      lng: -82.3611941,
    },
    creator: 'u2',
  },
];

const UpdatePlace = () => { 

  const placeId = useParams().placeId;

  const indentifiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  const [formState, inputHandler] = useForm({
    title:{
      value: indentifiedPlace.title,
      isValid: true,
    },
    description:{
      value: indentifiedPlace.description,
      isValid: true,
    },
    address:{
      value: indentifiedPlace.address,
      isValid: true,
    }
  }, true);

  const placeUpdateSubmitHandler = event => {
      event.preventDefault();
      console.log(formState.inputs)
  }

  if (!indentifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MAXLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlace;
