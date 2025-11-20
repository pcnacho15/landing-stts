import { column, defineDb, defineTable } from 'astro:db';


const Contact = defineTable({
  columns: {
    id: column.number({  primaryKey: true, autoIncrement: true }),
    nombre: column.text(),
    email: column.text(),
    empresa: column.text(),
    telefono: column.text(),
    mensaje: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    Contact,
  },
});
