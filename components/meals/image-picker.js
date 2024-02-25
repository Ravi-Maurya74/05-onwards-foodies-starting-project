import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg, image/jpg"
          name={name}
        />
      </div>
    </div>
  );
}
