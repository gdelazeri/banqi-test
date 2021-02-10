import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  padding: 15px;
  border-radius: 10px;
  height: 130px;
  width: 150px;
  margin: 0px 5px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.whiteText};
  box-shadow: 2px 2px rgba(170, 170, 170, 0.2);
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
