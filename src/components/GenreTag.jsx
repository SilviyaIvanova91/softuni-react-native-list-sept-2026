import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme";

export default function GenreTags({ genre }) {
  const genres = genre.split(",").map((g) => g.trim());

  return (
    <View style={styles.row}>
      {genres.map((name, index) => (
        <View style={styles.tag} key={index}>
          <Text style={styles.text}>{name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tagActive: {
    borderColor: colors.accent,
    backgroundColor: colors.accent,
  },
  text: {
    color: colors.textMuted,
    fontSize: 12,
  },
  textActive: {
    color: colors.background,
    fontWeight: "bold",
  },
});
