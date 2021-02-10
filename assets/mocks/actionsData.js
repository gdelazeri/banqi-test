import useLanguage from '../../language/useLanguage';
import IconTransfer from '../icons/transfer';
import IconDeposit from '../icons/deposit';
import IconCellphone from '../icons/cellphone';
import IconInvestment from '../icons/investment';
import IconReceipt from '../icons/receipt';
import IconReceive from '../icons/receive';

const { Actions } = useLanguage();

const actionsData = [
  { icon: IconTransfer, label: Actions.transfer },
  { icon: IconReceive, label: Actions.receive },
  { icon: IconDeposit, label: Actions.deposit },
  { icon: IconReceipt, label: Actions.receipts },
  { icon: IconInvestment, label: Actions.investments },
  { icon: IconCellphone, label: Actions.recharge },
]

export default actionsData;
