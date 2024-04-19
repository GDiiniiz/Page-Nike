import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [colorShoes, setColorShoes] = useState(true)

  const shoesSize = [
    {
      id: 1,
      size: 38
    },
    {
      id: 2,
      size: 39
    },
    {
      id: 3,
      size: 40
    },
    {
      id: 4,
      size: 41
    },
    {
      id: 5,
      size: 42
    },
    {
      id: 6,
      size: 43
    },
    {
      id: 7,
      size: 44
    },
    {
      id: 8,
      size: 45
    },
    {
      id: 9,
      size: 46
    },
  ]

  const imagesShoesBlack = [
    {
      id: 1,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/011137ID.jpg'
    },
    {
      id: 2,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/011137IDA2.jpg'
    },
    {
      id: 3,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/011137IDA3.jpg'
    },
    {
      id: 4,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/011137IDA4.jpg'
    },
    {
      id: 5,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/011137IDA6.jpg'
    },
  ]

  const imagesShoesWhite = [
    {
      id: 1,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/01113751.jpg'
    },
    {
      id: 2,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/01113751A2.jpg'
    },
    {
      id: 3,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/01113751A3.jpg'
    },
    {
      id: 4,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/01113751A4.jpg'
    },
    {
      id: 5,
      url: 'https://imgnike-a.akamaihd.net/1024x1024/01113751A6.jpg'
    },
  ]

  function renderOnBoardingImage({ item}: any) {
    return (
      <Image
        source={{ uri: item.url }}
        style={{ width: 420, height: 350 }}
      />
    );
  };


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={{marginBottom: 100}}>
        <View style={{alignItems:'center'}}>
          <Image
            style={{ width: 170, height: 60 }}
            source={require('./images/logoNike.png')}
          />
        </View>

        <View style={{ marginTop: 50, paddingHorizontal: 16 }}>
          <Text style={{ fontWeight: '800', fontSize: 23 }}>
            Tênis Nike Air Force 1 "07 Masculino
          </Text>
          <Text style={{ fontWeight: '600', fontSize: 18 }}>
            Casual
          </Text>
        </View>

        {colorShoes == true ? (
          <FlatList
            data={imagesShoesBlack}
            keyExtractor={(item) => String(item?.id)}
            renderItem={renderOnBoardingImage}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        ) : (
            <FlatList
              data={imagesShoesWhite}
              keyExtractor={(item) => String(item?.id)}
              renderItem={renderOnBoardingImage}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
            />
        )}

      <View style={{flexDirection: 'row', gap: 4, paddingVertical: 30, alignItems:'center', justifyContent:'center'}}>
        <View>
            <TouchableOpacity onPress={() => setColorShoes(true)}>
            <View style={{
              width: 30,
              height: 30,
              borderWidth: 1,
              backgroundColor: 'black'
            }}></View>
          </TouchableOpacity>
        </View>

          <View>
            <TouchableOpacity onPress={() => setColorShoes(false)}>
              <View style={{
                width: 30,
                height: 30,
                borderWidth: 1,
                backgroundColor: 'white'
              }}></View>
            </TouchableOpacity>
          </View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', gap: 10, justifyContent:'center'}}>
        <Text style={{fontWeight: '600', fontSize: 17}}>
            R$ 759,99 no Pix
        </Text>
          <Text style={{ color: 'green' }}>
          5% off
        </Text>
      </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>
            ou
        </Text>
      </View>

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>
            {' '}
            <Text style={{ fontWeight: '500', fontSize: 17 }}>
              R$ 799,99
            </Text>
            {' '}
             em até 7x sem juros
        </Text>
      </View>

      <View style={{marginTop: 40, paddingHorizontal: 16 }}>
        <Text style={{fontWeight: '800', fontSize: 20}}>
            Selecione um tamanho
        </Text>
      </View>

      <View style={{marginHorizontal: 16, marginTop: 8,padding: 8, borderWidth: 1, flexDirection:'row'}}>
          <Text style={{ fontWeight: '800', fontSize: 14 }}>
            Dica: 
          </Text>
          <Text>
             Recomendamos escolher um número menor que seu tamanho usual.
          </Text>
      </View>

        <View style={{ paddingHorizontal: 16, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
          {shoesSize.map((shoe) => (
            <TouchableOpacity
              key={shoe.id}
              style={{
                width: 40,
                height: 40,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10, 
              }}
            >
              <Text>{shoe.size}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={{alignItems:'center', paddingHorizontal: 16, marginTop: 30}}>
          <TouchableOpacity style={{backgroundColor:'#000', padding: 16, paddingHorizontal: 84, borderRadius: 24}}>
            <Text style={{fontWeight:'600', fontSize: 18, color: '#f4f4f4'}}>
              Adicionar ao Carrinho
            </Text>
          </TouchableOpacity>
        </View>


      </SafeAreaView>
    </ScrollView>
  );
}


