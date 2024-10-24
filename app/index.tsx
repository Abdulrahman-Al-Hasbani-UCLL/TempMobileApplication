import { Text, View } from "react-native";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Index() {
  const API_URL = process.env.API_URL_Backend;

  const [data, setData] = useState([]);

  useEffect(() => {
    if (API_URL) {
      axios.get(API_URL)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.error("API_URL is not defined");
    }
  }, []);

  return (
    <View className="flex justify-center items-center ">
      <Text>Hello, this is the main page for the Restaurant manager x app</Text>
    </View>
  );
}
