import styles from "./Drawer.module.scss"

function Drawer({ onCloseCart, items = [] }) {
   return (
      <div className={styles.overlay}>
         <div className={styles.drawer}>
            <h2>Корзина <img onClick={onCloseCart} className={styles.removeBtn} src="/img/btn-remove.svg" alt="close"></img></h2>
            <div className={styles.items}>
               {items.map((obj) => (
                  <div className={styles.cartItem}>
                     <img width={70} height={70} src={obj.imageUrl} alt="sneakers"></img>
                     <div className={styles.cartInfo}>
                        <p>{obj.title}</p>
                        <b>{obj.price} руб.</b>
                     </div>
                     <img className={styles.removeBtn} src="/img/btn-remove.svg" alt="remove"></img>
                  </div>
               ))}
            </div>
            <div className={styles.cartSum}>
               <ul >
                  <li>
                     <span>
                        Итого:
                     </span>
                     <div></div>
                     <b>21 498 руб.</b>
                  </li>
                  <li>
                     <span>
                        Налог 5%:
                     </span>
                     <div></div>
                     <b>1074 руб.</b>
                  </li>
               </ul>
               <button className={styles.greenButton}>Оформить заказ <img src="/img/arrow-right.svg" alt="arrow"></img></button>
            </div>
         </div>
      </div>
   )
}

export default Drawer;