import { FC } from "react";
import { resources } from "../../util/resources";
import cx from "classnames";
import styles from "./SearchWedgit.module.scss";
import swapIcon from "../../assets/icon/swapIcon.svg";
import addIcon from "../../assets/icon/addIcon.svg";
import minus from "../../assets/icon/minus.svg";
import { Button } from "@chakra-ui/react";

const SearchWedgit: FC = () => {
  return (
    <div className={styles.search_box}>
      <div className={cx("flex_between_center", styles.root_gap)}>
        <div>
          <div>
            <p className="inter1010700blue">{resources.from}</p>
            <input autoFocus className={cx("input_no_border", "inter2424700primary", styles.input_place)} type="text" />
          </div>
          <p className={cx("inter1010400Secondary")}>BIHAR</p>
        </div>
        <img src={swapIcon} alt="swap icon" />
        <div>
          <div>
            <p className={cx("inter1010700blue", "textAlignRight")}>{resources.to}</p>
            <input className={cx("input_no_border", "inter2424700primary", styles.input_place, "textAlignRight")} type="text" />
          </div>
          <p className={cx("textAlignRight", "inter1010400Secondary")}>BIHAE</p>
        </div>
      </div>
      <div className={styles.departure_date}>
        <p className="inter1010700blue">{resources.departureDate}</p>
        <input type="date" />
      </div>
      <div className="flex_between_center">
        <div>
          <p className="inter1010700blue">{resources.passenger}</p>
          <div className={styles.passenger_count}>
            <img src={minus} alt="min" />
            <p>1</p>
            <img src={addIcon} alt="min" />
          </div>
        </div>
        <Button className="button_md" variant="solid">{resources.search}</Button>
      </div>
    </div>
  );
};

export default SearchWedgit;
