import css from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <div className={css.hero}>
      <h1>BagPack</h1>
      <p>plan + check + go</p>
    </div>
  );
};

export default HomeHero;
