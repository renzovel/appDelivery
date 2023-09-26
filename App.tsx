/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Button} from "react-native-paper";


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  return (
    <SafeAreaView >
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic" >
        <View>
          <Button mode={'contained'} onPress={()=>{}}>Click aqui.</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
});

export default App;
