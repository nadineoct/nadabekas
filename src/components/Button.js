// import { Pressable, Text, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { COLORS } from '../theme/colors';

// // variant: 'primary' | 'outline' | 'danger'
// // icon: nama Ionicons (mis. "heart"), showIcon: tampilkan ikon atau tidak
// export default function Button({
//   title,
//   onPress,
//   variant = 'primary',
//   disabled = false,
//   icon,
//   showIcon = true,
// }) {
//   const outline = variant === 'outline';
//   const danger = variant === 'danger';
//   const textColor = outline ? COLORS.primary : '#fff';
//   // Figma: tombol primary memakai ikon hati merah, outline memakai hati garis
//   const iconName = icon && outline ? `${icon}-outline` : icon;
//   const iconColor = outline ? COLORS.primary : COLORS.danger;

//   return (
//     <Pressable
//       onPress={onPress}
//       disabled={disabled}
//       style={({ pressed }) => [
//         styles.base,
//         outline && styles.outline,
//         danger && styles.danger,
//         !outline && !danger && styles.primary,
//         (pressed || disabled) && styles.dim,
//       ]}>
//       {icon && showIcon ? (
//         <Ionicons name={iconName} size={20} color={danger ? '#fff' : iconColor} />
//       ) : null}
//       <Text style={[styles.text, { color: textColor }]}>{title}</Text>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   base: {
//     flexDirection: 'row',     // Auto layout horizontal
//     alignItems: 'center',
//     justifyContent: 'center', // Alignment tengah
//     gap: 8,                   // Gap 8
//     height: 48,               // H 48
//     paddingHorizontal: 24,    // Padding kiri-kanan 24
//     paddingVertical: 12,      // Padding atas-bawah 12
//     borderRadius: 12,         // Corner radius 12
//   },
//   primary: { backgroundColor: COLORS.primary },
//   outline: { borderWidth: 1.5, borderColor: COLORS.primary, backgroundColor: 'transparent' },
//   danger: { backgroundColor: COLORS.danger },
//   dim: { opacity: 0.5 },
//   text: { fontSize: 16, fontWeight: '600' },
// });


import { Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';

export default function Button({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  icon = 'heart',
  showIcon = true,
}) {
  const outline = variant === 'outline';
  const danger = variant === 'danger';

  const textColor = outline ? COLORS.primary : COLORS.card;
  const iconName = icon && outline ? `${icon}-outline` : icon;
  const iconColor = danger ? COLORS.card : COLORS.danger;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        outline && styles.outline,
        danger && styles.danger,
        !outline && !danger && styles.primary,
        (pressed || disabled) && styles.dim,
      ]}
    >
      {icon && showIcon ? (
        <Ionicons
          name={iconName}
          size={20}
          color={iconColor}
        />
      ) : null}

      <Text style={[styles.text, { color: textColor }]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    gap: 8,
    height: 48,
    borderRadius: 12,
    flexGrow: 0,
  },

  primary: {
    backgroundColor: COLORS.primary,
  },

  outline: {
    borderWidth: 1.5,
    borderColor: COLORS.primary,
    backgroundColor: 'transparent',
  },

  danger: {
    backgroundColor: COLORS.danger,
  },

  dim: {
    opacity: 0.5,
  },

  text: {
    fontFamily: 'PlusJakartaSans-SemiBold',
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 22,
  },
});