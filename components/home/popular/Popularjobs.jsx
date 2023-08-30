import {useState} from 'react';
import { View,
         Text,
         TouchableOpacity,
         FlatList,
         ActivityIndicator
        } from 'react-native'
import {useRouter} from 'expo-router';
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';
import styles from './popularjobs.style';

const Popularjobs = () => {
  const {data, isLoading, error} = useFetch('Search', {  SearchQuery: 'react',
  PageSize: '40',
  PageNumber: '4'})
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ): error ? (
          <Text> Something went wrong</Text>
        ) : (
          <FlatList
          data={data.data}
          renderItem={({ item }) => (
            <PopularJobCard
              item={item} 
              selectedJob={1}
            />
          )}
          keyExtractor={(item) => item.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
        )}
      </View>
      
    </View>
  )
}

export default Popularjobs