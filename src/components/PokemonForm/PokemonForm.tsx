"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Button from "../Button/Button";
import styles from "./PokemonForm.module.css";

export default function PokemonForm() {
  const router = useRouter();
  const [pokemonName, setPokemonName] = useState("");
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pokemonName.trim()) {
      router.push(`/${pokemonName.toLowerCase()}`);
    }
  };

  useEffect(() => {
    setPokemonName(pathname.split("/")[1]);
  }, [pathname]);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={pokemonName}
          onChange={({ target: { value } }) => setPokemonName(value)}
          placeholder="Enter Pokemon name"
          className={styles.input}
          required
        />
      </div>
      <Button type="submit" variant="primary">
        Search
      </Button>
    </form>
  );
}
