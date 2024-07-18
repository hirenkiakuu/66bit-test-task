import styles from './EmployeesTable.module.css';

const EmployeesTable = () => {
  return (
    <>
      <table>
        <thead className={styles['table-head']}>
          <th>ФИО</th>
          <th>Должность</th>
          <th>Телефон</th>
          <th>Дата рождения</th>
        </thead>
        <tbody>
          <tr className={styles['table-row']}>
            <td className={styles['table-row__cell']}>
              Дмитриев Игорь Степанович
            </td>
            <td className={styles['table-row__cell']}>Дизайнер</td>
            <td className={styles['table-row__cell']}>+7 934 349-43-23</td>
            <td className={styles['table-row__cell']}>23.09.2000</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EmployeesTable;
