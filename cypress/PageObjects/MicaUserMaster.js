/// <reference types="cypress" />

class UserMaster{

    addUserButton = "#addBtn"
    userName = "#username"
    emailID = "#emailid"
    contactNumber = "#contactno"
    clickOnUserType = ":nth-child(4) > .k-picker"
    selectUserType = "[data-offset-index='0']"
    clickOnRoleType = ":nth-child(5) > .k-picker"
    selectRoleType ="#role_select_listbox > [data-offset-index='0']"
    clickSaveButton = "#saveBtn"
    clickDeleteButton = ":nth-child(1) > .sorting_1 > .delete_user > .fas"
    clickConfirmationPopupDeleteButton = ".swal2-confirm"
    Message = ".d-flex > .flex-grow-1"
    tosterMessage = ".toast-body"
    clickEditButton = ":nth-child(1) > .sorting_1 > .me-2 > .edituser_btn > .fas"
    getAllRows = "table[id = 'user_table'] > tbody > tr"
    getAllColumn = "table[id = 'user_table']> thead > tr"

    // Get 528 Records
    CaptureSpecificDataIntoTheTable = "table[id = 'user_table'] > tbody > tr:nth-child(4) > td:nth-child(4)"
 


    clickaddButtonOnUserMaster()
    {
        cy.get(this.addUserButton).click()
    }

    enterUserName(EUN)
    {
        cy.get(this.userName).clear().type(EUN)
    }

    enterEmailID(EEID)
    {
        cy.get(this.emailID).clear().type(EEID)
    }

    enterContactNo(ECNO)
    {
        cy.get(this.contactNumber).clear().type(ECNO)
    }

    clickOnUserTypeDropdown()
    {
        cy.get(this.clickOnUserType).click()
    }

    selectAdminOption()
    {
        cy.get(this.selectUserType).click()
    }

    clickOnRoleTypeDropdown()
    {
        cy.get(this.clickOnRoleType).click()
    }

    selectAdminRole()
    {
        cy.get(this.selectRoleType).click()
    }

    clickSaveUserButton()
    {
        cy.get(this.clickSaveButton).click()
    }

    clickUserDeleteButton()
    {
        cy.get(this.clickDeleteButton).click()
    }

    clickDeleteButtonOnConfirmationPopup()
    {
        cy.get(this.clickConfirmationPopupDeleteButton).click()
    }

    comanMessage(COMMESS)
    {
        cy.get(this.Message).contains(COMMESS)
    }
    saveandEnterTosterMessage(SAETTM)
    {
        cy.get(this.tosterMessage)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Text of the visible element :-" , text)
        })
    }

    clickEditButtonforUpdateUserData()
    {
        cy.get(this.clickEditButton).click()
    }

    ceptureAllRows(CAR)
    {
        cy.get(this.getAllRows).should("have.length" , CAR)
    }

    cpatureAllColumn(CAC)
    {
        cy.get(this.getAllColumn).should("have.length" , CAC)
    }

    getFixRecords(GFR)
    {
        cy.get(this.CaptureSpecificDataIntoTheTable).contains(GFR)
    }
}

export default UserMaster;