import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
`;

export const WrapperHeader = styled.View`
  background-color: ${({ theme, receive }) => receive ? theme.colors.green : theme.colors.red};
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export const Amount = styled.Text`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.whiteText};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const WrapperContent = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Description = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 30px;
`;

export const Date = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const BtnClose = styled.TouchableOpacity`
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 20px;
`;
