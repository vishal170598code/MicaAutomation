/// <reference types="cypress" />


class CourseGroupMaster{

    // Add New Course Group
    masterDropdown = "#master"
    addButton = "#addBtn"
    inputCourseGroupName = "#coursegroupname"
    inputShortCourseGroupName = "#shortname"
    radioButtonIsCore = "input[value='1']"
    buttonSave = "#save"
    commonMessage = ".toast-body"

    // SearchandDownloadExcel
    inputSearch = "input[type='search']"
    buttonExcel = "#excelBtn"

    // Update Course Group
    buttonEdit = ":nth-child(1) > .sorting_1 > .me-2 > #editBtn > .fas"
    radioButtonIsMajor = "input[value='4']"

    // Inactive and Active Record
    checkBoxActive = "#active"
    recordLable = ".badge.badge-danger"

    // Delete Record
    inputSearchBar = "input[type='search']"
    buttonDelete = ".delete_confirm > .fas"
    buttonConfirmDelete = ".swal2-confirm"
    textGrid = ".dataTables_empty"

    // Get all the recodes and print
    grtTable = "[id='course_group_table'] > tbody > tr"




    // Add New Course Group
    hoverOnMasterDropdown()
    {
        cy.get(this.masterDropdown).trigger("mouseover")
    }

    clickAddButton()
    {
        cy.get(this.addButton).click()
    }

    enterCourseGroupName(ECGN)
    {
        cy.get(this.inputCourseGroupName).clear().type(ECGN)
    }

    enterShortCourseGroupName(ESCGN)
    {
        cy.get(this.inputShortCourseGroupName).clear().type(ESCGN)
    }

    clickIsCoreRadioButton()
    {
        cy.get(this.radioButtonIsCore).click()
    }

    clickSaveButton()
    {
        cy.get(this.buttonSave).click()
    }

    successMessage()
    {
        cy.get(this.commonMessage)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Text of the visible element :-" , text)
        })
    }

    // SearchandDownloadExcel
    searchRecord()
    {
        cy.get(this.inputSearch).type("DIGITAL TRANSFORMATION MANAGEMEN")
    }

    clickExcelButton()
    {
        cy.get(this.buttonExcel).click()
    }

    // Update Course Group
    clickEditButton()
    {
        cy.get(this.buttonEdit).click()
    }

    clickIsMajorRadioButton()
    {
        cy.get(this.radioButtonIsMajor).click()
    }

    // Inactive and Active Record
    clickActiveCheckBox()
    {
        cy.get(this.checkBoxActive).click()
    }

    isRecordsActiveOrInactive()
    {
        cy.get(this.recordLable)
        .should("be.visible")
        .invoke("text")
        .then((text) => {
            cy.log("Text of the visible element :-" , text)
        })
    }

    // Delete Specific Record
    inputInSearchBar(IISB)
    {
        cy.get(this.inputSearchBar).type(IISB)
    }

    clickDeleteButton()
    {
        cy.get(this.buttonDelete).click()
    }

    clickConfirmDeleteButton()
    {
        cy.get(this.buttonConfirmDelete).click()
    }

    getTestinGrid()
    {
        cy.get(this.textGrid).should("have.text" , "No matching records found")
    }


    // Get all the recodes and print

    getAllRecords() {
        const records = [];
        cy.get(this.grtTable).each(($row) => {
            const rowData = [];
            cy.wrap($row).find("th, td").each(($cell) => {
                rowData.push($cell.text());
            });
            records.push(rowData);
        });
        return records;
    }
}

export default CourseGroupMaster;