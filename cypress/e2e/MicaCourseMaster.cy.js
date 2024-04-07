/// <reference types="cypress" />

import CourseMaster from "../PageObjects/MicaCourseMaster";

describe("TestingCourseMaster" , () => {
    before(() => {
        cy.visit("/")
    })
    beforeEach(() => {
        cy.Login("admin@emergingfive.com" , "admin")
        cy.MasterDropdownHoverAndClick(("#course_master"))
    })

    it("addnewcoursewithvaliddata" , () => {
        cy.fixture("MicaCourseMaster.json").then((data) => {
            const CM = new CourseMaster;

            CM.clickAddButton()
            CM.clickBatchDropdown()
            CM.selectBatch()
            CM.clicktermDropdown()
            CM.selectTerm()
            CM.enterCourseName(data.NewCN.NewCourseName)
            CM.clickCourseGroupDropdown()
            CM.selectCourseGroup()
            CM.clickSpecializationDropdown()
            CM.selectSpecialization()
            CM.clickAreaDropdown()
            CM.selectArea()
            CM.clickTypeDropdown()
            CM.selectCheckAllCheckBoxInTypeDropdown()
            CM.enterCredits(data.NewCN.NewCredits)
            CM.clickSaveButton()
            cy.ToasterMessage()
        })
    })

    it("editCourseMasterData" , () => {
        cy.fixture("MicaCourseMaster.json").then((data) => {
            const CM = new CourseMaster;

            CM.searchCourseNameInSearchBar(data.NewCN.NewCourseName)
            CM.clickEditButton()
            CM.clickBatchDropdown()
            CM.selectBatch()
            CM.clicktermDropdown()
            CM.selectTerm()
            CM.enterCourseName(data.EditCN.EditCourseName)
            CM.clickCourseGroupDropdown()
            CM.selectCourseGroup()
            CM.clickSpecializationDropdown()
            CM.selectSpecialization()
            CM.clickAreaDropdown()
            CM.selectArea()
            CM.clickTypeDropdown()
            CM.selectCheckAllCheckBoxInTypeDropdown()
            CM.selectCoreOptionInTypeDropdown()
            CM.enterCredits(data.EditCN.EditCredits)
            CM.clickSaveButton()
            cy.ToasterMessage()
        })
    })

    it("searchInSearchBarAndDeleteCourse" , () => {
        cy.fixture("MicaCourseMaster.json").then((data) => {
            const CM = new CourseMaster;

            CM.searchCourseNameInSearchBar(data.EditCN.EditCourseName)
            CM.clickDeleteButton()
            CM.clickConfirmDeleteButton()
            cy.ToasterMessage()
        })
    })

    it("downloadCourseMasterExcel" , () => {
        cy.fixture("MicaCourseMaster.json").then((data) => {
            const CM = new CourseMaster;

           CM.clickExcelButton()
        })
    })

    it("downloadSpecificRecordExcelFile" , () => {
        cy.fixture("MicaCourseMaster.json").then((data) => {
            const CM = new CourseMaster;

            CM.searchCourseNameInSearchBar(data.EditCN.EditCourseName)
            CM.clickExcelButton()
        })
    })

    it.only("saveAndEnterDataInFields" , () => {
        cy.fixture("MicaCourseMaster.json").then((data) => {
            const CM = new CourseMaster;
            CM.clickAddButton()
            CM.clickSaveButton()
            cy.ToasterMessage(data.Message.Batch)
            
            CM.clickBatchDropdown()     // Dropdown(1)
            CM.selectBatch()
            CM.clickSaveButton()
            cy.ToasterMessage(data.Message.Term)
            
            CM.clicktermDropdown()      // Dropdown(2)
            CM.selectTerm()
            CM.clickSaveButton()
            cy.ToasterMessage(data.Message.CourseName)
            
            CM.enterCourseName(data.NewCN.NewCourseName)    // InputField(3)
            CM.clickSaveButton()
            cy.ToasterMessage(data.Message.CourseGroup)
            
            CM.clickCourseGroupDropdown()       // Dropdown(4)
            CM.selectCourseGroup()
            CM.clickSaveButton()
            cy.ToasterMessage(data.Message.Area)
            
            CM.clickAreaDropdown()      // Dropdown(5)
            CM.selectArea()
            CM.clickSaveButton()
            cy.ToasterMessage(data.Message.Type)
            
            CM.clickTypeDropdown()      // Dropdown(6)
            CM.selectCheckAllCheckBoxInTypeDropdown()
            CM.clickTypeDropdown()
            CM.clickSaveButton()
            cy.ToasterMessage(data.Message.Credits)
            
            CM.enterCredits(data.NewCN.NewCredits)      // InputField(7)
            CM.clickSaveButton()
            cy.ToasterMessage(data.Message.SuccMess)
            
        })
    })
})