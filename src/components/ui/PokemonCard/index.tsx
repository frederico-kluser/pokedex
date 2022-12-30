import React, { useEffect, useRef, useState } from 'react';
import Loader from 'src/components/core/Loader';

import styles from './style.module.css';

interface InterfacePokemonCard {
  img: string;
  type: string[];
  name: string,
  num: string,
};

const PokemonCard = ({ img, name, num, type }: InterfacePokemonCard) => {
  const image = useRef() as React.MutableRefObject<HTMLImageElement>;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (image?.current?.complete) {
      setLoaded(true);
    }
}, [])

  return (
    <div className={styles.card}>
      <>
        <h2 className={styles.title}>{ name }</h2>
        {type.map((item) => <div key={item} className={styles.type}>{item}</div>)}
        <span className={styles.id}>#{num}</span>
        <div className={styles.loader}>
          <Loader color='#FFFFFF' loading={!loaded} size={150} transparentColor="#FFCC01" />
        </div>
        <img alt={`pokemon ${name} image`} ref={image} className={styles.image} src={img} onLoad={() => {
          setLoaded(true);
        }} width={160} height={160} />
        <div className={styles.cover}></div>
      </>
    </div>
  )
};

export default PokemonCard;
