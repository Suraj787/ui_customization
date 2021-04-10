frappe.model.get_value('Print Settings', {'name': 'Print Settings'}, 'pdf_page_size',
  function(d) {
    console.log(d)
  })
  
  
//   frappe.ui.form.on('Site Settings', {
//     // frm passed as the first parameter
//     setup(frm) {
//         console.log(frm)
//         // write setup code
//     }
// })