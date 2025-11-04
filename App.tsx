/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  useColorScheme,
  StatusBar,
} from 'react-native';

const { width } = Dimensions.get('window');

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value: string) => {
    if (value === 'C') {
      setExpression('');
      setResult('');
      return;
    }

    if (value === '⌫') {
      setExpression(prev => prev.slice(0, -1));
      return;
    }

    if (value === '=') {
      try {
        const evalExpr = expression
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/√/g, 'Math.sqrt')
          .replace(/\^/g, '**');

        const calcResult = eval(evalExpr);
        setResult(calcResult.toString());
      } catch (error) {
        setResult('Error');
      }
      return;
    }

    setExpression(prev => prev + value);
  };

  const buttons = [
    ['C', '⌫', '√', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '%', '='],
  ];

  const isOperator = (val: string) => ['÷', '×', '-', '+', '='].includes(val);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.expressionText}>{expression || '0'}</Text>
        {result ? (
          <Text style={styles.resultText}>= {result}</Text>
        ) : (
          <Text style={styles.resultPlaceholder}></Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(btn => (
              <TouchableOpacity
                key={btn}
                style={[
                  styles.button,
                  btn == 'C' && styles.clearButton,
                  btn == '⌫' && styles.deleteButton,
                  isOperator(btn) && styles.operatorButton,
                  btn == '=' && styles.equalsButton,
                ]}
                onPress={() => handlePress(btn)}
              >
                <Text
                  style={[
                    styles.buttonText,
                    btn === 'C' && styles.clearText,
                    btn === '⌫' && styles.deleteText,
                  ]}
                >
                  {btn}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    padding: 20,
    alignItems: 'flex-end',
  },
  expressionText: {
    color: '#aaa',
    fontSize: 30,
  },
  resultText: {
    color: '#fff',
    fontSize: 44,
    fontWeight: 'bold',
    marginTop: 6,
  },
  resultPlaceholder: {
    height: 44,
  },
  buttonContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: width / 4.5,
    height: width / 4.5,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  clearButton: {
    backgroundColor: '#444',
  },
  deleteButton: {
    backgroundColor: '#333',
  },
  operatorButton: {
    backgroundColor: '#006400',
  },
  equalsButton: {
    backgroundColor: '#00A300',
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
  },
  clearText: {
    color: '#ddd',
  },
  deleteText: {
    color: '#ddd',
  },
});

export default App;
