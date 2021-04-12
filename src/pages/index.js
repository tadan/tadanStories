import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
    return (
        <Layout>
            <Seo title={`Home Page`} />
            <div>First Page</div>
        </Layout>
    )
}

export default IndexPage
