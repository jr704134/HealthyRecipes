import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bruschetta from './Images/bruschetta.png';
import React from 'react';


function HomeScreen({navigation}) {
  return (
      <View style={styles.container}>
      <Text style={styles.recipeName}>Bruschetta Recipe</Text>
      <Image source={bruschetta} style={styles.bruschettaImage}></Image>
      <TextInput style={styles.textBox} placeholder="Enter the Number of Servings"></TextInput>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          navigation.navigate('Bruschetta Recipe', {
            plumTomatoes: 4,
            basilLeaves: 6,
            garlicCloves: 3,
            oliveOil: 3,
          });
        }}>
        <Text style={styles.buttonText}>View Recipe</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function RecipeScreen({ route, navigation }) {
  const { plumTomatoes } = route.params;
  const { basilLeaves } = route.params;
  const { garlicCloves } = route.params;
  const { oliveOil } = route.params;

  return (
    <View>
      <Text style={styles.recipeName}>Bruschetta</Text>

      <Text style={styles.ingredients}>Ingredients</Text>
      <Text style={styles.vegetables}>{JSON.stringify(plumTomatoes)} plum tomatoes</Text>
      <Text style={styles.vegetables}>{JSON.stringify(basilLeaves)} basil leaves</Text>
      <Text style={styles.vegetables}>{JSON.stringify(garlicCloves)} garlic cloves, chopped</Text>
      <Text style={styles.vegetables}>{JSON.stringify(oliveOil)} TB olive oil</Text>

      <Text style={styles.directions}>Directions</Text>
      <Text style={styles.instructions}>Combine the ingredients
      add salt to taste. Top
      French bread slices with mixture.</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#ff6600',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Healthy Recipes" component={HomeScreen} />
        <Stack.Screen name="Bruschetta Recipe" component={RecipeScreen} options={{ title: 'Healthy Recipes' }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: 16,
    paddingTop: 60,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  recipeName: {
    fontWeight: 'bold',
    fontSize: 46,
    paddingTop: 100,
    textAlign: 'center',
  },
  bruschettaImage: {
    width: 415,
    height: 300,
  },
  textBox: {
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 35,
    paddingBottom: 35,
  },
  button: {
    backgroundColor: '#878787',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  ingredients: {
    textAlign: 'left',
    fontSize: 32,
    paddingTop: 20,
    paddingLeft: 25,
    fontWeight: 'bold',
  },
  vegetables: {
    fontSize: 26,
    paddingLeft: 44,
    paddingRight: 44,
    fontWeight: 'bold',
  },
  directions: {
    textAlign: 'left',
    fontSize: 32,
    paddingTop: 25,
    paddingLeft: 25,
    fontWeight: 'bold',
  },
  instructions: {
    fontSize: 26,
    paddingLeft: 44,
    paddingRight: 44,
    fontWeight: 'bold',
  }
});
