import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Recipe = ({ recipe }) => {
  return (
    <TouchableOpacity style={ styles.container }>
      <Text style={ styles.title }>
        { recipe.title }
        </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 20,
    borderColor: '#0e749a',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5
  }
});

export default Recipe;