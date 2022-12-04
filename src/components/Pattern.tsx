import { FC, memo } from "react";
import PatternLock from "react-pattern-lock";

type PatternProps = {};

const Pattern: FC<PatternProps> = (props) => {
  return (
    <>
      <PatternLock />
    </>
  );
};

Pattern.defaultProps = {};

export default memo(Pattern);
