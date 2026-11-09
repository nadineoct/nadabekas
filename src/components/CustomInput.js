import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

// icon: nama Ionicons di kiri input (mis. "search")
export default function CustomInput({ label, error, icon, ...rest }) {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={[styles.box, error && styles.boxError]}>
        {icon ? (
          <Ionicons name={icon} size={20} color={COLORS.muted} style={styles.icon} />
        ) : null}
        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.muted}
          {...rest}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 14 },
  label: { marginBottom: 6, fontWeight: '600', color: COLORS.text },
  box: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderColor: COLORS.border, borderRadius: 12,
    paddingHorizontal: 12, backgroundColor: COLORS.card,
  },
  boxError: { borderColor: COLORS.danger },
  icon: { marginRight: 8 },
  input: { flex: 1, paddingVertical: 10, fontSize: 15, color: COLORS.text },
  error: { marginTop: 4, color: COLORS.danger, fontSize: 12 },
});
