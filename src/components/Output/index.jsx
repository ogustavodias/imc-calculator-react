import styles from "./styles.module.css";

const Output = ({ data }) => {
  const result = +data.bmi <= 18.5 ? 'Baixo peso' : +data.bmi <= 24.99 ?  'Normal' : +data.bmi <= 29.99 ?  'Sobrepeso' : 'Obesidade';
  const color = result === 'Normal' ? '#4ffb43' : result === 'Sobrepeso' ?  '#d75413' : '#ff0000';

  return (
    <div className={styles.Output}>
      <span className={styles.result} style={{backgroundColor: `${color}` }}>{result}</span>
      <span className={styles.bmi}>{data.bmi}</span>
    </div>
  );
};

export default Output;
