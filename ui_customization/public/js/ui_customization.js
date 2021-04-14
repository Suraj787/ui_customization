$(document).ready(function () {
    let proFileRole = null
    if (frappe.session.user != 'Guest') {
        frappe.model.get_value('User', { 'name': frappe.session.user }, "role_profile_name",
            (role) => {
                proFileRole = role.role_profile_name
                frappe.model.get_value('Site Settings', { 'name': 'Site Settings' }, '*',
                    (settings) => {
                        // console.log(proFileRole)
                        // console.log(settings)
                        if (proFileRole === 'Student Role') {
                            const style = document.createElement('style');
                            style.innerHTML = `
                                nav.navbar.navbar-expand-lg::after {
                                    background: url(${settings.student_background}) 0px 0px !important;
                                }
                                `;
                            document.head.appendChild(style);
                        } else if (proFileRole === 'Employee Role') {
                            const style = document.createElement('style');
                            style.innerHTML = `
                            nav.navbar.navbar-expand-lg::after {
                                background: url(${settings.employee_background}) 0px 0px !important;
                            }
                            `;
                            document.head.appendChild(style);
                        }
                    })
            })
    }
})