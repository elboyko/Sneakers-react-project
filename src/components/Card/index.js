import React from "react";
import styles from "./Card.module.scss"


function Card({ title, price, imageUrl, onPlus }) {
   const [isAdded, setIsAdded] = React.useState(false);
   const [isFavorite, setIsFavorite] = React.useState(false);

   const onClickPlus = () => {
      onPlus({ title, price, imageUrl })
      setIsAdded(!isAdded);
   };

   const onClickFavorite = () => {
      setIsFavorite(!isFavorite)

   }


   return (
      <div className={styles.card} >
         <div className={styles.favorite} onClick={onClickFavorite} ><img src={isFavorite ? "/img/heart-like.svg" : "/img/heart-unlike.svg"} alt="unlike" />
         </div>
         <img width={133} height={112} src={imageUrl} alt="sneakers" />
         <h5>{title}</h5>
         <div className={styles.cardBottom}>
            <div className={styles.cardInfo}>
               <span>Цена:</span>
               <b>{price} руб.</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus} src={isAdded ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'} alt="plus"></img>
         </div>
      </div>
   )
}
export default Card;