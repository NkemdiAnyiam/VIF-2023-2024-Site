import React from 'react';

interface TimetableRowProps {
  isHeader?: boolean;
  cellData: string[];
}

const renderCells = (cellData: string[], isHeader?: boolean): JSX.Element[] => {
  let row: JSX.Element[];

  if (isHeader) {
    const [heading, ...times] = cellData;
    row = [
      <div key={heading} className={`cell`}><h3 className="heading--tertiary">{heading}</h3></div>,
      ...times.map((str) => {
        return (<div key={str} className={`cell`}><span>{str}</span></div>);
      })
    ];
  }
  else {
    const [companyName, ...availabilities] = cellData;
    row = [
      <div key={companyName} className={`cell`}><span>{companyName}</span></div>,
      ...availabilities.map((str, index) => {
        return (<div key={`${companyName}-${index}`} className={`cell ${str === 'X' ? 'cell--filled' : 'cell--empty'}`}></div>);
      })
    ];
  }

  row.splice(1, 0, <div key="spacer-1" className="cell cell--spacer"></div>);
  row.push(<div key="spacer-2" className="cell cell--spacer"></div>);

  return row;
}

export function TimetableRow({isHeader, cellData}: TimetableRowProps): JSX.Element {
  return (
    <div className={`timetable__row${isHeader ? ' timetable__row--header' : ''}`}>
      {renderCells(cellData, isHeader)}
    </div>
  );
}
