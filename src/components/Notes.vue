<template>

  <div>
    <h1>List</h1>
    <ul>
      <li v-for="(note,idx) in notes" :key="idx">{{ note }}</li>
    </ul>
    <input type="text" v-model="title" @keypress.enter="save" />
    <p>Total Notes Count: {{totalNotes}}</p>
  </div>
</template>
<script>
  import {ref,computed} from "vue";
  import {useStore} from 'vuex'

export default {
  setup(){
    const store = useStore()

    const notes = computed(()=> store.state.notes)
    const totalNotes = computed(()=> store.getters.totalNotes)

    const title = ref('')
    function save(){
      store.dispatch('saveNote', title.value)
      title.value = ''
    }
    return{
      notes,
      title,
      save,
      totalNotes
    }

  }
}
</script>

<style>
li{
  list-style: none;
}
</style>