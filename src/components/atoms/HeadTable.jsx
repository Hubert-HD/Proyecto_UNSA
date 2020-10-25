import React from 'react'

const HeadTable = ({dataList}) => {

  return (
    <thead className="tableList__head">
      <tr className="tableList__row tableList__row--title">
        {
          dataList.map((data, index) => <th key={index} className="tableList__colum tableList__colum--center">{data}</th>)
        }
      </tr>
    </thead>
    )
  }

export default HeadTable
  