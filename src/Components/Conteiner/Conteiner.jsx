import style from './Container.module.scss';
export const Container = ({ children }) => (
  <section className={style.container}>{children}</section>
);
