import React, { useState } from "react";
import styles from "../index.module.scss";
import Index from "./HistoryTab";
import PromoTab from "./PromoTab";
import { useUser } from '@/shared/context/UserContext';

const Tabs = () => {
    const [active, setActive] = useState <"history" | "promo"> ("history");
    const {user } = useUser();

    if (!user) {
        return <div className={styles.tabsNotAuth}>войдите чтобы видеть информацию профиля</div>;
    }

    return (
        <div className={styles.tabsWrapper}>
            <div className={styles.tabs}>
                <button
                    className={active === "promo" ? styles.activeTab : ""}
                    onClick={() => setActive("promo")}>
                    Промокоды
                </button>
                <button
                    className={active === "history" ? styles.activeTab : ""}
                    onClick={() => setActive("history")}>
                    История
                </button>
            </div>
            <div>
                {active === "history" ?<Index /> : <PromoTab />}
            </div>
        </div>
    );
};

export default Tabs;