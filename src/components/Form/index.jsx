import styles from "./styles.module.css";

const Form = ({ setData, data }) => {
  function calculate(event) {
    event.preventDefault();
    const bmi = data?.peso / data?.altura ** 2;
    setData((previous) => ({ ...previous, bmi: bmi.toFixed(1) }));
  }

  return (
    <form className={styles.Form} onSubmit={calculate}>
      <div className={styles.InputContainer}>
        <input
          type="number"
          placeholder="peso, ex: 80.5"
          min="1"
          step={0.1}
          required
          onInput={({ target }) =>
            setData((previous) => ({ ...previous, peso: target.value }))
          }
        />
        <input
          type="number"
          placeholder="altura, ex: 1.72"
          min="0.54"
          max="2.51"
          step="0.01"
          required
          onInput={({ target }) =>
            setData((previous) => ({ ...previous, altura: target.value }))
          }
        />
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default Form;
