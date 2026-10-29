import { Text, View } from "react-native";
import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <View>
      <Text
        style={{
          color: "#FFFFFF",
          fontSize: 24,
          marginTop: 50,
        }}
      >
        Каталог Филми
      </Text>
      <MovieCard {...movies[0]} />
    </View>
  );
}
