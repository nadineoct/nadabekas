// import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
// import { COLORS } from '../theme/colors';
// import Rating from './Rating';
// import Badge from './Badge';

// // discount: mis. "-10%" -> badge di pojok gambar. rating: 0-5 (opsional)
// export default function Card({ title, price, image, onPress, discount, rating }) {
//   return (
//     <Pressable style={styles.card} onPress={onPress}>
//       <View>
//         <Image source={{ uri: image }} style={styles.image} />
//         {discount ? (
//           <View style={styles.badge}>
//             <Badge label={discount} variant="accent" />
//           </View>
//         ) : null}
//       </View>
//       <View style={styles.body}>
//         <Text style={styles.title} numberOfLines={2}>{title}</Text>
//         {rating !== undefined ? <Rating value={rating} /> : null}
//         <Text style={styles.price}>$ {price}</Text>
//       </View>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     flex: 1, margin: 6, backgroundColor: COLORS.card,
//     borderRadius: 12, overflow: 'hidden',
//     elevation: 2,                              // bayangan Android
//     shadowColor: COLORS.text, shadowOpacity: 0.1,   // bayangan iOS
//     shadowRadius: 6, shadowOffset: { width: 0, height: 2 },
//   },
//   image: { width: '100%', aspectRatio: 1, backgroundColor: COLORS.background },
//   body: { padding: 10, gap: 4 },
//   title: { fontSize: 14, color: COLORS.text, minHeight: 36 },
//   price: { fontWeight: 'bold', color: COLORS.accent },
//   badge: { position: 'absolute', top: 8, left: 8 },
// });


import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../theme/colors';
import Rating from './Rating';
import Badge from './Badge';

export default function Card({
  type = 'katalog',
  title,
  price,
  image,
  onPress,
  discount,
  rating,
  onAdd,
  onCart,
  onFavorite,
}) {
  const favorit = type === 'favorit';

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: image }} style={styles.image} />
        {discount ? (
          <View style={styles.badge}>
            <Badge label={discount} variant="accent" />
          </View>
        ) : null}
        {favorit ? (
          <Pressable onPress={onFavorite} hitSlop={8} style={styles.heart}>
            <Ionicons name="heart" size={18} color={COLORS.danger} />
          </Pressable>
        ) : null}
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        {rating !== undefined ? <Rating value={rating} /> : null}
        <View style={styles.footer}>
          <Text style={styles.price}>$ {price}</Text>
          <Pressable onPress={favorit ? onCart : onAdd} hitSlop={8} style={styles.action}>
            <Ionicons name={favorit ? 'cart' : 'add'} size={18} color={COLORS.card} />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  // Figma: column, padding 0, H 290, bg putih, border 1 #D1D5DB, radius 16
  card: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 0,
    flex: 1,                 // Figma W 198; di sini mengikuti lebar kolom
    height: 290,
    margin: 6,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 16,
    overflow: 'hidden',
  },
  imageWrap: { flex: 1, alignSelf: 'stretch' },
  image: { width: '100%', height: '100%', backgroundColor: COLORS.background },
  badge: { position: 'absolute', top: 8, left: 8 },
  heart: {
    position: 'absolute', top: 8, right: 8,
    width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: COLORS.card,
  },
  body: { alignSelf: 'stretch', padding: 10, gap: 4 },
  title: { fontSize: 14, color: COLORS.text, minHeight: 36 },
  footer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  price: { fontWeight: 'bold', color: COLORS.accent },
  action: {
    width: 32, height: 32, borderRadius: 8,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
});
