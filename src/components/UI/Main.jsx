import styled from 'styled-components/macro';
import { useTipCalc } from '../../context/useTipCalc';
import AddItemButton from './Buttons/AddItemButton';
import InputCost from './Fields/InputCost';
import Empty from './Text/Empty';
import DeleteItemButton from './Buttons/DeleteItemButton';
import ItemAmount from './Text/ItemAmount';

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

const ItemTable = styled.table`
  border-collapse: collapse;
  box-sizing: content-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  width: 100%;
`;

const ItemTableHead = styled.thead`
  background: linear-gradient(0deg, #e0e0e0 0%, #f5f5f5 100%);
  background-color: #f5f5f5;
  border-bottom: 1px solid #bbb;
`;

const ItemTableBody = styled.tbody``;

const ItemTableBodyRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const CellHead = styled.th`
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.5rem 0.5rem 0.25rem;
  text-align: left;
`;

const Cell = styled.td`
  padding: 0.5rem;
`;

const currency = new Intl.NumberFormat(`en-US`, {
  style: `currency`,
  currency: `USD`,
  minimumFractionDigits: 2,
});

const Main = () => {
  const { items } = useTipCalc();
  const hasItems = items.length > 0;

  return (
    <Container>
      {hasItems ? (
        <ItemTable>
          <colgroup>
            <col style={{ width: 25, minWidth: 25 }} />
            <col />
            <col />
            <col />
            <col style={{ width: 50, minWidth: 50 }} />
          </colgroup>
          <ItemTableHead>
            <tr>
              <CellHead>#</CellHead>
              <CellHead>Cost</CellHead>
              <CellHead>Tip</CellHead>
              <CellHead>Subtotal</CellHead>
              <CellHead aria-label="Delete" />
            </tr>
          </ItemTableHead>
          <ItemTableBody>
            {items.map(({ id, cost, tip, subtotal }, i) => (
              <ItemTableBodyRow key={id}>
                <Cell>{i + 1}</Cell>
                <Cell>
                  <InputCost id={id} value={cost} />
                </Cell>
                <Cell>
                  <ItemAmount value={tip} />
                </Cell>
                <Cell>
                  <ItemAmount value={subtotal} />
                </Cell>
                <Cell>
                  <DeleteItemButton id={id} index={i + 1} text={currency.format(cost)} />
                </Cell>
              </ItemTableBodyRow>
            ))}
          </ItemTableBody>
        </ItemTable>
      ) : (
        <>
          <Empty text="No Items" />
        </>
      )}
      <AddItemButton />
    </Container>
  );
};

export default Main;
