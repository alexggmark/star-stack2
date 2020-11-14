import React from 'react'
import {useQuery, gql} from '@apollo/client'

const TEST_QUERY = gql`
  query TestQuery {
    hello
  }
`

interface DataResponse {
  hello: string
}

interface IProps {
  loading: boolean
  data: DataResponse
}

const DisplayData: React.FC<IProps> = ({loading, data}) => {
  if (loading) return <h1>Loading</h1>

  return <h1>{data.hello}</h1>
}

const Comp1 = () => {
  const {loading, data} = useQuery(TEST_QUERY)
  React.useEffect(() => {
    console.log(loading)
    console.log(data)
  })
  return <DisplayData data={data} loading={loading} />
}

export default Comp1