import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { DataContext } from "../../contexts/DataContext";
import queryString from 'query-string';
import axios from 'axios';


const Search = () => {

    const [search, setSearch] = useState('')
    const [data, setData] = useState({})
    const { user } = useContext(DataContext)

    const updateSearch = (search) => {
        console.log(search);

        // axios.get('http://localhost:8080/api/creditscore/00010015b694e98dc37c')
        // .then(data => console.log(data))

        // useEffect(() => {
        //     async function getData(search) {
        //       try {

        //         const paramsString = queryString.stringify(search);
        //         const requestUrl = `http://localhost:8080/api/creditscore/${paramsString}`;
        //         const response = await fetch(requestUrl);
        //         const responseJSON = await response.json();
        //         console.log({ responseJSON });
        
        //         // const { data } = responseJSON;
        //         // setSearch(data);
        //       } catch (error) {
        //         console.log('Failed to fetch post list: ', error.message);
        //       }
        //     }
        //     getData(search);
        //   }, []);
    
    }


  
    
    return (
        <>
            <View style={styles.search}>
                <SearchBar
                    placeholder="Enter phone number..."
                    onChangeText={updateSearch}
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                   
                    value={search} 
                    lightTheme        
                >

                </SearchBar>


                <View> 
                <Text> Name: {user.username}</Text> 
                <Text> Fico: </Text> 

                </View>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 0,
        height: 40,
        borderRadius: 50,
        marginHorizontal: 15,
        marginVertical: 20,
        
    },
    inputContainerStyle: {
        marginHorizontal: -15,
        marginTop: -10,
        height: 40,
        borderRadius: 50,
    }

  
})


export default Search;