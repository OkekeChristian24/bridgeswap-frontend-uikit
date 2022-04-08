import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M11.7011 13.75C11.7011 14.0214 11.8226 14.2855 12.0472 14.5022C12.2717 14.719 12.5872 14.8767 12.946 14.9516C13.3047 15.0264 13.6872 15.0143 14.0356 14.917C14.384 14.8198 14.6794 14.6427 14.8772 14.4125L19.4969 11.0538C19.6565 10.9376 19.7831 10.7998 19.8694 10.648C19.9557 10.4963 20.0001 10.3337 20 10.1696C19.9999 10.0054 19.9554 9.84281 19.8689 9.69114C19.7824 9.53948 19.6558 9.40168 19.4961 9.28563C19.3364 9.16957 19.1469 9.07752 18.9383 9.01475C18.7297 8.95197 18.5061 8.91969 18.2804 8.91975C18.0546 8.9198 17.8311 8.9522 17.6226 9.01509C17.4141 9.07797 17.2246 9.17011 17.065 9.28625L15.1401 10.6862V1.25C15.1401 0.918479 14.9591 0.600537 14.6368 0.366117C14.3145 0.131696 13.8773 0 13.4215 0C12.9657 0 12.5285 0.131696 12.2062 0.366117C11.8839 0.600537 11.7028 0.918479 11.7028 1.25V13.6875V13.75H11.7011Z" fill="white"/>
      <path d="M8.3188 6.25C8.3188 5.97858 8.19733 5.71453 7.97275 5.49776C7.74816 5.28098 7.43267 5.12327 7.07395 5.04844C6.71522 4.97361 6.33275 4.98574 5.98434 5.08299C5.63593 5.18025 5.34051 5.35734 5.14272 5.58751L0.524685 8.94625C0.360536 9.06156 0.229605 9.1995 0.139532 9.352C0.0494585 9.50451 0.00204791 9.66853 6.48914e-05 9.8345C-0.00191812 10.0005 0.0415665 10.1651 0.127982 10.3187C0.214398 10.4723 0.342013 10.6119 0.503383 10.7292C0.664752 10.8466 0.856644 10.9394 1.06786 11.0023C1.27908 11.0651 1.50539 11.0968 1.73359 11.0953C1.96179 11.0939 2.18732 11.0594 2.397 10.9939C2.60668 10.9284 2.79633 10.8331 2.95487 10.7138L4.88148 9.31376V18.75C4.88148 19.0815 5.06255 19.3995 5.38487 19.6339C5.70718 19.8683 6.14432 20 6.60014 20C7.05596 20 7.4931 19.8683 7.81541 19.6339C8.13772 19.3995 8.3188 19.0815 8.3188 18.75V6.31251V6.25Z" fill="white"/>
    </Svg>
  );
};

export default Icon;
