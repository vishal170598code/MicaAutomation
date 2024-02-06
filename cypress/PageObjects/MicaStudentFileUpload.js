/// <reference types="cypress" />

class StudentUpload{
    hoverOnMasterDropdown = "#master"
    clickStudent = "#student_master"
    clickSTDBulkUploadBtn = "#bulkuploadbtn"
    clickBatchDropdown = "span[role='combobox']"
    select20232025BatchOption = ".k-list-item"
    clickSelectFileInputField = "#excel_file"
    btnUpload = "#excel_upload"
    clickSubmitButton = "#submitBtn"
    commenMessage = ".d-flex > .flex-grow-1"

    // Get Delete Batch Name
    deleteBatchName = ".odd > .sorting_1"
    deleteBatch = ".odd > :nth-child(1) > .delete_confirm > .fas"
    deletePermitionPopup = ".swal2-confirm"


    hoverOnMasterDROP()
    {
        cy.get(this.hoverOnMasterDropdown).trigger("mouseover")
    }

    clickStudentMasterOption()
    {
        cy.get(this.clickStudent).click()
    }

    clickStudentBulkUploadButton()
    {
        cy.get(this.clickSTDBulkUploadBtn).click()
    }

    clickOnBatchDropdown()
    {
        cy.get(this.clickBatchDropdown).click()
    }

    select2325BatchOption()
    {
        cy.get(this.select20232025BatchOption).eq(1).click({ force: true })
    }

    clickFileUploadInputField(CFUIF)
    {
        cy.get(this.clickSelectFileInputField).attachFile(CFUIF)
    }

    clickUploadButton()
    {
        cy.get(this.btnUpload).click()
    }

    clickFinalSubmitButton()
    {
        cy.get(this.clickSubmitButton).click()
    }

    SuccessMessage()
    {
        cy.get(this.commenMessage)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Text of the visible element :-" , text)
        })
    }

    deleteStudentBatchName()
    {
        cy.get(this.deleteBatchName)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Delete Batch Name :- " , text)
        })
    }

    deletedBatchName()
    {
        cy.get(this.deleteBatch).click()
    }

    clickConfirmDeleteButton()
    {
        cy.get(this.deletePermitionPopup).click()
    }

    deleteSuccessMessage()
    {
        cy.get(this.commenMessage)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Text of the visible element :-" , text)
        })
    }
}


export default StudentUpload; 