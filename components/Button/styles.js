import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 15px 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.textLight : theme.colors.primary};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.whiteText};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
