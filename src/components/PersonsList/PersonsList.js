import styles from './PersonsList.module.css';
import Card from '../GUICommon/Card';

const PersonsList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((person) => (
          <li key={person.key}>
            {person.name} ({person.age} yeras old!)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default PersonsList;
