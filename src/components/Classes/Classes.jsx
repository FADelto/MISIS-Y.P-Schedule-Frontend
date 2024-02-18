import React, { useEffect, useState } from "react";
import styles from "./classes.module.css";
import ClassCard from "./ClassCard/ClassCard";
import ClassPage from "./ClassPage/ClassPage";

export default function Classes({ classes, chosenDay, setHidePagination }) {
  const [currentClasses, setCurrentClasses] = useState(classes);
  const [openClass, setOpenClass] = useState(false);


  useEffect(() => {
    // if (classes.length > 0) {
    setCurrentClasses((prevCurrentClasses) => {
      const newClasses = classes.filter((el) => el.dayOfYear === chosenDay);
      return newClasses;
    });
    // }
  }, [classes, chosenDay]);

  const classTime = [
    {
      id: 2,
      start: "10:00",
      end: "11:30",
    },
    {
      id: 3,
      start: "11:30",
      end: "13:00",
    },
    {
      id: 4,
      start: "14:00",
      end: "15:00",
    },
    {
      id: 5,
      start: "16:20",
      end: "17:55",
    },
    {
      id: 6,
      start: "18:00",
      end: "19:25",
    },
    {
      id: 7,
      start: "19:25",
      end: "21:00",
    },
  ];

  const classTypes = {
    ONLINE: "П",
    LECTURE: "Л",
  };

  return (
    <>
      {!openClass ? (<div className={styles.classesContainer}>
        {classTime.map((el, ind) => {
          const lesson = currentClasses.find((elem) => elem.timeStart === el.id);
          console.log(lesson);
          const className = lesson?.name;
          const classType = lesson?.lessonType;
          return (
            <ClassCard
              time={el}
              key={ind}
              className={className}
              classType={classTypes[classType]}
              setOpenClass={setOpenClass}
              setHidePagination={setHidePagination}
            />
          );
        })}
      </div>) : (
        <ClassPage
          setOpenClass={setOpenClass}
          setHidePagination={setHidePagination}
        />
      )}
    </>
  );
}
