<template>
  <div class="container">
    <div class="row">

      <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                Participantes
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Leão (Vini)</li>
                <li class="list-group-item">Tigre (Larissa)</li>
                <li class="list-group-item">Morcego (Márcio)</li>
                <li class="list-group-item">Guepardo (Bruno)</li>
            </ul>
        </div>
        <div class="col-xs-12" style="height:50px;"></div>  
      </div>

      <div class="col-md-4">
          <div class="card bg-light mb-3" style="max-width: 18rem;">
              <div class="card-header">Sobre você</div>
              <div class="card-body">
                  <h5 class="card-title">Morcego</h5>
                  <p class="card-text">O morcego é um mamífero que voa e se alimenta de frutas ou sangue.</p>
              </div>
          </div>

          <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
              <div class="card-header">Seu amigo...</div>
              <div class="card-body">
                  <h5 class="card-title">Leão | Vini</h5>
                  <p class="card-text">O leão é um felino africano carnívoro.</p>
              </div>
          </div>
      </div>
    
    </div>

    <ApolloQuery
      :query="require('../graphql/GetUsers.gql')"
      
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">{{ data.getAllusers }}</div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>

            

  </div>

</template>

<script>
export default {
    
  name: 'MyBoard',

  data () {
    return {
      name: 'Marcio',
      newMessage: '',
    }
  },
}
</script>

<style>

</style>

