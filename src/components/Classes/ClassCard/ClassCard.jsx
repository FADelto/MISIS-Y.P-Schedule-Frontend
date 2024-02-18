import React from "react";
import styles from "../classes.module.css";
import logo from "../../../assets/images/misis-logo.png";

export default function ClassCard({ className, classType, time, setOpenClass, setHidePagination, setChosenClass }) {

  const handleClassOpen = () => {
    if (!!className) {
      setOpenClass(true);
      setHidePagination(true);
      setChosenClass({
        className,
        classType,
        time
      })
    }
  }

  return (
    <div>
      <div className={styles.class} onClick={handleClassOpen}>
        <div className={styles.block1}>
          <div className={styles.time}>
            {time.start} <br />-<br />
            {time.end}
          </div>
          <div
            className={`${styles.type} ${classType === "П"
              ? styles.type1
              : classType === "Л"
                ? styles.type2
                : ""
              }`}
          >
            <div>
              {classType === "П" || classType === "Л" ? (
                <div>{classType}</div>
              ) : (
                <div className={styles.smallLine}></div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.block2}>
          <div className={styles.title}>{className}</div>
          <div
            className={`${styles.description} ${!className && styles.line}`}
          ></div>
        </div>
        <div className={styles.block3}>
          <div className={styles.image}>
            <img src={logo} alt="Vector" />
          </div>
        </div>
      </div>
    </div>
  );
}
