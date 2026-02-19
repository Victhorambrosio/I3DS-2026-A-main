import styles from "./MovieCard.module.css"

const MovieCard = (props) => {
  return (
    <>
    <div className={styles.movie}>
        <div>
            <p>{props.Year}</p>
        </div>
    </div>

    <div>
        <img src={props.Poster} alt={props.Title} />
    </div>

    <div>
        <span>{props.Type}</span>
        <h3>{props.Title}</h3>
    </div>
    </>
  );
};

export default MovieCard
