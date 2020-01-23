<template>
<div class="container">
  <div class="row">
    <div class="col text-left">
      <div>
        <h2>Listado de Libros</h2>
        <div class="text-right">
        <b-button size="sm" :to="{ name: 'create-book' }"
                  variant="primary">
          Crear Libro</b-button>
        </div>
      </div>
      <br />
      <div class="col-md-12">
        <b-table striped hover :items="books" :fields="fields">
          <template v-slot:cell(action)="data">
            <b-button-group>
              <b-button size="sm" variant="primary"
                        :to="{ name: 'edit-book', params: {bookID: data.item.id } }">
                Editar</b-button>
              <b-button size="sm" variant="danger"
                        :to="{ name: 'delete-book', params: {bookID: data.item.id } }">
                Eliminar</b-button>
            </b-button-group>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListBook',
  data() {
    return {
      fields: [
        { key: 'title', label: 'Título', sortable: true },
        { key: 'description', label: 'Descripción', sortable: true },
        { key: 'action', label: 'Acción' },
      ],
      books: [],
    };
  },
  methods: {
    getBooks() {
      const path = 'http://localhost:8000/api/v1/books/';
      axios.get(path)
        .then((response) => {
          this.books = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getBooks();
  },
};
</script>

<style scoped>

</style>
