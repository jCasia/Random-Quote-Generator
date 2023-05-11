import styles from './App.module.scss';
import { useState } from 'react';
import axios from 'axios';

import diceIcon from './assets/images/icon-dice.svg';
import patternDividerPhone from './assets/images/pattern-divider-mobile.svg';
// import patternDiviDesktop from './assets/images/pattern-divider-desktop.svg';

const randomQuoteUrl = 'https://api.adviceslip.com/advice';

function App() {
  const [randomQuote, setRandomQuote] = useState('Random Quote Generator');
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(randomQuoteUrl);
      setRandomQuote(data.slip.advice);
      setId(data.slip.id);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles['card-container']}>
        <p className={styles.advice}>Advice #{id}</p>
        <blockquote className={styles.quote}>
          &ldquo;{randomQuote}&rdquo;
        </blockquote>
        <div className={styles.divider}>
          <img
            src={patternDividerPhone}
            alt='pattern divider'
            role='presentation'
          />
        </div>
        <button onClick={fetchData} type='button'>
          <img src={diceIcon} alt='dice icon' aria-label='button' />
        </button>
      </div>
    </main>
  );
}

export default App;
