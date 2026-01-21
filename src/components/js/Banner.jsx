import "../scss/Banner.scss"

function Banner({ type }) {

  // DONNÉES SELON LE TYPE DE LA PAGE
  if (type === 'about') {
    return (
      <div>
        <div className="background"></div>
      </div>
    )
  } 
    return (
      <div>
        <div className="background__img">
          <div className="background__img--content">Chez vous, partout et ailleurs</div>
        </div>
      </div>
    )
};

export default Banner;