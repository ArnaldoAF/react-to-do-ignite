import styles from './ChipText.module.css';

interface ChipTextProps {
    label: string;
    value: string;
    isPurple?: boolean
}

export function ChipText(props: ChipTextProps) {
    const { label, value, isPurple = false } = props;
    return (
        <div className={styles.chipText}>
            <strong className={isPurple ? styles.labelPurple : styles.label}>{label}</strong>
            <strong className={styles.chip}>{value}</strong>
        </div>
    )
}