<template padding>
  <q-page class="row justify-center flex">
    <div class="q-pa-md col-12 col-md-12">
      <q-table flat title="Lista de Contactos" :rows="rows" :columns="columns" row-key="name">
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th auto-width />
            <div class="row justify-end">
              <q-btn color="primary" label="Novo" icon="add" :to="'/formsPage'"></q-btn>
            </div>
            <q-th v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td auto-width>
              <q-btn
                size="sm"
                color="accent"
                round
                dense
                @click="props.expand = !props.expand"
                :icon="props.expand ? 'remove' : 'add'"
              />
            </q-td>
            <q-td v-for="col in props.cols" :key="col.name" :props="props">
              {{ col.value }}
            </q-td>
          </q-tr>
          <q-tr v-show="props.expand" :props="props">
            <q-td colspan="100%">
              <div class="text-left">This is expand slot for row above: {{ props.row.name }}.</div>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: 'name',
    required: true,
    label: '',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
]

const rows = [
  {
    name: 'Gulamo Amade',
  },
  {
    name: 'Manuel Domingos',
  },
]

export default {
  setup() {
    return {
      columns,
      rows,
    }
  },
}
</script>
