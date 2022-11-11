import React from 'react'
import TabArrow from '../../../../../src/components/common/TabArrow'

type TProps = { name: string; cBgStyle: string; cBorderStyle: string }

const StatusLine = ({ name, cBgStyle, cBorderStyle }: TProps) => {
  //   const hexColor =
  // (cColor === 'aqua' && '#689d6a') ||
  // (cColor === 'blue' && '#458588') ||
  // (cColor === 'green' && '#98971a') ||
  // (cColor === 'orange' && '#d65d0e') ||
  // (cColor === 'purple' && '#b16286') ||
  // (cColor === 'red' && '#cc241d') ||
  // (cColor === 'yellow' && '#d79921')

  //   const style = {
  //     borderLeftColor: hexColor,
  //     backgroundColor: hexColor,
  //   }

  return (
    <div className='flex justify-center items-center'>
      <div
        className={`flex justify-center items-center w-fit px-4 align-center ${cBgStyle}`}
      >
        {name}
      </div>
      <TabArrow style={cBorderStyle} />
    </div>
  )
}

export default StatusLine
