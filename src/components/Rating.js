import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

// value: 0-5 (boleh desimal, dibulatkan)
export default function Rating({ value = 0 }) {
  const full = Math.max(0, Math.min(5, Math.round(value)));
  return (
    <Text style={styles.stars}>
      {'★'.repeat(full)}
      <Text style={styles.empty}>{'★'.repeat(5 - full)}</Text>
      <Text style={styles.number}>  {Number(value).toFixed(1)}</Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  stars: { color: COLORS.accent, fontSize: 13 },
  empty: { color: COLORS.border },
  number: { color: COLORS.muted, fontSize: 12 },
});
