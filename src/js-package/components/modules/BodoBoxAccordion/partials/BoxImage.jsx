import styles from "./box-image.module.css";

export default function BoxImage(props) {
  const { image_field } = props;

  return (
    <>   
        <img className={styles.boxImage} src={image_field.src} alt={image_field.alt} width={image_field.width} height={image_field.height} />
    </>
  );
}