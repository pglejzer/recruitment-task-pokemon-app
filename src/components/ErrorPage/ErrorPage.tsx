import Link from "next/link";
import styles from "./ErrorPage.module.css";
import { ErrorPageProps } from "./ErrorPage.types";

export default function ErrorPage({
  code = 404,
  title = "Oops!",
  message = "The page you are looking for does not exist.",
}: ErrorPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.code}>{code}</h1>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        <Link href="/" className={styles.link}>
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}

