import React from 'react';
import {View, Text} from 'react-native';
// import SearchBar from '../components/SearchBar';

const HomePage: React.FC<{}> = ({}) => {
//   const [term, setTerm] = useState('');
  return (
    <View>
      <Text>Je suis la HomePage</Text>
      {/* <SearchBar
        term={term}
        onTermChange={() => setTerm(newTerm)}
        onTermSubmit={() => {}}
      /> */}
    </View>
  );
};

export default HomePage;
