import React, { FC } from 'react'
import { SafeAreaView, Text, View } from '../../theme/Theme'
import { Image, StyleSheet } from 'react-native'
import Images from '../../../constant/Images'
import Button from '../../form/Button/Button'

interface EmptyCardProps {
    onPress: () => void
}

const EmptyCard: FC<EmptyCardProps> = ({ onPress }) => {
    return (
        <SafeAreaView testID="empty-cart" style={styles.container}>
            <Image source={Images.emptyImage} style={styles.emptyImage} />
            <Text style={styles.title}>Sepetiniz Boş</Text>
            <Text style={styles.description}>Birşeyler eklemek için butona tıkla.</Text>
            <Button
                testID='empty-cart-button'
                buttonStyle={styles.button}
                textStyle={styles.textButton}
                title={"Alışverişe Başla"}
                onPress={onPress}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    description: {
        marginVertical: 10,
        fontSize: 16,
        color: 'gray',
        textAlign: 'center'
    },
    button: {
        paddingVertical: 15,
        borderRadius: 20,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        marginHorizontal: 15,
        bottom: 0,
    },
    textButton: {
        fontWeight: "500",
        fontSize: 16,
    },
    emptyImage: {
        width: 400,
        height: 400,
        alignSelf: 'center',
        marginTop: 50
    }
})

export default EmptyCard