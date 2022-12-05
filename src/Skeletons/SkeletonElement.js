import React from "react";
import STYLE from "./Skeleton.module.css";

export const SkeletonElement = () => {
  return (
    <div className={STYLE.skeletonItem}>
      <div className={STYLE.image}></div>
      <div className={STYLE.title}></div>
      <div className={STYLE.price}></div>
      <div className={STYLE.addBtn}></div>
    </div>
  );
};
