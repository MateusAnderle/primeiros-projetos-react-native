import React, {useState} from 'react';
import { FlatList, Modal } from 'react-native';
import { 
    Container, 
    Header, 
    Box, 
    HeaderTitle, 
    HeaderText, 
    HeaderBox, 
    ExerciseDay, 
    BackButton, 
    ChangeTreinoCronograma, 
    ModalBox, 
    CloseModal,
    OptionsModal,
    TextModal,
} from './styles'; 
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { ExerciseCard } from '../../components/ExerciseCard'; 
import { segunda, terca, quarta, quinta, sexta } from '../../ExerciseData/treinos';


export function Exercise({navigation}){    
    const [modalVisible, setModalVisible] = useState(false); 
    const [modalChoice, setModalChoice] = useState('');

    let treinoDoDia;
    let treinoCronograma;
    exercise();

    function exercise(){
        
        if(modalChoice === '') {
            const weekday = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
            const d = new Date();
            let day = weekday[d.getDay()];

            if(day === 'Sábado' || day === 'Domingo' || day === 'Segunda'){
                treinoDoDia = segunda;
                treinoCronograma = 'Treino A'
            } else if (day === 'Terça') {
                treinoDoDia = terca;
                treinoCronograma = 'Treino B'
            } else if (day === 'Quarta') {
                treinoDoDia = quarta;
                treinoCronograma = 'Treino C';
            } else if (day === 'Quinta') {
                treinoDoDia = quinta;
                treinoCronograma = 'Treino D'
            } else {
                treinoDoDia = sexta;
                treinoCronograma = 'Treino E'
            };
        } else {
            let day = modalChoice;

            if(day === 'Sábado' || day === 'Domingo' || day === 'Segunda'){
                treinoDoDia = segunda;
                treinoCronograma = 'Treino A'
            } else if (day === 'Terça') {
                treinoDoDia = terca;
                treinoCronograma = 'Treino B'
            } else if (day === 'Quarta') {
                treinoDoDia = quarta;
                treinoCronograma = 'Treino C';
            } else if (day === 'Quinta') {
                treinoDoDia = quinta;
                treinoCronograma = 'Treino D'
            } else {
                treinoDoDia = sexta;
                treinoCronograma = 'Treino E'
            };
        }  
    };

    return(
        <Container>
            <StatusBar style="light" />

            <Header>
                <Box>
                    <BackButton onPress={() => navigation.navigate('Home')}>
                        <MaterialCommunityIcons name="chevron-left" size={26} color="white" />
                    </BackButton>
                </Box>

                <Box>
                    <HeaderTitle>TREI.NO</HeaderTitle>
                </Box>

                <Box>
                    <Ionicons name="refresh-outline" size={26} color="white" />
                </Box>
            </Header>

            <HeaderText>Bem vindo, Mateus</HeaderText>

            <HeaderBox>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                        setModalVisible(!modalVisible);
                        }}
                    >
                        <ModalBox>
                            <OptionsModal onPress={()=>{setModalVisible(!modalVisible); setModalChoice('Segunda') }}>
                                <TextModal>Treino A</TextModal> 
                            </OptionsModal>

                            <OptionsModal onPress={()=>{setModalVisible(!modalVisible); setModalChoice('Terça')}}>
                                <TextModal>Treino B</TextModal>
                            </OptionsModal>

                            <OptionsModal onPress={()=>{setModalVisible(!modalVisible); setModalChoice('Quarta')}}>
                                <TextModal>Treino C</TextModal>
                            </OptionsModal>

                            <OptionsModal onPress={()=>{setModalVisible(!modalVisible); setModalChoice('Quinta')}}>
                                <TextModal>Treino D</TextModal>
                            </OptionsModal>

                            <OptionsModal onPress={()=>{setModalVisible(!modalVisible); setModalChoice('Sexta')}}>
                                <TextModal>Treino E</TextModal>
                            </OptionsModal>

                            <CloseModal onPress={()=>setModalVisible(!modalVisible)}>
                                <TextModal style={{color: '#FFF'}}>Fechar</TextModal>
                            </CloseModal>
                        </ModalBox>
                    </Modal>


                <ChangeTreinoCronograma onPress={() => setModalVisible(true)}>
                    <ExerciseDay>{treinoCronograma}</ExerciseDay>
                </ChangeTreinoCronograma>
            </HeaderBox>

            
                <FlatList
                    style={{width: '100%', paddingLeft: 20, paddingRight: 20, marginBottom: 20}}
                    showsHorizontalScrollIndicator={false}
                    data={treinoDoDia}
                    keyExtractor={ (item)=> String(item.exercise) }
                    renderItem={ ({item}) => <ExerciseCard exercise={item.exercise} series={item.series} weight={item.weight} repetitions={item.repetitions} />}  
                />
            
        </Container>
    );
}