import { ArrowLeftOutlined, ArrowRightOutlined, UnorderedListOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styles from '../../styles/Resizer.module.css'

const Sidebar = (props) => {
  const [sideBarExpanded, setSideBarExpanded] = useState<boolean>(true);
  const toggleSideBar = () => setSideBarExpanded(!sideBarExpanded);

  return (
    <>
       {/* Aside bar */}
      <div className={`min-h-screen bg-gray-100  ${sideBarExpanded ? 'w-64' : 'w-3.5'} transition-width duration-700 ease`}>
        {sideBarExpanded ? props.children : null }
      </div>
      {/* Resize bar */}
      <div className={styles.sizerWrap}>
          <div className={styles.strip}></div>
          <div className={styles.sizer} onClick={toggleSideBar}>
              <div className={`${styles.line} hover:opacity-100`}>
              </div>
          </div>
          <button className={`${styles.btn} hover:bg-blue-600 hover:text-white`} onClick={toggleSideBar}>
              <div className={styles.overlay}></div>
              <span className="flex justify-center items-center">
                {sideBarExpanded ?<ArrowLeftOutlined  /> : <ArrowRightOutlined /> }
              </span>
          </button>
      </div>
    </>
  )
}

export default Sidebar;
