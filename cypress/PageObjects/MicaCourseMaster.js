/// <reference types="cypress" />


class CourseMaster{
    // Add new course
    addButton = "#add_btn > .btn"
    batchDropdown = "div[tabindex='0'] > .k-picker"
    optionBatchDropdown = "#batch_select_listbox > .k-list-item"
    termDropdown = ":nth-child(2) > .k-picker"
    optionTermDropdown = "#term_select_listbox > [data-offset-index='0']"
    txtCourseName = "#course_name"
    courseGroupDropdown = ":nth-child(4) > .k-picker"
    optionCourseGroupDropdown = "#coursegroup_select_listbox > [data-offset-index='0'] > .k-list-item-text"
    specializationDropdown = ":nth-child(5) > .k-picker"
    optionSpecializationDropdown = "#specialization_select_listbox > [data-offset-index='0']"
    areaDropdown = ":nth-child(6) > .k-picker"
    optionAreaDropdown = "#area_select_listbox > [data-offset-index='0']"
    typeDropdown = ".k-dropdowntree"
    optionTypeDropdown = ".k-checkbox-label"
    txtCredits = "#credits"
    buttonSave = "#savebtn"

    // Delete Course
    txtCourseNameSearch = "label > input"
    buttonDelete = ".delete_confirm > .fas"
    buttonConfirmDelete = ".swal2-confirm"

    // Edit Course Master Data
    buttonEdit = ".editbtn > .fas"
    optionCoreInTypeDropdown = ".k-treeview-top > .k-treeview-leaf > .k-treeview-leaf-text"

    // Excel Export
    buttonExcel = "#excelBtn > .btn"




// ----------------------------------------------------------------------------------------------------------
    // Add New Course Object
    clickAddButton()
    {
        cy.get(this.addButton).click()
    }

    clickBatchDropdown()
    {
        cy.get(this.batchDropdown).click()
    }

    selectBatch()
    {
        cy.get(this.optionBatchDropdown).eq(0).click({force: true})
    }

    clicktermDropdown()
    {
        cy.get(this.termDropdown).click()
    }

    selectTerm()
    {
        cy.get(this.optionTermDropdown).eq(0).click()
    }

    enterCourseName(ECN)
    {
        cy.get(this.txtCourseName).clear().type(ECN)
    }

    clickCourseGroupDropdown()
    {
        cy.get(this.courseGroupDropdown).click()
    }

    selectCourseGroup()
    {
        cy.get(this.optionCourseGroupDropdown).eq(0).click()
    }

    clickSpecializationDropdown()
    {
        cy.get(this.specializationDropdown).click()
    }

    selectSpecialization()
    {
        cy.get(this.optionSpecializationDropdown).eq(0).click()
    }

    clickAreaDropdown()
    {
        cy.get(this.areaDropdown).click()
    }

    selectArea()
    {
        cy.get(this.optionAreaDropdown).eq(0).click()
    }

    clickTypeDropdown()
    {
        cy.get(this.typeDropdown).click()
    }

    selectCheckAllCheckBoxInTypeDropdown()
    {
        cy.get(this.optionTypeDropdown).click()
    }

    enterCredits(EC)
    {
        cy.get(this.txtCredits).clear().type(EC)
    }

    clickSaveButton()
    {
        cy.get(this.buttonSave).click()
    }


    // Delete Course
    searchCourseNameInSearchBar(SCNISB)
    {
        cy.get(this.txtCourseNameSearch).type(SCNISB)
    }

    clickDeleteButton()
    {
        cy.get(this.buttonDelete).eq(0).click()
    }

    clickConfirmDeleteButton()
    {
        cy.get(this.buttonConfirmDelete).click()
    }

    // Edit Course Master Data
    clickEditButton()
    {
        cy.get(this.buttonEdit).click({ multiple: true })
    }

    selectCoreOptionInTypeDropdown()
    {
        cy.get(this.optionCoreInTypeDropdown).click()
    }

    // Excel Export
    clickExcelButton()
    {
        cy.get(this.buttonExcel).click()
    }
}

export default CourseMaster;