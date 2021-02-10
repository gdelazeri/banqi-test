import React, { useState } from 'react';

import {
  Wrapper,
  Label,
  WrapperBalance,
  WrapperAmount,
  AmountCurrency,
  Amount,
  BtnVisible,
} from './styles';
import useLanguage from '../../language/useLanguage';
import IconEye from '../../assets/icons/eye';
import IconEyeSlash from '../../assets/icons/eyeSlash';

const Balance = ({ amount }) => {
  const { Balance: BalanceStrings, Global } = useLanguage();
  const [visible, setVisible] = useState(false);

  const formatValue = (value) => {
    if (value !== undefined) {
      return value.toFixed(2).replace('.', ',');
    }
    return value;
  }

  return <Wrapper>
    <Label>{BalanceStrings.myBalance}</Label>
    <WrapperBalance>
      {visible && <WrapperAmount>
        <AmountCurrency>{Global.currency}</AmountCurrency>
        <Amount>{formatValue(Number(amount))}</Amount>
      </WrapperAmount>}
      {!visible && <WrapperAmount style={{ backgroundColor: '#ddd' }} />}
      <BtnVisible onPress={() => setVisible(!visible)}>
        {!visible && <IconEye />}
        {visible && <IconEyeSlash />}
      </BtnVisible>
    </WrapperBalance>
  </Wrapper>
}

export default Balance;