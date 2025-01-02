'use client';
import { useEffect, useState } from 'react';
import './style.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); //詳細情報用の状態
  const [searchQuery, setSearchQuery] = useState(''); //検索キーワード用の状態

  useEffect(() => {
    //自作APIから映画情報を取得
    fetch('/api/movies')
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const handleMovieClick = (movie) => {
    //映画の名前をクリックしたときに詳細情報の表示
    setSelectedMovie(movie);
    console.log(movie);
  };

  const handleSearchChange = (event) => {
    //検索ボックスの入力を更新
    setSearchQuery(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())//映画タイトルと検索クエリの確認
  );

  return (
    <div className="container">
      <h1 className="title">カラー＆映画情報!!</h1>

      {/* 検索ボックス */}
      <div className="searchBox">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="映画タイトルで検索...!"
          className="searchInput"
        />
      </div>

      <div className="movieList">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.movieid}
              className="movieCard"
              style={{
                backgroundColor: movie.colorname ? movie.colorname : 'lightgray',
              }}
            >
              <img
                src={movie.image_url ? movie.image_url : '/default-image.jpg'}
                alt={movie.title}
                className="movieImage"
              />
              <p className="movieColor">{movie.colorname || 'No Color'}</p>
              <h2
                className="movieTitle"
                onClick={() => handleMovieClick(movie)} //映画名をクリックで詳細表示
              >
                {movie.title}
              </h2>
            </div>
          ))
        ) : (
          <p>映画情報はありません。</p>
        )}
      </div>

      {selectedMovie && (
        <div className="movieDetail">
          <h2 className="detailTitle">映画詳細: {selectedMovie.title}</h2>
          {selectedMovie.release_year && <p><strong>公開年:</strong> {selectedMovie.release_year}</p>}
          {selectedMovie.director && <p><strong>監督:</strong> {selectedMovie.director}</p>}
          {selectedMovie.genre && <p><strong>ジャンル:</strong> {selectedMovie.genre}</p>}
          {selectedMovie.description && <p><strong>概要:</strong> {selectedMovie.description}</p>}
          <button onClick={() => setSelectedMovie(null)} className="closeButton">閉じる</button>
        </div>
      )}
    </div>
  );
}
