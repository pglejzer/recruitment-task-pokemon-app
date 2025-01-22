"use client";

import Image from "next/image";
import { useState } from "react";
import { PokemonDetailsProps } from "./PokemonDetails.types";
import styles from "./PokemonDetails.module.css";

export default function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const [isShiny, setIsShiny] = useState(false);
  const [showFront, setShowFront] = useState(true);
  const { name, sprites, types, height, weight, stats, abilities } = pokemon;

  const currentSprite = isShiny
    ? showFront
      ? sprites.front_shiny
      : sprites.back_shiny
    : showFront
    ? sprites.front_default
    : sprites.back_default;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.imageContainer}>
        <Image
          alt={name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={currentSprite}
        />
      </div>

      <div className={styles.controls}>
        <button className={styles.button} onClick={() => setIsShiny(!isShiny)}>
          {isShiny ? "Normal" : "Shiny"} Version
        </button>
        <button
          className={styles.button}
          onClick={() => setShowFront(!showFront)}
        >
          {showFront ? "Back" : "Front"} View
        </button>
      </div>

      <div className={styles.types}>
        {types.map(({ type }) => (
          <span
            key={type.name}
            className={`${styles.type} ${styles[type.name]}`}
          >
            {type.name}
          </span>
        ))}
      </div>

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <span>Height:</span> {height / 10}m
        </div>
        <div className={styles.infoItem}>
          <span>Weight:</span> {weight / 10}kg
        </div>
      </div>

      <div className={styles.stats}>
        {stats.map(({ stat, base_stat }) => (
          <div key={stat.name} className={styles.statItem}>
            <div className={styles.statLabel}>{stat.name}</div>
            <div className={styles.statBar}>
              <div
                className={styles.statFill}
                style={{ width: `${(base_stat / 255) * 100}%` }}
              >
                {base_stat}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.abilities}>
        <h3>Abilities</h3>
        <div className={styles.abilityList}>
          {abilities.map(({ ability }) => (
            <span key={ability.name} className={styles.ability}>
              {ability.name.replace("-", " ")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
