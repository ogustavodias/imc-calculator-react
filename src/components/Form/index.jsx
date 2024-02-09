import styles from "./styles.module.css";

const Form = () => {
  return (
    <form className={styles.Form}>
      <div className={styles.InputContainer}>
        <input type="number" placeholder="peso" />
        <input type="number" placeholder="altura" />
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default Form;
