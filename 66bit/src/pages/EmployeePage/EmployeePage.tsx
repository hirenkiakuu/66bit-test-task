import { useEffect, useState } from 'react';
import { Employee } from '../../components/model/Employee.interface';
import styles from './EmployeePage.module.css';
import axios from 'axios';
import { convertDate } from '../../helpers/dateHelper';
import { useParams } from 'react-router-dom';

const EmployeePage = () => {
  const [employee, setEmployee] = useState<Employee>();
  const { id } = useParams();

  const fetchEmployee = async () => {
    try {
      const res = await axios.get(
        `https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`
      );

      setEmployee(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  return (
    <>
      <div className={styles['employee-info-header-container']}>
        <img
          className={styles['employee-avatar']}
          src={employee?.photo}
          alt="employee-avatar"
        />
        <div className={styles['employee-info-header__content']}>
          <h1>{employee?.name}</h1>
          <p>{employee?.position}</p>
          <ul className={styles['stack-list-desktop']}>
            {employee?.stack.map((item) => (
              <li key={item} className={styles['stack-list-item']}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className={styles['stack-list-mobile']}>
        {employee?.stack.map((item) => (
          <li key={item} className={styles['stack-list-item']}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles['divider']}></div>

      <div className={styles['employee-main-info-container']}>
        <h2>Основная информация</h2>
        <ul className={styles['main-info-list']}>
          <li className={styles['main-info-list-item']}>
            <h3>Контактный телефон:</h3>
            <p>{employee?.phone}</p>
          </li>
          <li className={styles['main-info-list-item']}>
            <h3>Дата рождения:</h3>
            <p>{employee && convertDate(employee?.birthdate)}</p>
          </li>
          <li className={styles['main-info-list-item']}>
            <h3>Дата устройства:</h3>
            <p>{employee && convertDate(employee.dateOfEmployment)}</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EmployeePage;
