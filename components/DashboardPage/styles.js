import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  flex: 1;
`;

export const WelcomeText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin: 30px;
`

