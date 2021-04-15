import frappe
@frappe.whitelist()
def Notice_Board_List():
    return frappe.get_all('Notice Board',"*")