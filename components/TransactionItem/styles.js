import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  padding: 0px 5px;
`;

export const WrapperContent = styled.View`
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-bottom: 3px;
`;

export const Amount = styled.Text`
  color: ${({ theme, receive }) => receive ? theme.colors.green : theme.colors.textLight};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
