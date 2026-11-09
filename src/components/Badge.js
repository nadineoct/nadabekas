import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme/colors';

const BADGE_VARIANTS = {
  neutral: {
    backgroundColor: COLORS.background,
    textColor: COLORS.text,
  },
  accent: {
    backgroundColor: `${COLORS.accent}1F`,
    textColor: COLORS.text,
  },
  danger: {
    backgroundColor: `${COLORS.danger}1F`,
    textColor: COLORS.danger,
  },
};

export default function Badge({
  label,
  variant = 'neutral',
}) {
  const colors = BADGE_VARIANTS[variant] || BADGE_VARIANTS.neutral;

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: colors.backgroundColor },
      ]}
    >
      <Text style={[styles.label, { color: colors.textColor }]}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    minHeight: 26,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    includeFontPadding: false,
  },
});