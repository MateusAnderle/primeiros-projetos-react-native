import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
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

export const HeaderTitle = styled.Text`
    color: #FFFFFF;
    font-size: 30px;
    font-weight: bold;
`;

export const Banner = styled.View`
    width: 100%;
    background-color: #303037;
    height: 15%;
    align-items: center;
`;

export const BannerTitle = styled.Text`
    color: #FFFFFF;
    font-size: 20px;
    margin-top: 20px;
    font-weight: 600;
`;

export const AvatarPhoto = styled.Image`
    height: 100px;
    width: 100px;
    margin-top: -50px;
    border-radius: 50px;
`;

export const HomeContent = styled.View`
    flex: 1;
    align-items: center;
    margin-left: 7%;
    margin-right: 7%;
`;

export const TextBox = styled.View`
    margin-top: 12px;
    margin-bottom: 12px;
`;

export const TextContent = styled.Text`
    font-size: 17px;
    text-align: center;
`;

export const StartButton = styled.TouchableOpacity`
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    background-color: #0BDC65;
    
`;

export const TextButton = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 20px;
`;