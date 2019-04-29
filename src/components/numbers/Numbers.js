import './numbers.scss';

export const Numbers = (props) => {
  let rangeList = [];

  for (let i = props.from; i <= props.to; i++) {
    rangeList.push(i);
  }

  if (props.even) {
    rangeList = rangeList.filter(num => num % 2 === 0);
  } if (props.odd) {
    rangeList = rangeList.filter(num => num % 2 !== 0);
  }

  return <ul>{rangeList.map(num => <li key={num}>{num}</li>)}</ul>;
};
