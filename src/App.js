import React from 'react';
import Layout from './hoc/Layout/Layout'
import Task from './containers/Task/Task';

function App() {
  return (
    <div>
      <Layout>
        <Task/>
      </Layout>      
    </div>
  );
}

export default App;
