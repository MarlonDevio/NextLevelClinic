import './FlipCard.css';

function FlipCard() {
  return (
    <div className='myCard'>
      <div className='innerCard'>
        <div className='frontSide'>
          <p className='title'>front side</p>
          <p>hover me</p>
        </div>
        <div className='backSide'>
          <p className='title'>back side</p>
          <p>leave me</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
