import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: 10px;
`;

export const WrapperBalance = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const WrapperAmount = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: center;
  min-width: 120px;
  height: 30px;
  border-radius: 10px;
`;

export const AmountCurrency = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const Amount = styled.Text`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const BtnVisible = styled.TouchableOpacity`
  padding: 5px 10px;
`;
