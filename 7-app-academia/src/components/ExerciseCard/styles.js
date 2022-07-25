import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #FFFFFF;
    width: 100%;
    margin-top: 20px;
    border-radius: 15px;
    border: 0.7px solid #Cad2d2;
    padding: 15px 40px;
    padding-bottom: 25px;
`;

export const TitleBox = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    width: 87%;
`;

export const Card = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
    margin-top: 10px;
`;

export const BigText = styled.Text`
    font-weight: 300;
    font-size: 36px;
`;

export const SmallText = styled.Text`
    font-size: 12px;
`;

export const LeftCards = styled.View`
    flex: 1.7;
`;

export const UpCard = styled.View`
    background-color: #EBEEEE;
    height: 80px;
    width: 100%;
    text-align: center; 
    justify-content: center;
    align-items: center; 
    border-radius: 15px;
    margin-bottom: 5px;
`;

export const DownCard = styled.View`
    background-color: #EBEEEE;
    height: 80px;
    width: 100%;
    text-align: center;
    justify-content: center;
    align-items: center; 
    border-radius: 15px;
`;

export const RightCard = styled.View`
    background-color: #EBEEEE;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 165px;
    width: 100%;
    border-radius: 15px;
    margin-left: 5px;
`;
