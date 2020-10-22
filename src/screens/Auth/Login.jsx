import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

import Inputs from '../../components/Inputs';
import Submit from '../../components/Submit';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import Account from '../../components/Account';

const InfoSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Username is empty'),


    password: Yup.string()
        .min(8, 'Too Short!')
        .max(11, 'Too Long!')
        .required('Password is empty'),
});


const Login = props => {
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            validationSchema={InfoSchema}
            onSubmit={(errors) => {
                console.log(errors);

            }}
        >
            {({ errors, handleChange, handleSubmit, values }) => (
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <View style={styles.container}>
                        <Image
                            source={require('../../assets/login.png')}
                            resizeMode="center"
                            style={styles.image} />
                        <Text style={styles.textTitle}>Welcome back</Text>
                        <Text style={styles.textBody}>Log in to your existant account</Text>
                        <View style={{ marginTop: 20 }} />
                        <Inputs
                            placeholder="Username"
                            icon="user"
                            onChangeText={handleChange('username')}
                            value={values.username}
                        />
                        <Text style={{ alignSelf: 'flex-start', fontSize: 12, color: 'red', marginLeft: 16 }}>{errors.username}</Text>
                        <Inputs
                            placeholder="Password"
                            icon="lock"
                            pass={true}
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                        <Text style={{ alignSelf: 'flex-start', fontSize: 12, color: 'red', marginLeft: 16 }}>{errors.password}</Text>
                        <View style={{ width: '90%' }}>
                            <Text style={[styles.textBody], { alignSelf: 'flex-end' }}>Forgot Password?</Text>
                        </View>
                        <Submit
                            title="LOG IN"
                            color="#0148a4"
                            handleSubmit={handleSubmit}
                        />
                        {/* <Text style={styles.textBody}>Or connect using</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Account color="#3b5c8f" icon="facebook" title="Facebook" />
                    <Account color="#ec482f" icon="google" title="Google" />
                </View> */}
                        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                            <Text style={styles.textBody}>Don't Have an account</Text>
                            <Text style={[styles.textBody, { color: 'blue' }]} onPress={() => props.navigation.navigate('SignUp')}> Sign Up</Text>
                        </View>
                    </View>
                </ScrollView>
            )}

        </Formik>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 200,
        marginVertical: 10
    },
    textTitle: {
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontSize: 16
    }
});

export default Login