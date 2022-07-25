import React, {useState} from "react";
import {
    Container, 
    TitleBox, 
    Title, 
    Card, 
    LeftCards, 
    UpCard, 
    DownCard, 
    RightCard,
    BigText,
    SmallText,
} from './styles'
import Checkbox from 'expo-checkbox';

export function ExerciseCard(props){

    const [isChecked, setChecked] = useState(false);
          
    return(
        <Container style={isChecked ? {backgroundColor: '#EBEEEE'} : {backgroundColor: '#FFF'}} >
            <TitleBox>
                <Title>{props.exercise}</Title>
                <Checkbox value={isChecked} onValueChange={setChecked} color={'#0BDC65'}/>
            </TitleBox>

            {isChecked ? null : 
                <Card>
                    <LeftCards>
                        <UpCard>
                            <BigText>{props.series}</BigText>
                            <SmallText>Séries</SmallText>
                        </UpCard>
                        <DownCard>
                            <BigText>{props.weight}</BigText>
                            <SmallText>KG de Carga</SmallText>
                        </DownCard>
                    </LeftCards>

                    <RightCard>
                            <BigText>{props.repetitions}</BigText>
                            <SmallText>Repetições</SmallText>
                    </RightCard>
                </Card>
            }
        </Container>
    );
}