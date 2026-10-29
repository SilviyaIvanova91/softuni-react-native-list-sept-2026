import { Text, View, StyleSheet, ScrollView } from "react-native";
import MovieCard from "./MovieCard";

import { colors } from "../theme";

export default function MovieList({ movies, onSelect }) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>Каталог Филми</Text>
        <Text style={styles.subtitle}>{movies.length} филма в колекцията</Text>
      </View>

      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} onSelect={() => onSelect(movie)} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 64,
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    marginTop: 4,
  },
  tabs: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.card,
  },
  tabActive: {
    backgroundColor: colors.accent,
  },
  tabText: {
    color: colors.text,
    fontSize: 15,
  },
  tabTextActive: {
    color: colors.background,
    fontWeight: "bold",
  },
  sortRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 6,
    marginTop: -8,
    marginBottom: 20,
  },
  sortLabel: {
    color: colors.textMuted,
    fontSize: 14,
    marginRight: 2,
  },
  sortOption: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  sortOptionActive: {
    borderColor: colors.accent,
  },
  sortText: {
    color: colors.textMuted,
    fontSize: 13,
  },
  sortTextActive: {
    color: colors.accent,
    fontWeight: "bold",
  },
  genreFilter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: -8,
    marginBottom: 20,
  },
  genreFilterLabel: {
    color: colors.textMuted,
    fontSize: 14,
  },
  genreChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: colors.accent,
  },
  genreChipText: {
    color: colors.background,
    fontSize: 13,
    fontWeight: "bold",
  },
  empty: {
    color: colors.textMuted,
    fontSize: 15,
    textAlign: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
