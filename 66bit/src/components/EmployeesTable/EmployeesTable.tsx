import styles from './EmployeesTable.module.css';
import { EmployeesTableProps } from './EmployeesTableProps.interface';

const EmployeesTable = ({
  employeesData,
  lastEmployeeElementRef,
}: EmployeesTableProps) => {
  return (
    <>
      <table>
        <thead className={styles['table-head']}>
          <tr>
            <th>ФИО</th>
            <th>Должность</th>
            <th>Телефон</th>
            <th>Дата рождения</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((employee, index) => (
            <tr
              className={styles['table-row']}
              key={index}
              ref={
                employeesData.length === index + 1
                  ? lastEmployeeElementRef
                  : null
              }
            >
              <td className={styles['table-row__cell']}>{employee.name}</td>
              <td className={styles['table-row__cell']}>{employee.position}</td>
              <td className={styles['table-row__cell']}>{employee.phone}</td>
              <td className={styles['table-row__cell']}>
                {employee.birthdate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeesTable;
