import { ArrowLeftOutlined, ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styles from '../../styles/Resizer.module.css'

const AdminMain = (props) => {
  const [sideBarExpanded, setSideBarExpanded] = useState<boolean>(false);
  const toggleSideBar = () => setSideBarExpanded(!sideBarExpanded);

  return (
    <div className={`absolute left-0 right-0 ${sideBarExpanded ? 'ml-[440px]' : 'ml-56'} min-h-screen bg-white transition-margin duration-700 ease`}>
      <div>
        <div className={styles.sizerWrap}>
            <div className={styles.strip}></div>
            <div className={styles.sizer} onClick={toggleSideBar}>
                <div className={`${styles.line} hover:opacity-100`}>
                </div>
            </div>
            <button className={`${styles.btn} hover:bg-blue-600 hover:text-white`} onClick={toggleSideBar}>
                <div className={styles.overlay}></div>
                <span className="flex justify-center items-center">
                  {sideBarExpanded ? <ArrowLeftOutlined  /> : <ArrowRightOutlined /> }
                </span>
            </button>
        </div>
        <section className="pl-8 pt-4 pr-8">
          { props.children}
        </section>
      </div>
    </div>
  )
}

export default AdminMain;
