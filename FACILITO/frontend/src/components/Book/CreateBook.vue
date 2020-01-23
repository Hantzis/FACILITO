<template>
    <div class="container">
      <div class="row">
        <div class="col text-left">
          <h2>Crear Libro</h2>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <form @submit="onSubmit">
                <div class="form-group row">
                  <label for="title" class="col-sm-2 col-form-label text-right">Título</label>
                  <div class="col-sm-6">
                    <input type="text" placeholder="Título" name="title" value=""
                           class="form-control" v-model.trim="form.title">
                  </div>
                </div>
                <div class="form-group row">
                  <label for="description" class="col-sm-2 col-form-label text-right">
                    Descripción</label>
                  <div class="col-sm-6">
                    <textarea name="description" class="form-control"
                              placeholder="Descripción" rows="3" v-model.trim="form.description">
                    </textarea>
                  </div>
                </div>
                <div class="rows">
                  <div class="col text-left">
                    <b-button-group>
                      <b-button type="submit" variant="primary">Crear</b-button>
                      <b-button type="submit" class="btn-large-space" :to="{ name: 'list-book' }">
                        Cancelar</b-button>
                    </b-button-group>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'CreateBook',
  data() {
    return {
      form: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const path = 'http://localhost:8000/api/v1/books/';
      axios.post(path, this.form).then((response) => {
        this.form.title = response.data.title;
        this.form.description = response.data.description;
        console.log('Libro actualizado exitosamente');
        swal({
          title: 'Libro creado exitosamente',
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          window.location.href = '/books/';
        });
      }, (error) => {
        console.log('response', error.response.data);
        console.log('response', Object.entries(error.response.data));
        const msg = Object.entries(error.response.data);
        /* let msg = ''; */
        swal('El libro no ha sido creado', msg.toString(), 'error');
      }).catch((error) => {
        console.log('catch', error);
      });
    },
  },
};
</script>

<style scoped>

</style>
