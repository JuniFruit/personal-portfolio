import { FC } from "react";
import { IoAddSharp, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { images } from "../../../../../assets/images/images";
import { IconLink } from "../../../../ui/buttons/link/IconLink";
import styles from "./OutputWindow.module.scss";

const AboutOutputWindow: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <IconLink href="https://github.com/JuniFruit" target={"_blank"}>
          <IoLogoGithub />
        </IconLink>
        <IconLink
          href="https://www.linkedin.com/in/artyom-nebyansky-494427240/"
          target={"_blank"}
        >
          <IoLogoLinkedin />
        </IconLink>
        <div className={styles.placeholder}>
          <IoAddSharp />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.img_container}>
          <img src={images.profile_pic} alt={"Me on a mountain"} />
        </div>
      </div>
    </div>
  );
};

export default AboutOutputWindow;
