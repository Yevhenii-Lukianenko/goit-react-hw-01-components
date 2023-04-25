import PropTypes from 'prop-types';
import {
  Table,
  Head,
  CellHead,
  StringTable,
  CellString,
} from './Transactions.styled';

export const Transactions = ({ transactions }) => {
  return (
    <Table>
      <Head>
        <tr>
          <CellHead>Type</CellHead>
          <CellHead>Amount</CellHead>
          <CellHead>Currency</CellHead>
        </tr>
      </Head>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <StringTable key={id}>
              <CellString>{type}</CellString>
              <CellString>{amount}</CellString>
              <CellString>{currency}</CellString>
            </StringTable>
          );
        })}
      </tbody>
    </Table>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
