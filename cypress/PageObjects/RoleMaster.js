/// <reference types="cypress" />

class roleMaster{

    // Add New Role
    buttonAdd = "#add_btn"
    dropdownUserType = ".k-picker"
    dropdownOption = "span[class='k-list-item-text']"
    txtRoleName = "#rolename"
    checkHeaderAddCheckBox = "#add_checkall"
    checkHeaderEditCheckBox = "#edit_checkall"
    checkHeaderDeleteCheckBox = "#delete_checkall"
    checkHeaderExportCheckBox = "#other_checkall"
    checkHeaderViewCheckBox = "#view_checkall"
    buttonSave = "#savebtn"
    message = ".toast-body"

    // Delete Role
    typeRoleNameinSearchBar = "input[type='search']"
    buttonDelete = ".delete_confirm > .fas"
    buttonConfirmDelete = ".swal2-confirm"

    // Edit Role
    buttonEdit = ":nth-child(1) > .sorting_1 > .me-2 > .editbtn > .fas"

    // Logout
    profileIcon = ".cursor-pointer > .symbol"
    textLogout = "#kt_header_user_menu_toggle > .menu > :nth-child(4) > .menu-link"

    // Remove User master rights and then access usermaster
    addCheckBox = "#sub_add_6"
    editCheckBox = "#sub_edit_6"
    deleteCheckBox = "#sub_delete_6"
    exportCheckBox = "#sub_other_6"
    viewCheckBox = "#sub_view_6"
    userMasterURL = "http://103.106.20.186:9007/micaqc/user"
    txtErrorCode = "h2"





    // Add New Role
    clickAddButton()
    {
        cy.get(this.buttonAdd).click()
    }

    clickUserTypeDropdown()
    {
        cy.get(this.dropdownUserType).click()
    }

    selectUserType()
    {
        cy.get(this.dropdownOption).eq(0).click({force:true})
    }
    
    typeRoleNmae(TRN)
    {
        cy.get(this.txtRoleName).clear().type(TRN)
    }

    clickAddCheckBox()
    {
        cy.get(this.checkHeaderAddCheckBox).click()
    }

    clickEditCheckBox()
    {
        cy.get(this.checkHeaderEditCheckBox).click()
    }

    clickDeleteCheckBox()
    {
        cy.get(this.checkHeaderDeleteCheckBox).click()
    }

    clickExportCheckBox()
    {
        cy.get(this.checkHeaderExportCheckBox).click()
    }

    clickViewCheckBox()
    {
        cy.get(this.checkHeaderViewCheckBox).click().click()
    }

    clickSaveButton()
    {
        cy.get(this.buttonSave).click()
    }

    successMessage()
    {
        cy.get(this.message).should("be.visible").invoke("text").then((text) => {
            cy.log("Text of the visible element :-" , text)
        })
    }

    // Delete Role
    searchRoleName(SRN)
    {
        cy.get(this.typeRoleNameinSearchBar).type(SRN)
    }

    clickDeleteButton()
    {
        cy.get(this.buttonDelete).click({ multiple: true })
    }

    clickConfirmDeletButton()
    {
        cy.get(this.buttonConfirmDelete).click()
    }

    // Edit Role
    clickEditButton()
    {
        cy.get(this.buttonEdit).click()
    }

    selectUserTypeEdit()
    {
        cy.get(this.dropdownOption).eq(2).click({force:true})
    }

    // Logout
    clickProfileIcon()
    {
        cy.get(this.profileIcon).click()
    }

    clickLogoutOption()
    {
        cy.get(this.textLogout).click()
    }

    // Remove User master rights and then access usermaster
    addCB()
    {
        cy.get(this.addCheckBox).click()
    }

    editCB()
    {
        cy.get(this.editCheckBox).click()
    }

    deleteCB()
    {
        cy.get(this.deleteCheckBox).click()
    }

    exportCB()
    {
        cy.get(this.exportCheckBox).click()
    }

    viewCB()
    {
        cy.get(this.viewCheckBox).click()
    }

    visitUserMasterURL()
    {
        cy.visit(this.userMasterURL)
    }

    displayErrorCode()
    {
        cy.get(this.txtErrorCode).should("be.visible").invoke("text").then((text) => {
            cy.log("Text of the visible element :-" , text)
        })
    }
}

export default roleMaster;