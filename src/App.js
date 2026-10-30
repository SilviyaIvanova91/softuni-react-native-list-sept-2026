import { Text, View, StatusBar } from "react-native";
import data from "../data.json";
import { colors } from "./theme";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import { useState } from "react";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovieHandler = (movie) => {
    setSelectedMovie(movie);
  };

  const backHandler = () => {
    setSelectedMovie(null);
  };

  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" />
      {selectedMovie ? (
        <MovieDetails movie={selectedMovie} onBack={backHandler} />
      ) : (
        <MovieList movies={data.movies} onSelect={selectMovieHandler} />
      )}
    </View>
  );
}
