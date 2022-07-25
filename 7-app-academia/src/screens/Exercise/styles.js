import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    background-color: #17171A;
    height: 14%;
    align-items: center;
    justify-content: space-between;
`;

export const Box = styled.View`
    flex-direction: row;
    margin-bottom: 20px;
    padding: 45px 25px 0 25px;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
    color: #FFFFFF;
    font-size: 30px;
    font-weight: bold;
`;

export const HeaderText = styled.Text`
    font-size: 16px;
    margin: 20px 0;
`;

export const HeaderBox = styled.View`
    width: 90%;
    background-color: #0BDC65;
    align-items: center;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
`;
export const ModalBox = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7 );
`;

export const OptionsModal = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 50px;
    background-color: #0BDC65;
    border: 0.5px solid #4D4E4D;
`;

export const CloseModal = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    background-color: #0C8C23;
    border-radius: 5px;
    margin-top: 10px;
`;

export const TextModal = styled.Text`
    font-weight: bold;
    font-size: 18px;
`;


export const ChangeTreinoCronograma = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ExerciseDay = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 24px;
`;