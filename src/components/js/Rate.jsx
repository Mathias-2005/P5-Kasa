import inactiveStar from '/src/assets/images/star-inactive.png'
import activeStar from '/src/assets/images/star-active.png'

function Rate(props) {
  const rating = props.rating;
  const notes = [1, 2, 3, 4, 5];

  return (
    <>
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