import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from './Constants/Colors';
import Button from '../../Components/Button';

const Welcome = () => {
    return (
        <ImageBackground
            source={require('../assets/bg.png')} // Chemin de votre image
            style={{ flex: 1 }}
            resizeMode="cover" // Ajuste la taille de l'image (options : 'cover', 'contain', etc.)
        >
            <LinearGradient
                style={{ flex: 1 }}
                colors={[COLORS.secondary, COLORS.primary]}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{
                        paddingHorizontal: 22,
                        position: 'absolute',
                        top: 400,
                        width: '100%',
                    }}>
                        <Text style={{
                            fontSize: 50,
                            fontWeight: 800,
                            color: COLORS.white,
                        }}>Let's Get</Text>
                        <Text style={{
                            fontSize: 46,
                            fontWeight: 800,
                            color: COLORS.white,
                        }}>Started</Text>

                    </View>
                    <View style={{ marginVertical: 22 }}>
                        <Text style={{ fontSize: 16, color: COLORS.white, marginVertical: 4 }}>
                            Calculez instantanément les racines et factorisez vos polynômes facilement
                        </Text>

                    </View>
                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Register")}
                        style={{ marginTop: 22, width: '100%' }}
                    />

                    <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, color: COLORS.white }}>
                            Already have an account?
                        </Text>
                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text style={{ fontSize: 16, color: COLORS.white, fontWeight: 'bold', marginLeft: 4 }}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    );
};

export default Welcome;
