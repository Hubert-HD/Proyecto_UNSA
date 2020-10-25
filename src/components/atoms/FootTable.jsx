import React from 'react'

const FootTable = ({dataList = {}}) => {

  return (
    <tfoot className="tableList__foot">
      <tr className="tableList__row tableList__row--result">
        {
          dataList && dataList.map((data, index) => <td key={index} className="tableList__colum tableList__colum--center">{data}</td > )
        }
      </tr>
    </tfoot>
  )
}

export default FootTable
  