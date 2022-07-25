import React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Header, HeaderTitle, Banner, BannerTitle, AvatarPhoto, HomeContent, TextBox, TextContent, StartButton, TextButton, Box } from './styles'; 
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 


const image = {uri:'https://img.myloview.com.br/quadros/fitness-gym-pattern-dark-seamless-background-with-line-icons-400-228771122.jpg'};

export function Home({navigation}){

    return(
        <Container>
            <StatusBar style="light" />

                <Header>
                    <Box>
                        <MaterialCommunityIcons name="qrcode-scan" size={26} color="white" />
                    </Box>

                    <Box>
                        <HeaderTitle>TREI.NO</HeaderTitle>
                    </Box>

                    <Box>
                        <Ionicons name="refresh-outline" size={26} color="white" />
                    </Box>
                </Header>

                <Banner>
                    <ImageBackground source={image} resizeMode='cover' style={{flex: 1, alignItems: "center", width: '100%'}} imageStyle= 
                    {{opacity:0.3}}>
                        <BannerTitle>Mateus Anderle da Silva</BannerTitle>
                    </ImageBackground>
                </Banner>

                <AvatarPhoto source={{uri: 'https://avatars.githubusercontent.com/u/100309091?v=4'}} />

                <HomeContent>
                    <TextBox>
                        <TextContent>Bem vindo, Mateus</TextContent>
                    </TextBox>

                    <TextBox>
                        <TextContent>O Vencimento da sua mensalidade na academia é em <TextContent style={{fontWeight: 'bold', fontSize: 19}}>11/08/2022</TextContent></TextContent>
                    </TextBox>

                    <TextBox>
                        <TextContent>Sua academia não fez nenhuma postagem</TextContent>
                    </TextBox>
                </HomeContent>

            <StartButton onPress={() => navigation.navigate('Exercise')}>
                <TextButton>COMEÇAR O TREINO</TextButton>
            </StartButton>

        </Container>
    );
}


      