import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Cartao from './Cartao';

const CidadeItem = (props) => {
    return (
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>
                <View>
                    <View style={estilos.primeiraLinha}>
                        <Text>{props.previsao.item.name}</Text>
                    </View>
                    <View style={estilos.segundaLinha}>
                        <Text style={estilos.valor}>
                            <Image style={estilos.imagem} source={require('../Icons/celsius.png')}/>
                            &nbsp;&nbsp;
                            Sensção térmica: {props.previsao.item.main.feels_like + " \u00B0" + "C" } 
                        </Text>
                        <Text style={estilos.valor}>
                            <Image style={estilos.imagem} source={require('../Icons/dawn.png')}/>
                            &nbsp;&nbsp;Hora do nascer so sol: {new Date(props.previsao.item.sys.sunrise * 1000).toLocaleTimeString()}
                        </Text>
                        <Text style={estilos.valor}>
                            <Image style={estilos.imagem} source={require('../Icons/sunset.png')}/>
                            &nbsp;&nbsp;Hora do pôr do sol: {new Date(props.previsao.item.sys.sunset * 1000).toLocaleTimeString()}
                        </Text>
                    </View>
                </View>
            </View>
        </Cartao> 
    );
}

const estilos = StyleSheet.create({
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row',
    },
    imagem: {
        width: 20,
        height: 20
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD',
        flexWrap: 'wrap'
    },
    valor: {
        marginHorizontal: 2,
    }
});

export default CidadeItem;