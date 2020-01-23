<template>
    <div class="container">
      <div class="row">
        <div class="col">
          <h3>¿Estás seguro de eliminar?</h3>
          <p>Título: {{ this.element.title }}</p>
          <p>Descripcion: {{ this.element.description }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <b-button @click="deleteBook" variant="danger">Eliminar</b-button>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
// eslint-disable-next-line
import swal from 'sweetalert';

export default {
  name: 'DeleteBook',
  data() {
    return {
      bookID: this.$route.params.bookID,
      element: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    getBook() {
      const path = `
      http://localhost:8000/api/v1/books/${this.bookID}/
      `;
      axios.get(path).then((response) => {
        this.element.title = response.data.title;
        this.element.description = response.data.description;
      }).catch((error) => {
        console.log(error);
      });
    },
    deleteBook() {
      const path = `
                     http://localhost:8000/api/v1/books/${this.bookID}/
                   `;
      axios.delete(path).then((response) => {
        console.log(response);
        window.location.href = '/books/';
      }).catch((error) => {
        console.log(error);
        swal({
          title: 'No es posible eliminar el libro:',
          icon: 'error',
          confirmButtonText: 'Continuar',
        });
      });
    },
  },
  created() {
    this.getBook();
  },
};
</script>

<style scoped>

</style>
