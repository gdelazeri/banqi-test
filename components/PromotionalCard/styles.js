import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  margin: 0px 30px;
  margin-bottom: 30px;
`;

export const Card = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.whiteText};
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  align-items: center;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgba(170, 170, 170, 0.3);
`;

export const CardText = styled.View`
  margin-left: 15px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 3px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
