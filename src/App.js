import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import ContentForm from './Components/ContentForm'
import {
  ApolloClient, 
  InMemoryCache,
  ApolloProvider,
  
} from '@apollo/client'


function App() {

  const client = new ApolloClient({
    uri:'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Header />
      <Sidebar />
      <ContentForm />
    </ApolloProvider>
  );
}

export default App;
