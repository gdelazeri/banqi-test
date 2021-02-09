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
import formatValue from '../../utils/formatValue';
import IconEye from '../../assets/icons/eye';
import IconEyeSlash from '../../assets/icons/eyeSlash';

const Balance = ({ amount }) => {
  const { Balance: BalanceStrings } = useLanguage();
  const [visible, setVisible] = useState(false);

  return <Wrapper>
    <Label>{BalanceStrings.myBalance}</Label>
    <WrapperBalance>
      {visible && <WrapperAmount>
        <AmountCurrency>{BalanceStrings.currency}</AmountCurrency>
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