import { FC } from "react";
import { Button } from "../../ui/buttons/button/Button";
import { ButtonLink } from "../../ui/buttons/link/ButtonLink";
import HeadingSection from "../../ui/headers/HeadingSection";
import styles from "./ResumeComp.module.scss";

const ResumeComp: FC = () => {
  return (
    <div className={styles.wrapper}>
      <HeadingSection>You can download my CV right away</HeadingSection>
      <ButtonLink href="https://drive.google.com/uc?export=download&id=1XDLSdzUIt7wRtXNoZiASshnIQSQJ_mKi">
        Download
      </ButtonLink>
    </div>
  );
};

export default ResumeComp;
