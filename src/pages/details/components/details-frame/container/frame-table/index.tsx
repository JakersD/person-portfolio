// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Grid } from 'swiper/modules';

// import styles from './index.module.scss';
// import { ListInfoBlock } from '@components/shared/blocks/list-info-block';
// import { ETextSize, ETextTheme, Text } from '@components/shared';
// import { getUniqueKey } from '@data/utils/core';
// import { useResize } from '@data/hooks';
// import { EScreenSize } from '@data/hooks/useResize';

// interface IProps {
//   table: string[][];
//   mobileTable: {
//     leftSide: string[];
//     rightSide: string[];
//   };
// }

// export const FrameTable: React.FC<IProps> = ({ table, mobileTable }) => {
//   return (
//     <div className={styles.table}>
//       {table.map((row, i) => (
//         <React.Fragment key={getUniqueKey(row[0], i)}>
//           {row.map((item, j) => (
//             <ListInfoBlock
//               key={getUniqueKey(item, i + j)}
//               className={i === 0 || j === 0 ? '' : styles.tableBody}
//             >
//               <Text size={ETextSize.SM} theme={ETextTheme.BLACK}>
//                 {item}
//               </Text>
//             </ListInfoBlock>
//           ))}
//         </React.Fragment>
//       ))}
//     </div>
//     // <div style={{ display: 'flex' }}>
//     //   <div
//     //     style={{
//     //       width: '40%',
//     //       display: 'grid',
//     //       gap: '8px',
//     //       marginRight: '8px',
//     //     }}
//     //   >
//     //     {mobileTable.leftSide.map((title) => (
//     //       <ListInfoBlock className={styles.test}>
//     //         <Text size={ETextSize.SM} theme={ETextTheme.BLACK}>
//     //           {title}
//     //         </Text>
//     //       </ListInfoBlock>
//     //     ))}
//     //   </div>
//     //   <Swiper
//     //     slidesPerView={2}
//     //     spaceBetween={8}
//     //     grid={{
//     //       fill: 'column',
//     //       rows: 10,
//     //     }}
//     //     modules={[Grid]}
//     //     // centeredSlidese
//     //   >
//     //     {mobileTable.rightSide.map((item) => (
//     //       <SwiperSlide>
//     //         <ListInfoBlock className={styles.test2}>
//     //           <Text size={ETextSize.SM} theme={ETextTheme.BLACK}>
//     //             {item}
//     //           </Text>
//     //         </ListInfoBlock>
//     //       </SwiperSlide>
//     //     ))}
//     //   </Swiper>
//     // </div>

//     // <div className={styles.table}>
//     //   {screen !== EScreenSize.FULL && screen !== EScreenSize.LG ? (
//     //     <>
//     //       <div>
//     //         {mobileTable.leftSide.map((title) => (
//     //           <p>title</p>
//     //         ))}
//     //       </div>
//     //       <div>
//     //         {mobileTable.rightSide.map((row) => (
//     //           <>
//     //             {row.map((item) => (
//     //               <p>Чо</p>
//     //             ))}
//     //           </>
//     //         ))}
//     //       </div>
//     //     </>
//     //   ) : (
//     //     <>
//     //       {table.map((row, i) => (
//     //         <React.Fragment key={getUniqueKey(row[0], i)}>
//     //           {row.map((item, j) => (
//     //             <ListInfoBlock
//     //               key={getUniqueKey(item, i + j)}
//     //               className={i === 0 || j === 0 ? '' : styles.tableBody}
//     //             >
//     // <Text size={ETextSize.SM} theme={ETextTheme.BLACK}>
//     //   {item}
//     // </Text>
//     //             </ListInfoBlock>
//     //           ))}
//     //         </React.Fragment>
//     //       ))}
//     //     </>
//     //   )}
//     // </div>
//   );
// };
import React from 'react';

import styles from './index.module.scss';
import { ListInfoBlock } from '@components/shared/blocks/list-info-block';
import { ETextSize, ETextTheme, Text } from '@components/shared';
import { getUniqueKey } from '@data/utils/core';

interface IProps {
  table: string[][];
  mobileTable: {
    leftSide: string[];
    rightSide: string[];
  };
}

export const FrameTable: React.FC<IProps> = ({ table }) => {
  return (
    <div className={styles.table}>
      {table.map((row, i) => (
        <React.Fragment key={getUniqueKey(row[0], i)}>
          {row.map((item, j) => (
            <ListInfoBlock
              key={getUniqueKey(item, i + j)}
              className={i === 0 || j === 0 ? '' : styles.tableBody}
            >
              <Text size={ETextSize.SM} theme={ETextTheme.BLACK}>
                {item}
              </Text>
            </ListInfoBlock>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};
