import './Content.css';
import RowData from '../../constants/URLS';
import Row from '../row/Row';

export default function Content() {
  return (
    <div className='content-wrapper'>

      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}

      
    </div>
  );
}


//b3c1fc6b85edbb4c441784e69b2cedb5
