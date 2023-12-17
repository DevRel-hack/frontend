import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import RowTableContent from './RowTableContent';
import HeaderOfTableOfCandidates from './HeaderOfTable';
import { useAppSelector } from '~/lib/hooks/reduxHooks';
import { selectSelectedPeople } from '~/store/slices/selectedPeople';

type VirtuosoTableComponentsType = {
  Scroller: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>>;
  Table: React.FC;
  TableHead: React.FC;
  TableRow: React.FC;
  TableBody: React.ForwardRefExoticComponent<React.RefAttributes<HTMLTableSectionElement>>;
};

const VirtuosoTableComponents: VirtuosoTableComponentsType = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
  Table: (props) => <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />,
  TableHead,
  TableRow: (props) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => <TableBody {...props} ref={ref} />),
};

VirtuosoTableComponents.Scroller.displayName = 'VirtuosoTableScroller';
VirtuosoTableComponents.TableBody.displayName = 'VirtuosoTableBody';

export default function TablePeople() {
  const specialists = useAppSelector(selectSelectedPeople);

  // const dispatch = useDispatch();
  // const [changeStatusVacanciToId, { data }] = useChangeStatusVacanciToIdMutation();

  // const handleChangeStatus = (data: IDataChangeStatusFunc) => {
  //   void changeStatusVacanciToId({ ...data, vacanciId: dataResponds.id });
  // };

  return specialists.length ? (
    <Paper style={{ height: '40vh', width: '100%' }}>
      <h4 style={{ margin: 0 }}>Итого получателей: {specialists.length}</h4>
      <TableVirtuoso
        data={specialists}
        components={VirtuosoTableComponents}
        fixedHeaderContent={HeaderOfTableOfCandidates}
        itemContent={RowTableContent}
      />
    </Paper>
  ) : (
    <div style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h4 style={{ maxWidth: '300px', textAlign: 'center' }}>
        Выберите рассылку слева в меню(пока не реализовано) или получите выборку от странички &quot;Люди&quot;
      </h4>
    </div>
  );
}
