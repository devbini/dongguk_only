import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import logo from "../image/logo.png";
import kakaologo from "../image/kakao.png";
import instalogo from "../image/insta.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <Image
              src={logo}
              alt="온리 로고"
              fill
              className={styles.logo}
              priority
            />
          </div>

          {/* Text and Links */}
          <div className={styles.textContent}>
            <h1>미래를 여는 열쇠, 온리</h1>
            <p>동국대학교 미래융합대학 7대 대의원회</p>

            <div className={styles.socialLinks}>
              <Link
                href="https://open.kakao.com/o/sl9t586g"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={kakaologo} alt="KakaoTalk" width={48} height={48} />
              </Link>
              <Link
                href="https://www.instagram.com/only_dgu.future/"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={instalogo} alt="Instagram" width={48} height={48} />
              </Link>
            </div>

            <Link href="#" className={styles.button}>
              미래융합대학 학생회칙 {">>"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
