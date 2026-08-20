function InputNumber({ value, onChange }) {
    return (
        <input
            className="input"
            type="number"
            value={value}
            onChange={onChange}
            placeholder="Ingresa tu intento"
        />
    );
}
export default InputNumber;