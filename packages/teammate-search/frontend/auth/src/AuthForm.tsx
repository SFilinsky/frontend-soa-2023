import styles from './AuthForm.module.css';

export const AuthForm = () => {
    return (
        <div className={styles.form}>
            <input placeholder={"Your email"}/>
        </div>
    );
};
