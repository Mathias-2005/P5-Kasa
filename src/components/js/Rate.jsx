import inactiveStar from '../../assets/images/star-inactive.png'
import activeStar from '../../assets/images/star-active.png'

function Rate(props) {
  const rating = props.rating; 
  const notes = [1, 2, 3, 4, 5]; // NOTES = TABLEAU DE 1 à 5

  return (
    <>
      {/* SI LE RATING EST SUPERRIEUR OU EGAL A NOTE ALORS STAR ACTIVE SINON STAR INACTIVE */}
      {notes.map((note) =>
        rating >= note ? (
          <img
            key={note.toString()}
            className="appartment__star"
            src={activeStar}
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="appartment__star"
            src={inactiveStar}
            alt="star"
          />
        )
      )}
    </>
  )
};

export default Rate;