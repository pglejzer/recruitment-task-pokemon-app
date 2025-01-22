import { LayoutProps } from "./Layout.types";
import styles from "./Layout.module.css";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Pokemon App</h1>
        </header>
        {children}
      </div>
    </div>
  );
}
