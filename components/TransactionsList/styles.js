import styled from 'styled-components/native';

export const Wrapper = styled.View`
  margin: 0px 30px;
  background-color: ${({ theme }) => theme.colors.whiteText};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px rgba(170, 170, 170, 0.3);
  margin-bottom: 30px;
`;

export const WrapperHeader = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 20px;
`;

export const WrapperTitle = styled.View`
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

export const BtnShowMore = styled.TouchableOpacity`
  padding: 10px 10px;
  align-self: center;
`;

export const LabelShowMore = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const Divider = styled.Text`
  height: 0.05px;
  margin: 10px 0px;
  background-color: ${({ theme }) => theme.colors.textLight};
`;
