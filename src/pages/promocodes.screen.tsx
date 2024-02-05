import { Border } from '@/components/border'
import { Layout } from '@/components/layout'
import { ScreenHeaderBack } from '@/components/screen-header-back'
import { CustomText } from '@/components/ui/custom-text'
import { borderRadius, colors } from '@/constants/colors'
import { IPromocode } from '@/interfaces/IPromocode'
import { RootStackParamList } from '@/modules/navigation/root-navigator'
import { globalStyles } from '@/styles/global.style'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { ScrollView, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const promocodes: IPromocode[] = [
  {
    title: 'Jack&Chan',
    image: require('@/assets/promo_c_1.jpg'),
    grayImage: require('@/assets/promo_1.jpg'),
    promo: '#d9ne',
    address: 'Садовая ул., 8/7',
    kitchen: 'Паназиатская кухня',
    description: 'В меню представлены такие блюда, как пад-тай с курицей или креветками, сычуаньская курица «Кунг-Пао», тайский суп «Том Ям», блинчики «Роти» с бананами и нутеллой, а также гедза (острые пельмени) с курицей и сыром «Чеддер».'
  },
  {
    title: 'Flow',
    image: require('@/assets/promo_c_2.jpg'),
    grayImage: require('@/assets/promo_2.jpg'),
    promo: "#vas3k",
    address: 'Большая Морская ул., 16',
    kitchen: 'Кофейня',
    description: 'Гостям нравится панорамный вид на центральную часть города, который открывается из окон кофейни на каждом этаже. В кофейне можно попробовать различные виды кофе, включая фильтр и эспрессо, а также авторские напитки, такие как «Бамбл» и «Матча».'
  },
  {
    title: 'Bonch',
    image: require('@/assets/promo_c_3.jpg'),
    grayImage: require('@/assets/promo_3.jpg'),
    promo: "#nebo1",
    address: 'Садовая ул., 21АБ',
    kitchen: 'Кофейня',
    description: 'Bonch – это кофейня, где особое внимание уделяется альтернативным способам заваривания кофе, таким как пуровер, аэропресс, кемекс и сифон. Здесь вы можете попробовать различные сорта зерен, такие как арабика, робуста и другие.'
  }
];

export const PromocodesScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const promoClickHandle = (promo: IPromocode) => {
    navigation.navigate('PromocodeScreen', {...promo});
  }

  return (
    <View className='min-h-full bg-background'>
      <ScrollView 
        className='pt-[13%]'
      >
        <ScreenHeaderBack/>

        <Layout 
          styles={{
            gap: 16
          }}
        >
          { promocodes.map((value, index) => (
            <Border styles={{
              width: '100%',
              backgroundColor: colors.secondary,
              flexDirection: index % 2 ? 'row-reverse' : 'row',
              gap: 16,
            }} key={index}>
              <Image
                borderRadius={borderRadius}
                className='h-28 w-40'
                source={value.image}
              />
              <View style={{
                flexGrow: 1,
                justifyContent: 'space-between'
              }}>
                <View>
                  <CustomText styles={{
                    textAlign: 'center',
                    color: colors.primary
                  }} size='lg'>{value.title}</CustomText>

                  <CustomText 
                    styles={{
                      textAlign: 'center',
                      color: colors.primary,
                      alignSelf: 'center',
                    }}
                    size='xs'
                  >{value.kitchen}</CustomText>
                </View>
                <TouchableOpacity
                  onPress={() => promoClickHandle(value)}
                  style={[
                    globalStyles.border,
                    {
                      width: 100,
                      alignSelf: 'center',
                      paddingVertical: 4,
                    } 
                  ]}
                >
                  <CustomText
                    styles={{
                      textAlign: 'center',
                      color: colors.secondary,
                    }}
                  >Подробнее</CustomText>
                </TouchableOpacity>
              </View>
            </Border>
          )) }
        </Layout>
      </ScrollView>
    </View>
  )
}
