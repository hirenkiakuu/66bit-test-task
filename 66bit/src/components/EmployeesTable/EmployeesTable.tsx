import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { EmployeesTableProps } from './EmployeesTableProps.interface';
import { convertDate } from '../../helpers/dateHelper';
import styles from './EmployeesTable.module.css';

const EmployeesTable = ({
  employeesData,
  lastEmployeeElementRef,
}: EmployeesTableProps) => {
  const navigate = useNavigate();

  const handleRowClick = (employeeId: number) => {
    navigate(`${employeeId}`);
  };

  return (
    <>
      <div className={styles['test']}>
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
                key={index}
                ref={
                  employeesData.length === index + 1
                    ? lastEmployeeElementRef
                    : null
                }
                onClick={() => handleRowClick(employee.id)}
                className={styles['table-row']}
              >
                <td className={styles['table-row__cell']}>{employee.name}</td>
                <td className={styles['table-row__cell']}>
                  {employee.position}
                </td>
                <td className={cn(styles['table-row__cell'], styles['phone'])}>
                  {employee.phone}
                </td>
                <td className={styles['table-row__cell']}>
                  {convertDate(employee.birthdate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeesTable;
