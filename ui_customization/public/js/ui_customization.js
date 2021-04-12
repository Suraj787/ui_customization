// (function() {
//   var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
//   link.type = 'image/x-icon';
//   link.rel = 'icon';
//   link.href = '/assets/images/fav.png';
//   document.getElementsByTagName('head')[0].appendChild(link);
// })();
document.querySelector("link[rel*='icon']").href = "/assets/images/fav.png";

// frappe.model.get_value('Print Settings', {'name': 'Print Settings'}, 'pdf_page_size',
//   function(d) {
//     console.log(d)
// })
  
// frappe.model.get_value('Site Settings', {'name': 'Site Settings'}, 'logo',
//   function(d) {
//     console.log(d)
// })
  
//   frappe.ui.form.on('Site Settings', {
//     // frm passed as the first parameter
//     setup(frm) {
//         console.log(frm)
//         // write setup code
//     }
// })


	