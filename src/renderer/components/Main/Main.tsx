import Header from '../Header/Header';
import Timer from '../Timer/Timer';
import style from './Main.module.css';

function Main() {
  return (
    <div>
      <Header />
      <div className={style.h1text}>Cross-Platform App</div>
      <Timer />
    </div>
  );
}

export default Main;
