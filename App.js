import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import Alumno from './Alumno';
import { SafeAreaView } from 'react-native-web';

export default function App() {

  const alumnos = [
    {
      nombre: 'CANDELARIA MORA SAMANTHA',
      matricula: '2114354'
    },
    {
      nombre: 'CANTU SILVA JAVIER',
      matricula: '2111889'
    },
    {
      nombre: 'CARMONA LOZANO ANGEL EMILIANO',
      matricula: '2069119'
    },
    {
      nombre: 'CASTILLO ACOSTA JORGE',
      matricula: '2132842'
    },
    {
      nombre: 'DAVILA GONZALEZ ALDO ADRIAN',
      matricula: '1994122'
    },
    {
      nombre: 'DURAN BARRIENTOS FABRIZIO',
      matricula: '2018230'
    },
    {
      nombre: 'FLORES GONZALEZ SEBASTIAN',
      matricula: '2104564'
    },
    {
      nombre: 'DURAN BARRIENTOS FABRIZIO',
      matricula: '2018230'
    },
    {
      nombre: 'FLORES GONZALEZ SEBASTIAN',
      matricula: '2104564'
    },
    {
      nombre: 'FLORES LÓPEZ DIEGO',
      matricula: '2066033'
    },
    {
      nombre: 'FLORES MARTINEZ ERICK ADRIAN',
      matricula: '2132976'
    },
    {
      nombre: 'GARZA AVALOS DIEGO',
      matricula: '2066114'
    },
    {
      nombre: 'GONZALEZ OVALLE CHRISTIAN GABRIEL',
      matricula: '2031243'
    },
    {
      nombre: 'GRANJA PEÑA DIEGO',
      matricula: '2064733'
    },
    {
      nombre: 'IBARRA RODRIGUEZ ALEXIS',
      matricula: '2031243'
    },
    {
      nombre: 'MARTINEZ ELIAS ANGEL SEBASTIAN',
      matricula: '2064733'
    },
    {
      nombre: 'MENDIETA GONZALEZ ESMERALDA GABRIELA',
      matricula: '2094647'
    },
    {
      nombre: 'MIRELES VELAZQUEZ ALEJANDRO',
      matricula: '2005102'
    },
    {
      nombre: 'MONSIVAIS SALAZAR ANDRES',
      matricula: '2064574'
    },
    {
      nombre: 'PARRAZALEZ VALDESPINO MARTHA JULIETA',
      matricula: '2024783'
    },
    {
      nombre: 'PEÑA MUNGARRO LUIS ANGEL',
      matricula: '2066077'
    },
    {
      nombre: 'PUENTE REYNOSO JULIO CESAR',
      matricula: '2092151'
    },
    {
      nombre: 'RAMIREZ LOPEZ BRYAN',
      matricula: '2103708'
    },
    {
      nombre: 'RAMOS AVILA LILIANA VALERIA',
      matricula: '2115192'
    },
    {
      nombre: 'RICO JAUREGUI MAURICIO',
      matricula: '2037503'
    },
    {
      nombre: 'RIVERA LUNA ADRIAN',
      matricula: '2131513'
    },
    {
      nombre: 'RIVERA REYNA JOSE EMILIO',
      matricula: '2013503'
    },
    {
      nombre: 'RODRIGUEZ OLVERA ROSA ISELA',
      matricula: '2004613'
    },
    {
      nombre: 'RODRIGUEZ RODRIGUEZ ANGEL AZAEL',
      matricula: '2133022'
    },
    {
      nombre: 'SANCHEZ GALARZA JUAN CARLOS',
      matricula: '2026061'
    },
    {
      nombre: 'SOLIS ORTIZ ALFREDO',
      matricula: '2095320'
    },
    {
      nombre: 'VELAZQUEZ ABREGO HERWIN DANIEL',
      matricula: '2025350'
    },
    {
      nombre: 'VILLAGRA RODRIGUEZ ANDRES NEHUEL',
      matricula: '2103895'
    },
    {
      nombre: 'ZACATENCO OLIVE RODRIGO',
      matricula: '1857791'
    },
    {
      nombre: 'ZAVALA CANTU TERESA MARGARITA',
      matricula: '2025218'
    }

  ]
  //funcionalidad del Boton
  const [mensaje, setMensaje] = useState('');
  const saludo = () => {
    setMensaje(m => 'hola alumnos')
  };

  return (
   <SafeAreaView style={estilos.container}>
    <ScrollView contentContainerStyle={estilos.contenido}>
      {alumnos.map((alumno) => 
        (
          <Alumno key={alumno.matricula} nombre={alumno.nombre} matricula={alumno.matricula}></Alumno>
        )
      )}
    </ScrollView>
    </SafeAreaView>
  )
}


const estilos = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  contenido: {
    backgroundColor: '#183db8'
  }
});