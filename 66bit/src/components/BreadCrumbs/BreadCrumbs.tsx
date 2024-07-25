import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './BreadCrumbs.module.css';

const fetchEmployeeNameById = async (id: string) => {
  try {
    const res = await axios.get(
      `https://frontend-test-api.stk8s.66bit.ru/api/Employee/${id}`
    );
    return res.data.name;
  } catch (err) {
    console.error(err);
    return 'Ошибка';
  }
};

const BreadCrumbs = () => {
  const location = useLocation();
  const { id } = useParams();

  const [employeeName, setEmployeeName] = useState('');

  useEffect(() => {
    if (id) {
      fetchEmployeeNameById(id).then((name) => setEmployeeName(name));
    }
  }, [id]);

  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => segment !== '');

  let currentLink = '';

  const crumbs = pathSegments.map((segment, index) => {
    currentLink += `/${segment}`;

    let crumbName = segment;

    if (currentLink === '/main') {
      crumbName = 'Главная';
    } else if (segment === 'employees') {
      crumbName = 'Список сотрудников';
    } else if (index === pathSegments.length - 1 && id) {
      crumbName = employeeName || 'Сотрудник';
    }

    return (
      <div className={styles['crumb']} key={currentLink}>
        <Link className={styles['crumb-link']} to={currentLink}>
          <span className={styles['crumb-text']}>{crumbName}</span>
        </Link>
        {index < pathSegments.length - 1 && (
          <img
            className={styles['crumb-arrow']}
            src="/bread-crumb-arrow.png"
            alt=""
          />
        )}
      </div>
    );
  });

  const showCrumbs = crumbs.length > 2 ? crumbs.slice(-2) : crumbs;

  return (
    <nav>
      <div className={styles['crumbs-container']}>{showCrumbs}</div>
    </nav>
  );
};

export default BreadCrumbs;
