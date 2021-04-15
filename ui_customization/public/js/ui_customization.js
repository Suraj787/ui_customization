$(document).ready(function () {
    let proFileRole = null
    if (frappe.session.user != 'Guest') {
        frappe.model.get_value('User', { 'name': frappe.session.user }, "role_profile_name",
            (role) => {
                // Update Header Images
                proFileRole = role.role_profile_name
                frappe.model.get_value('Site Settings', { 'name': 'Site Settings' }, '*',
                    (settings) => {
                        // console.log(proFileRole)
                        // console.log(settings)
                        if (proFileRole === 'Student Role') {
                            const style = document.createElement('style');
                            style.innerHTML = `
                                header.navbar::after,
                                nav.navbar.navbar-expand-lg::after {
                                    background: url(${settings.student_background}) -389px -101px !important;
                                }
                                `;
                            document.head.appendChild(style);
                        } else if (proFileRole === 'Employee Role') {
                            const style = document.createElement('style');
                            style.innerHTML = `
                            header.navbar::after,
                            nav.navbar.navbar-expand-lg::after {
                                background: url(${settings.employee_background}) -389px -101px !important;
                            }
                            `;
                            document.head.appendChild(style);
                        }else{
                            const style = document.createElement('style');
                            style.innerHTML = `
                            header.navbar::after,
                            nav.navbar.navbar-expand-lg::after {
                                background: url(${settings.main_background}) -389px -101px !important;
                            }
                            `;
                            document.head.appendChild(style);
                        }
                    })
            })
        // Update Notice Board
        frappe.call({
            method: "ui_customization.ui_customization.doctype.custom_methords.Notice_Board_List",
            args: {

            },
            callback: (r) => {
                // console.log(r)
            }
        });
    }
})