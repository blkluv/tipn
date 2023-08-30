import styles from '../../../styles/Footer.module.css';
import { Twitter } from '@mui/icons-material';
import { Copyright } from '@mui/icons-material';
import 'material-icons/iconfont/material-icons.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <Copyright style={{fontSize: '0.8rem'}}/> 2022
      </div>
      <div className={styles.poweredBy}>
        <a
          href="https://solana.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.box}>
            Made with{' '}
            <img src="/solana.png" alt="Solana Logo" width={98} height={40} />
          </div>
        </a>
      </div>
      <div className={styles.footerLinks}>
        <a href="/faq">FAQ</a>

        <div className={styles.footerSocial}>
          <a href="https://twitter.com/luvnft" 
          target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
          <a href="https://discord.gg/Sp9fubxqgf" 
          target="_blank" rel="noopener noreferrer">
            <span className='material-icons'>Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
}