import styles from "./cta.module.scss";

function CtaSection() {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>What are you working on?</h2>

            <p className={styles.subheading}>
                Let&apos;s have a conversation! I would love to hear about what
                you&apos;re working on and find a way to work together.
            </p>

            <button className={styles.contactBtn}>Contact</button>
        </div>
    );
}

export default CtaSection;
