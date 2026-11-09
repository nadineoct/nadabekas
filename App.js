import { useState } from 'react';
import { ScrollView, View, Alert, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HeaderBar from './src/components/HeaderBar';
import Button from './src/components/Button';
import Card from './src/components/Card';
import CustomInput from './src/components/CustomInput';
 
const FOTO = 'https://picsum.photos/300';
 
export default function App() {
  const [nama, setNama] = useState('');
  return (
    <SafeAreaProvider>
      <HeaderBar title="KatalogKu" subtitle="Uji coba komponen" />
      <ScrollView contentContainerStyle={styles.content}>
        <CustomInput label="Nama" placeholder="Tulis nama..." icon="person"
          value={nama} onChangeText={setNama}
          error={nama === '' ? 'Nama wajib diisi' : null} />
        <Button title="Sapa" showIcon={false}
          onPress={() => Alert.alert('Halo', nama)} />
        <View style={styles.gap} />
        <Button title="Reset" variant="outline" showIcon={false}
          onPress={() => setNama('')} />
        <View style={styles.gap} />
        <Button title="Hapus" variant="danger" icon="trash"
          onPress={() => Alert.alert('Hapus', 'Data dihapus')} />
        <View style={styles.row}>
          <Card title="Produk A" price={10} image={FOTO} discount="-10%" rating={4.5} />
          <Card type="favorit" title="Produk B" price={25} image={FOTO} rating={3} />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16 },
  gap: { height: 12 },
  row: { flexDirection: 'row', marginTop: 16, marginHorizontal: -6 },
});