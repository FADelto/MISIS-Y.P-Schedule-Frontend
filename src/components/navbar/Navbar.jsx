import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Button, ConfigProvider } from "antd";
import bell from "../../assets/images/bell.svg";
import sceduleIcom from "../../assets/images/schedule.svg";
import taskIcon from "../../assets/images/icon-list.svg";
import settingIcon from "../../assets/images/settings.svg";

const Navbar = ({ tabSetting, setTab }) => {
  const [currentPage, setCurrentPage] = useState("Расписание");
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            borderRadius: "15px",
            colorPrimary: "#009FDF",
            colorLink: "#009FDF",
            borderColorDisabled: "transparent",
            colorTextDisabled: "#009FDF",
            colorBgContainerDisabled: "rgba(0, 159, 223, 0.15)",
          },
        },
      }}
    >
      <div className={styles.navbar}>
        <Button
          className={styles.button}
          icon={<img src={sceduleIcom} alt="scheduleIcon" />}
          disabled={currentPage === "Расписание" ? true : false}
          type={currentPage === "Расписание" ? "primary" : "link"}
          onClick={() => {
            setTab(tabSetting["schedule"]);
            setCurrentPage("Расписание");
          }}
        >
          {currentPage === "Расписание" ? currentPage : ""}
        </Button>
        <Button
          className={styles.button}
          icon={<img src={taskIcon} alt="taskIcon" />}
          disabled={currentPage === "Задачи" ? true : false}
          type={currentPage === "Задачи" ? "primary" : "link"}
          onClick={() => {
            setTab(tabSetting["tasks"]);
            setCurrentPage("Задачи");
          }}
        >
          {currentPage === "Задачи" ? currentPage : ""}
        </Button>
        <Button
          className={styles.button}
          icon={<img src={bell} alt="bell" />}
          disabled={currentPage === "Новости" ? true : false}
          type={currentPage === "Новости" ? "primary" : "link"}
          onClick={() => {
              setTab(tabSetting["news"]);
              setCurrentPage("Новости");
          }}
        >
          {currentPage === "Новости" ? currentPage : ""}
        </Button>
        <Button
          className={styles.button}
          icon={<img src={settingIcon} alt="settingIcon" />}
          disabled={currentPage === "Настройки" ? true : false}
          type={currentPage === "Настройки" ? "primary" : "link"}
          onClick={() => {
              setTab(tabSetting["settings"]);
              setCurrentPage("Настройки");
          }}
        >
          {currentPage === "Настройки" ? currentPage : ""}
        </Button>
      </div>
    </ConfigProvider>
  );
};

export default Navbar;
