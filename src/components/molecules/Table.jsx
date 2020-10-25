import React, { useState, useEffect, useContext } from 'react'
import HeadTable from '../atoms/HeadTable'
import FootTable from '../atoms/FootTable'
import BodyTable from '../atoms/BodyTable'
import { LibretaContext } from '../../context/LibretasContext'
import { UPDATE_DATA, CHANGE_MODE, EDIT } from '../../context/actions'

const initialScore = {
	note: 0,
	credit: 0
}

const Table = () => {
	
	const [score, setScore] = useState(initialScore)
	const [data, setData] = useState(null)

  const [status, dispatch] = useContext(LibretaContext);

	useEffect(() => {
		fetch("notas.json")
			.then(response => response.json())
			.then(data => {
				setData(data)
				averageCurses(data)
				dispatch({
					type: UPDATE_DATA,
					data: {
						data
					}
				})
			})
	}, [])

	useEffect(() => {
		setData(status.data)
		averageCurses(status.data)
	}, [status])

	function averageCurses(data){
		let creditTotal = 0
		let noteTotal = 0
		data && data.curses.forEach( ({note, credit}) => {
			creditTotal += credit
			noteTotal += note * credit
		});
		noteTotal /= creditTotal
		setScore({
			note: noteTotal,
			credit: creditTotal
		})
	}

	function groupCurses(data){
		let groups = []
		data.periods.forEach(period => {
			let group = {
				period: period,
				curses: data.curses.filter(element => element.period == period)
			}
			groups.push(group);
		});
		return groups;
	}
	
	return (
	<div class="tableList-container">

		<table className="tableList">
		<HeadTable dataList={["NOMBRE DEL CURSO", "NOTA", "CREDITO"]}/>
		{
			data && groupCurses(data).map( ({period, curses}) => (
				<BodyTable key={period} subtitle={period} curses={curses} modeEdit={true}/>
				)
			)
		}
		<FootTable dataList={["PROMEDIO", score.note, score.credit]}/>
		</table>
	</div>
	)
}

export default Table
	