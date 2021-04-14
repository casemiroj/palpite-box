import React from 'react'
import Layout from '../components/Layout'
import '../css/styles.css'


const MyApp = ({ Component, PageProps }) => {
    return (
        <Layout>
            <Component {...PageProps} />   
        </Layout>
    )
}

export default MyApp