import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import style from "../css/navbar.module.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    const barsElement = document.querySelector(`.${style.bars}`);
    barsElement.classList.toggle("closed");
  };
  return (
    
    <header className={style.header}>
      <nav className={style.nav}>
        <div className={style.nav_logo}>
          <a href="/" className={style.logo}>
            <Image src="/Logo.svg" width={30} height={30} alt="Doc image" />
          </a>
          <span className={style.text_wrapper}>
            <Image
              className={style.name}
              src="/Mahith Paul.svg"
              width={100}
              height={50}
              alt="Doc image"
            />
          </span>
        </div>
        <ul className={style.nav_links}>
          <li className={style.nav_link}>
            {/* <Image
              className={style.number}
              src="/01.svg"
              width={40}
              height={20}
              alt="Doc image"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 131 107"
              fill="none"
              className={style.number}
            >
              <path
                d="M10.2664 88.3025L10.2714 88.3099C17.9748 99.7109 29.3002 105.4 44.1 105.4C58.9969 105.4 70.3737 99.7131 78.0786 88.3099L78.0835 88.3025C83.9265 79.4867 86.8 67.8233 86.8 53.4C86.8 48.5157 86.4705 43.9479 85.8077 39.7H103.739V102V103H104.739H128.289H129.289V102V4.65002V3.65002H128.289H108.039H107.2L107.054 4.47624C106.207 9.27635 103.482 13.3618 98.7574 16.7363L98.7495 16.742C94.1473 20.0978 88.409 21.8525 81.4746 21.9501L80.4887 21.964V22.6096C79.7524 21.1769 78.951 19.8065 78.0844 18.4988C70.5759 7.08297 59.1906 1.40002 44.1 1.40002C29.1064 1.40002 17.7725 7.08523 10.2655 18.4991C4.42313 27.3146 1.54999 38.9776 1.54999 53.4C1.54999 67.8233 4.42346 79.4867 10.2664 88.3025ZM27.25 53.4C27.25 44.4756 28.4422 37.5965 30.7498 32.6866C32.1833 29.8233 34.006 27.729 36.1965 26.3455C38.3879 24.9615 41.0087 24.25 44.1 24.25C47.1913 24.25 49.8121 24.9615 52.0035 26.3455C54.1967 27.7307 56.0212 29.8285 57.4556 32.6972C59.8558 37.4976 61.1 44.3689 61.1 53.4C61.1 62.4311 59.8558 69.3024 57.4556 74.1028C56.0212 76.9715 54.1967 79.0694 52.0035 80.4545C49.8121 81.8386 47.1913 82.55 44.1 82.55C41.0087 82.55 38.3879 81.8386 36.1965 80.4545C34.006 79.0711 32.1833 76.9768 30.7498 74.1135C28.4422 69.2036 27.25 62.3245 27.25 53.4Z"
                stroke="url(#paint0_linear)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="68"
                  y1="-14"
                  x2="68"
                  y2="83"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFFFFF" />
                  <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <Link href="/#about">About</Link>
          </li>
          <li className={style.nav_link}>
            {/* <Image
              className={style.number}
              src="/green.svg"
              width={40}
              height={20}
              alt="Doc image"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 159 107"
              fill="none"
              className={style.number}
            >
              <path
                d="M10.2714 88.3098L10.2664 88.3024C4.42346 79.4866 1.54999 67.8231 1.54999 53.3999C1.54999 38.9775 4.42313 27.3145 10.2655 18.4989C17.7725 7.0851 29.1064 1.3999 44.1 1.3999C59.1906 1.3999 70.5759 7.08284 78.0844 18.4987C79.9386 21.2965 81.4937 24.381 82.7528 27.7495C84.1083 21.5187 87.1949 16.0239 92.0054 11.2873L92.0108 11.282C98.8366 4.66314 108.007 1.3999 119.407 1.3999C130.505 1.3999 139.517 4.56174 146.339 10.9684C153.142 17.2575 156.557 25.0729 156.557 34.3499C156.557 47.3724 149.906 57.7682 136.868 65.5098L136.867 65.5099L118.431 76.4519C115.961 78.0249 114.195 79.6132 113.062 81.1999H156.307H157.307V82.1999V102V103H156.307H82.357H81.357V102C81.357 92.2832 83.0778 83.8272 86.5575 76.663L86.5601 76.6577C90.1647 69.3454 96.2721 63.2128 104.802 58.2367L10.2714 88.3098ZM10.2714 88.3098C17.9748 99.7108 29.3002 105.4 44.1 105.4C58.9969 105.4 70.3737 99.7129 78.0786 88.3098L78.0835 88.3024C83.9265 79.4866 86.8 67.8231 86.8 53.3999C86.8 50.3122 86.6683 47.351 86.404 44.5171L106.05 44.6499L107.424 44.6592L107.011 43.3488C106.443 41.5513 106.157 39.6533 106.157 37.6499C106.157 33.6459 107.247 30.4421 109.362 27.9563C111.531 25.5208 114.63 24.2499 118.807 24.2499C122.837 24.2499 125.746 25.3027 127.7 27.257L127.708 27.2649L127.716 27.2725C129.811 29.2762 130.857 31.7615 130.857 34.7999C130.857 37.8216 130.106 40.3626 128.642 42.4702C127.158 44.5071 124.544 46.6707 120.7 48.9381C120.7 48.9383 120.699 48.9384 120.699 48.9385L104.803 58.2361L10.2714 88.3098ZM27.25 53.3999C27.25 44.4755 28.4422 37.5964 30.7498 32.6864C32.1833 29.8232 34.006 27.7289 36.1965 26.3454C38.3879 24.9614 41.0087 24.2499 44.1 24.2499C47.1913 24.2499 49.8121 24.9614 52.0035 26.3454C54.1967 27.7306 56.0212 29.8284 57.4556 32.6971C59.8558 37.4975 61.1 44.3688 61.1 53.3999C61.1 62.431 59.8558 69.3023 57.4556 74.1027C56.0212 76.9714 54.1967 79.0692 52.0035 80.4544C49.8121 81.8384 47.1913 82.5499 44.1 82.5499C41.0087 82.5499 38.3879 81.8384 36.1965 80.4544C34.006 79.071 32.1833 76.9766 30.7498 74.1134C28.4422 69.2034 27.25 62.3243 27.25 53.3999Z"
                stroke="url(#paint0_linear)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="79"
                  y1="-14.0001"
                  x2="79"
                  y2="82.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFFFFF" />
                  <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <Link href="/#exp">Experience</Link>
          </li>
          <li className={style.nav_link}>
            {/* <Image
              className={style.number}
              src="/03.svg"
              width={40}
              height={20}
              alt="Doc image"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 159 107"
              fill="none"
              className={style.number}
            >
              <path
                d="M10.2664 88.3024L10.2714 88.3098C17.9748 99.7108 29.3002 105.4 44.1 105.4C58.9969 105.4 70.3737 99.7129 78.0786 88.3098L78.0835 88.3024C79.1652 86.6704 80.145 84.9409 81.0237 83.1144C83.0529 87.8509 86.228 92.0997 90.536 95.8538L90.5422 95.8592C97.7553 102.042 106.95 105.1 118.043 105.1C129.834 105.1 139.347 101.842 146.473 95.2331L146.473 95.2327C153.663 88.5565 157.293 80.5466 157.293 71.2499C157.293 62.8152 154.559 55.7123 149.069 50.0125C144.273 44.85 138.431 41.7784 131.58 40.8104L153.606 23.7403L153.993 23.4401V22.9499V4.6499V3.6499H152.993H82.793H81.793V4.6499V24.4499V25.3685C80.7284 22.914 79.4926 20.6236 78.0844 18.4987C70.5759 7.08284 59.1906 1.3999 44.1 1.3999C29.1064 1.3999 17.7725 7.0851 10.2655 18.4989C4.42313 27.3145 1.54999 38.9775 1.54999 53.3999C1.54999 67.8231 4.42346 79.4866 10.2664 88.3024ZM102.112 67.7165L85.119 70.8467C86.2424 65.5717 86.8 59.7536 86.8 53.3999C86.8 42.4922 85.1566 33.1628 81.8282 25.4499H82.793H120.643L98.8095 43.3262L98.1144 43.8953L98.606 44.6472L108.806 60.2472L109.307 61.0141L110.115 60.5814C112.779 59.1545 115.517 58.4499 118.343 58.4499C121.924 58.4499 124.996 59.5271 127.608 61.6726L127.617 61.6795L127.625 61.6862C130.133 63.6568 131.443 66.5859 131.443 70.6499C131.443 74.0742 130.206 76.9653 127.699 79.3796L127.693 79.3861L127.686 79.3928C125.31 81.7691 122.084 82.9999 117.893 82.9999C113.633 82.9999 110.199 81.6382 107.506 78.9489C104.895 76.2418 103.482 72.8323 103.292 68.6545L103.24 67.5087L102.112 67.7165ZM27.25 53.3999C27.25 44.4755 28.4422 37.5964 30.7498 32.6864C32.1833 29.8232 34.006 27.7289 36.1965 26.3454C38.3879 24.9614 41.0087 24.2499 44.1 24.2499C47.1913 24.2499 49.8121 24.9614 52.0035 26.3454C54.1967 27.7306 56.0212 29.8284 57.4556 32.6971C59.8558 37.4975 61.1 44.3688 61.1 53.3999C61.1 62.431 59.8558 69.3023 57.4556 74.1027C56.0212 76.9714 54.1967 79.0692 52.0035 80.4544C49.8121 81.8384 47.1913 82.5499 44.1 82.5499C41.0087 82.5499 38.3879 81.8384 36.1965 80.4544C34.006 79.071 32.1833 76.9766 30.7498 74.1134C28.4422 69.2034 27.25 62.3243 27.25 53.3999Z"
                stroke="url(#paint0_linear)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="79"
                  y1="-14.0001"
                  x2="79"
                  y2="82.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFFFFF" />
                  <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <Link href="/#projects">Projects</Link>
          </li>
          <li className={style.nav_link}>
            {/* <Image
              className={style.number}
              src="/04.svg"
              width={40}
              height={20}
              alt="Doc image"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="20"
              viewBox="0 0 170 107"
              fill="none"
              className={style.number}
            >
              <path
                d="M10.2664 88.3024L10.2714 88.3098C17.9748 99.7108 29.3002 105.4 44.1 105.4C58.9969 105.4 70.3737 99.7129 78.0786 88.3098L78.0835 88.3024C79.6249 85.9768 80.9596 83.4531 82.0894 80.7328V81.7499V82.7499H83.0894H127.089V102V103H128.089H151.789H152.789V102V82.7499H167.389H168.389V81.7499V61.9499V60.9499H167.389H152.789V4.6499V3.6499H151.789H123.589H123.094L122.794 4.04345L86.7786 51.2641C86.5062 37.8219 83.6356 26.8749 78.0844 18.4987C70.5759 7.08284 59.1906 1.3999 44.1 1.3999C29.1064 1.3999 17.7725 7.0851 10.2655 18.4989C4.42313 27.3145 1.54999 38.9775 1.54999 53.3999C1.54999 67.8231 4.42346 79.4866 10.2664 88.3024ZM27.25 53.3999C27.25 44.4755 28.4422 37.5964 30.7498 32.6864C32.1833 29.8232 34.006 27.7289 36.1965 26.3454C38.3879 24.9614 41.0087 24.2499 44.1 24.2499C47.1913 24.2499 49.8121 24.9614 52.0035 26.3454C54.1967 27.7306 56.0212 29.8284 57.4556 32.6971C59.8558 37.4975 61.1 44.3688 61.1 53.3999C61.1 62.431 59.8558 69.3023 57.4556 74.1027C56.0212 76.9714 54.1967 79.0692 52.0035 80.4544C49.8121 81.8384 47.1913 82.5499 44.1 82.5499C41.0087 82.5499 38.3879 81.8384 36.1965 80.4544C34.006 79.071 32.1833 76.9766 30.7498 74.1134C28.4422 69.2034 27.25 62.3243 27.25 53.3999ZM105.658 60.9499L127.089 32.8131V60.9499H105.658Z"
                stroke="url(#paint0_linear)"
                stroke-width="2"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="83.5"
                  y1="-14.0001"
                  x2="83.5"
                  y2="82.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFFFFF" />
                  <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={style.mobile_menu}>
          <div className={style.bars} onClick={toggleMobileMenu}>
            {/* Add the SVG code for the close animation */}
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20">
                <path
                  fill="transparent"
                  stroke="#c4c4c4"
                  strokeWidth="1.5"
                  d="M 2 2 L 18 18"
                ></path>
                <path
                  fill="transparent"
                  stroke="#c4c4c4"
                  strokeWidth="1.5"
                  d="M 18 2 L 2 18"
                ></path>
              </svg>
            ) : (
              <svg width="57" height="20" viewBox="0 0 26 20">
                <path
                  fill="transparent"
                  stroke="#c4c4c4"
                  strokeWidth="1.5"
                  d="M 2 2.5 L 57 2.5"
                ></path>
                <path
                  fill="transparent"
                  stroke="#c4c4c4"
                  strokeWidth="1.5"
                  d="M 2 9.423 L 57 9.423"
                  opacity="1"
                ></path>
                <path
                  fill="transparent"
                  stroke="#c4c4c4"
                  strokeWidth="1.5"
                  d="M 2 16.346 L 27 16.346"
                ></path>
              </svg>
            )}
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className={style.mobile_menu_links}>
          <ul className={style.menu_links}>
            <li className={style.nav_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="20"
                viewBox="0 0 131 107"
                fill="none"
                className={style.number}
              >
                <path
                  d="M10.2664 88.3025L10.2714 88.3099C17.9748 99.7109 29.3002 105.4 44.1 105.4C58.9969 105.4 70.3737 99.7131 78.0786 88.3099L78.0835 88.3025C83.9265 79.4867 86.8 67.8233 86.8 53.4C86.8 48.5157 86.4705 43.9479 85.8077 39.7H103.739V102V103H104.739H128.289H129.289V102V4.65002V3.65002H128.289H108.039H107.2L107.054 4.47624C106.207 9.27635 103.482 13.3618 98.7574 16.7363L98.7495 16.742C94.1473 20.0978 88.409 21.8525 81.4746 21.9501L80.4887 21.964V22.6096C79.7524 21.1769 78.951 19.8065 78.0844 18.4988C70.5759 7.08297 59.1906 1.40002 44.1 1.40002C29.1064 1.40002 17.7725 7.08523 10.2655 18.4991C4.42313 27.3146 1.54999 38.9776 1.54999 53.4C1.54999 67.8233 4.42346 79.4867 10.2664 88.3025ZM27.25 53.4C27.25 44.4756 28.4422 37.5965 30.7498 32.6866C32.1833 29.8233 34.006 27.729 36.1965 26.3455C38.3879 24.9615 41.0087 24.25 44.1 24.25C47.1913 24.25 49.8121 24.9615 52.0035 26.3455C54.1967 27.7307 56.0212 29.8285 57.4556 32.6972C59.8558 37.4976 61.1 44.3689 61.1 53.4C61.1 62.4311 59.8558 69.3024 57.4556 74.1028C56.0212 76.9715 54.1967 79.0694 52.0035 80.4545C49.8121 81.8386 47.1913 82.55 44.1 82.55C41.0087 82.55 38.3879 81.8386 36.1965 80.4545C34.006 79.0711 32.1833 76.9768 30.7498 74.1135C28.4422 69.2036 27.25 62.3245 27.25 53.4Z"
                  stroke="url(#paint0_linear)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="68"
                    y1="-14"
                    x2="68"
                    y2="83"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFFFFF" />
                    <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <Link href="/#about" onClick={toggleMobileMenu}>About</Link>
            </li>
            <li className={style.nav_link}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="20"
                viewBox="0 0 159 107"
                fill="none"
                className={style.number}
              >
                <path
                  d="M10.2714 88.3098L10.2664 88.3024C4.42346 79.4866 1.54999 67.8231 1.54999 53.3999C1.54999 38.9775 4.42313 27.3145 10.2655 18.4989C17.7725 7.0851 29.1064 1.3999 44.1 1.3999C59.1906 1.3999 70.5759 7.08284 78.0844 18.4987C79.9386 21.2965 81.4937 24.381 82.7528 27.7495C84.1083 21.5187 87.1949 16.0239 92.0054 11.2873L92.0108 11.282C98.8366 4.66314 108.007 1.3999 119.407 1.3999C130.505 1.3999 139.517 4.56174 146.339 10.9684C153.142 17.2575 156.557 25.0729 156.557 34.3499C156.557 47.3724 149.906 57.7682 136.868 65.5098L136.867 65.5099L118.431 76.4519C115.961 78.0249 114.195 79.6132 113.062 81.1999H156.307H157.307V82.1999V102V103H156.307H82.357H81.357V102C81.357 92.2832 83.0778 83.8272 86.5575 76.663L86.5601 76.6577C90.1647 69.3454 96.2721 63.2128 104.802 58.2367L10.2714 88.3098ZM10.2714 88.3098C17.9748 99.7108 29.3002 105.4 44.1 105.4C58.9969 105.4 70.3737 99.7129 78.0786 88.3098L78.0835 88.3024C83.9265 79.4866 86.8 67.8231 86.8 53.3999C86.8 50.3122 86.6683 47.351 86.404 44.5171L106.05 44.6499L107.424 44.6592L107.011 43.3488C106.443 41.5513 106.157 39.6533 106.157 37.6499C106.157 33.6459 107.247 30.4421 109.362 27.9563C111.531 25.5208 114.63 24.2499 118.807 24.2499C122.837 24.2499 125.746 25.3027 127.7 27.257L127.708 27.2649L127.716 27.2725C129.811 29.2762 130.857 31.7615 130.857 34.7999C130.857 37.8216 130.106 40.3626 128.642 42.4702C127.158 44.5071 124.544 46.6707 120.7 48.9381C120.7 48.9383 120.699 48.9384 120.699 48.9385L104.803 58.2361L10.2714 88.3098ZM27.25 53.3999C27.25 44.4755 28.4422 37.5964 30.7498 32.6864C32.1833 29.8232 34.006 27.7289 36.1965 26.3454C38.3879 24.9614 41.0087 24.2499 44.1 24.2499C47.1913 24.2499 49.8121 24.9614 52.0035 26.3454C54.1967 27.7306 56.0212 29.8284 57.4556 32.6971C59.8558 37.4975 61.1 44.3688 61.1 53.3999C61.1 62.431 59.8558 69.3023 57.4556 74.1027C56.0212 76.9714 54.1967 79.0692 52.0035 80.4544C49.8121 81.8384 47.1913 82.5499 44.1 82.5499C41.0087 82.5499 38.3879 81.8384 36.1965 80.4544C34.006 79.071 32.1833 76.9766 30.7498 74.1134C28.4422 69.2034 27.25 62.3243 27.25 53.3999Z"
                  stroke="url(#paint0_linear)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="79"
                    y1="-14.0001"
                    x2="79"
                    y2="82.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFFFFF" />
                    <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <Link href="/#exp" onClick={toggleMobileMenu}>Experience</Link>
            </li>
            <li className={style.nav_link} onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="20"
                viewBox="0 0 159 107"
                fill="none"
                className={style.number}
              >
                <path
                  d="M10.2664 88.3024L10.2714 88.3098C17.9748 99.7108 29.3002 105.4 44.1 105.4C58.9969 105.4 70.3737 99.7129 78.0786 88.3098L78.0835 88.3024C79.1652 86.6704 80.145 84.9409 81.0237 83.1144C83.0529 87.8509 86.228 92.0997 90.536 95.8538L90.5422 95.8592C97.7553 102.042 106.95 105.1 118.043 105.1C129.834 105.1 139.347 101.842 146.473 95.2331L146.473 95.2327C153.663 88.5565 157.293 80.5466 157.293 71.2499C157.293 62.8152 154.559 55.7123 149.069 50.0125C144.273 44.85 138.431 41.7784 131.58 40.8104L153.606 23.7403L153.993 23.4401V22.9499V4.6499V3.6499H152.993H82.793H81.793V4.6499V24.4499V25.3685C80.7284 22.914 79.4926 20.6236 78.0844 18.4987C70.5759 7.08284 59.1906 1.3999 44.1 1.3999C29.1064 1.3999 17.7725 7.0851 10.2655 18.4989C4.42313 27.3145 1.54999 38.9775 1.54999 53.3999C1.54999 67.8231 4.42346 79.4866 10.2664 88.3024ZM102.112 67.7165L85.119 70.8467C86.2424 65.5717 86.8 59.7536 86.8 53.3999C86.8 42.4922 85.1566 33.1628 81.8282 25.4499H82.793H120.643L98.8095 43.3262L98.1144 43.8953L98.606 44.6472L108.806 60.2472L109.307 61.0141L110.115 60.5814C112.779 59.1545 115.517 58.4499 118.343 58.4499C121.924 58.4499 124.996 59.5271 127.608 61.6726L127.617 61.6795L127.625 61.6862C130.133 63.6568 131.443 66.5859 131.443 70.6499C131.443 74.0742 130.206 76.9653 127.699 79.3796L127.693 79.3861L127.686 79.3928C125.31 81.7691 122.084 82.9999 117.893 82.9999C113.633 82.9999 110.199 81.6382 107.506 78.9489C104.895 76.2418 103.482 72.8323 103.292 68.6545L103.24 67.5087L102.112 67.7165ZM27.25 53.3999C27.25 44.4755 28.4422 37.5964 30.7498 32.6864C32.1833 29.8232 34.006 27.7289 36.1965 26.3454C38.3879 24.9614 41.0087 24.2499 44.1 24.2499C47.1913 24.2499 49.8121 24.9614 52.0035 26.3454C54.1967 27.7306 56.0212 29.8284 57.4556 32.6971C59.8558 37.4975 61.1 44.3688 61.1 53.3999C61.1 62.431 59.8558 69.3023 57.4556 74.1027C56.0212 76.9714 54.1967 79.0692 52.0035 80.4544C49.8121 81.8384 47.1913 82.5499 44.1 82.5499C41.0087 82.5499 38.3879 81.8384 36.1965 80.4544C34.006 79.071 32.1833 76.9766 30.7498 74.1134C28.4422 69.2034 27.25 62.3243 27.25 53.3999Z"
                  stroke="url(#paint0_linear)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="79"
                    y1="-14.0001"
                    x2="79"
                    y2="82.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFFFFF" />
                    <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <Link href="/#projects" >Projects</Link>
            </li>
            <li className={style.nav_link} onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="20"
                viewBox="0 0 170 107"
                fill="none"
                className={style.number}
              >
                <path
                  d="M10.2664 88.3024L10.2714 88.3098C17.9748 99.7108 29.3002 105.4 44.1 105.4C58.9969 105.4 70.3737 99.7129 78.0786 88.3098L78.0835 88.3024C79.6249 85.9768 80.9596 83.4531 82.0894 80.7328V81.7499V82.7499H83.0894H127.089V102V103H128.089H151.789H152.789V102V82.7499H167.389H168.389V81.7499V61.9499V60.9499H167.389H152.789V4.6499V3.6499H151.789H123.589H123.094L122.794 4.04345L86.7786 51.2641C86.5062 37.8219 83.6356 26.8749 78.0844 18.4987C70.5759 7.08284 59.1906 1.3999 44.1 1.3999C29.1064 1.3999 17.7725 7.0851 10.2655 18.4989C4.42313 27.3145 1.54999 38.9775 1.54999 53.3999C1.54999 67.8231 4.42346 79.4866 10.2664 88.3024ZM27.25 53.3999C27.25 44.4755 28.4422 37.5964 30.7498 32.6864C32.1833 29.8232 34.006 27.7289 36.1965 26.3454C38.3879 24.9614 41.0087 24.2499 44.1 24.2499C47.1913 24.2499 49.8121 24.9614 52.0035 26.3454C54.1967 27.7306 56.0212 29.8284 57.4556 32.6971C59.8558 37.4975 61.1 44.3688 61.1 53.3999C61.1 62.431 59.8558 69.3023 57.4556 74.1027C56.0212 76.9714 54.1967 79.0692 52.0035 80.4544C49.8121 81.8384 47.1913 82.5499 44.1 82.5499C41.0087 82.5499 38.3879 81.8384 36.1965 80.4544C34.006 79.071 32.1833 76.9766 30.7498 74.1134C28.4422 69.2034 27.25 62.3243 27.25 53.3999ZM105.658 60.9499L127.089 32.8131V60.9499H105.658Z"
                  stroke="url(#paint0_linear)"
                  stroke-width="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="83.5"
                    y1="-14.0001"
                    x2="83.5"
                    y2="82.9999"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFFFFF" />
                    <stop offset="1" stop-color="#FFFFFF" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <Link href="/#contact" onClick={toggleMobileMenu}>Contact</Link>
            </li>
          </ul>
          <div className={style.social_link}>
            <li>
              <Link href="https://github.com/MahithPaul" className={style.Links_a}>
                <Icon icon="charm:github"  onClick={toggleMobileMenu}/>
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/mahith_paul97?igshid=ZDc4ODBmNjlmNQ==" className={style.Links_a}>
                <Icon icon="uil:instagram"  onClick={toggleMobileMenu}/>
              </Link>
            </li>
            <li>
              <Link href="https://www.threads.net/@mahith_paul97" className={style.Links_a}>
                <Icon icon="tabler:brand-threads"  onClick={toggleMobileMenu}/>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/mahith-paul/" className={style.Links_a}>
                <Icon icon="lucide:linkedin"  onClick={toggleMobileMenu}/>
              </Link>
            </li>
            <li>
              <Link href="#" className={style.Links_a}>
                <Icon icon="la:hackerrank"  onClick={toggleMobileMenu}/>
              </Link>
            </li>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
