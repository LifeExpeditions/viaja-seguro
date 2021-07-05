import React, {useState} from 'react';

import * as Base from 'native-base';
import Theme from './styled';

//** Apollo
import {gql, useMutation} from '@apollo/client';

//! GQL
const SEARCH_WEBSITE = gql`
  mutation gettOperator($web: String) {
    getOperator(web: $web) {
      status
      data {
        _id
        razon_social
        nombre_comercial
        direccion
      }
      message
    }
  }
`;

const Verifique = () => {
  const [website, setWebsite] = useState('');
  const [mensaje, setMensaje] = useState(null);

  //? Mutation

  const [searchWeb] = useMutation(SEARCH_WEBSITE, {variables: {web: website}});

  //TODO Validar y Buscar la url
  const handleSubmit = async () => {
    //? Validar
    
    if (website == '') {
      console.log("campo vacio")
      //setMensaje('El campo esta Vacio');
      return;
    }
    try {
      //? Llamar la Mutacion
      
      let res = await searchWeb()
      console.log(res)
      //console.log(res)
      //let data = res.data.getOperator;
      //setMensaje(data.message);
    } catch (error) {
      console.log(error)
      //setMensaje('Ohs comuniquese con el Desarrollador');
    }
  };

  //TODO Mostrar alert de mensaje
  const ShowAlert = () => {
    Base.Toast.show({text: mensaje, buttonText: 'OK', duration: 5000});
    setMensaje(null)
  };

  return (
    <Base.Container style={Theme.container}>
      <Base.View style={Theme.content}>
        <Base.H1 style={Theme.titulo}>SecureTravel</Base.H1>

        <Base.Item>
          <Base.Input
            style={Theme.input}
            textContentType="URL"
            onChangeText={web => {
              setWebsite(web);
            }}
            defaultValue={website}
            placeholder="www.dongoogleador.com"
          />
        </Base.Item>

        <Base.Button style={Theme.buttom} square block onPress={handleSubmit}>
          <Base.Text> Buscar</Base.Text>
        </Base.Button>
        {mensaje && ShowAlert()}
      </Base.View>
    </Base.Container>
  );
};

export default Verifique;
