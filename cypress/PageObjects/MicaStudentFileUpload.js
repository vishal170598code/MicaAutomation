/// <reference types="cypress" />


class StudentUpload{
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

    // Download Temlate
    DownloadTemp = "#downloadtemplate"

    // Download Excel File
    DownExcel = "#excelBtn"

    // Delete Single Student
    GetStudentName = ":nth-child(1) > .text-center > #deletebulkuploadbtn > .fas"
    DeleteUser = "#deletebulkuploadbtn"
    AllowDeletePermision = ".swal2-confirm"
    getNumberOfStudent = "#detail-table > tbody > tr"

    // Upload and Delete All student
    getAllUserElement = "table > tbody > tr"



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

    // Get Delete Batch Name
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

    // Download Temlate
    downloadTempalte()
    {
        cy.get(this.DownloadTemp).click()
    }

    // Download Excel File
    downloadExcel()
    {
        cy.get(this.DownExcel).click()
    }

    // Delete Single Student
    getDeletedStudentName()
    {
        cy.get(this.GetStudentName)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Text of the visible element :-" , text)
        })
    }

    clickDeleteButton()
    {
        cy.get(this.DeleteUser).click()
    }

    clickDeleteButtonOnPermission()
    {
        cy.get(this.AllowDeletePermision).click()
    }

    getLengthNumberOfStudent()
    {
        cy.get(this.getNumberOfStudent).should("have.length" , 4)
    }

    // Upload and Delete All student
    getAlltheuserfromtable()
    {
        cy.get(this.getAllUserElement)
    }
}


export default StudentUpload; 