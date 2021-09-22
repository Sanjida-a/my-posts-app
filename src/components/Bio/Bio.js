import styles from './Bio.module.scss'

const Bio = ({headshot, name, tagline, role}) => {
    return (
        <div className={styles.bio}>
            <div className={styles.bioImage}>
                <img src = {headshot} alt ={'headshot of ${name}'}/>
            </div>
            <div className={styles.bioContent}>
                <p className={styles.bioName}>
                    {name}
                </p>
                <p className={styles.bioTag}>
                    {tagline}
                </p>
                <p className={styles.bioRole}>
                    {role}
                </p>

            </div>
        </div>
    );
}
export default Bio;

